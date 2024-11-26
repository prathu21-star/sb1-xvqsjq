import type { User, UserRole } from './auth';

// Mock user database
const users = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'USER' as UserRole,
    passwordHash: 'password123'
  },
  {
    id: '2',
    email: 'provider@example.com',
    name: 'Jane Smith',
    role: 'PROVIDER' as UserRole,
    company: 'Test Labs',
    passwordHash: 'password123'
  },
  {
    id: '3',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'ADMIN' as UserRole,
    passwordHash: 'password123'
  }
];

// Mock API functions
export async function loginUser(email: string, password: string) {
  const user = users.find(u => u.email === email);
  
  if (!user || user.passwordHash !== password) {
    throw new Error('Invalid email or password');
  }

  const { passwordHash, ...userWithoutPassword } = user;
  return {
    user: userWithoutPassword,
    token: `mock-token-${user.id}`
  };
}

export async function registerUser(data: {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  company?: string;
}) {
  // Check if user already exists
  if (users.some(u => u.email === data.email)) {
    throw new Error('Email already registered');
  }

  // Create new user
  const newUser = {
    id: `${users.length + 1}`,
    email: data.email,
    name: data.name,
    role: data.role,
    company: data.company,
    passwordHash: data.password
  };

  users.push(newUser);

  const { passwordHash, ...userWithoutPassword } = newUser;
  return {
    user: userWithoutPassword,
    token: `mock-token-${newUser.id}`
  };
}