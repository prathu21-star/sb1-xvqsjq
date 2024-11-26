import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import Provider from '../models/Provider.js';
import Service from '../models/Service.js';

const router = express.Router();

// Create provider profile
router.post('/', authenticateToken, async (req, res) => {
  try {
    const provider = new Provider({
      ...req.body,
      userId: req.user.id
    });
    await provider.save();
    res.status(201).json(provider);
  } catch (error) {
    console.error('Error creating provider:', error);
    res.status(400).json({ error: error.message });
  }
});

// List a service
router.post('/services', authenticateToken, async (req, res) => {
  try {
    const provider = await Provider.findOne({ userId: req.user.id });
    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }

    const service = new Service({
      ...req.body,
      providerId: provider._id
    });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(400).json({ error: error.message });
  }
});

// Get provider's services
router.get('/services', authenticateToken, async (req, res) => {
  try {
    const provider = await Provider.findOne({ userId: req.user.id });
    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }

    const services = await Service.find({ providerId: provider._id });
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(400).json({ error: error.message });
  }
});

export default router;