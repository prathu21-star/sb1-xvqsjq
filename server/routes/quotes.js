import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import Quote from '../models/Quote.js';
import Provider from '../models/Provider.js';

const router = express.Router();

// Submit a quote request
router.post('/', authenticateToken, async (req, res) => {
  try {
    const provider = await Provider.findById(req.body.providerId);
    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }

    const quote = new Quote({
      ...req.body,
      userId: req.user.id
    });
    await quote.save();
    res.status(201).json(quote);
  } catch (error) {
    console.error('Error creating quote:', error);
    res.status(400).json({ error: error.message });
  }
});

// Get user's quotes
router.get('/', authenticateToken, async (req, res) => {
  try {
    const quotes = await Quote.find({ userId: req.user.id })
      .populate('providerId');
    res.json(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(400).json({ error: error.message });
  }
});

export default router;