import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  services: [{
    type: String,
    required: true
  }],
  contact: {
    phone: String,
    email: String,
    website: String
  },
  compliances: [{
    type: String
  }],
  teamSize: {
    research: Number,
    technical: Number,
    support: Number
  },
  keyOfficials: [{
    name: String,
    position: String,
    qualification: String,
    linkedIn: String
  }],
  infrastructure: [{
    category: String,
    items: [{
      name: String,
      model: String,
      specifications: String,
      quantity: Number
    }]
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Provider = mongoose.model('Provider', providerSchema);
export default Provider;