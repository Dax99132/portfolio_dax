const express = require('express');
const router = express.Router();
const Design = require('../Design');

// @route GET /api/designs
router.get('/', async (req, res) => {
  try {
    const designs = await Design.find().sort({ createdAt: -1 });
    res.json(designs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route POST /api/designs
router.post('/', async (req, res) => {
  try {
    const newDesign = new Design(req.body);
    const savedDesign = await newDesign.save();
    res.json(savedDesign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route PUT /api/designs/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedDesign = await Design.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDesign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route DELETE /api/designs/:id
router.delete('/:id', async (req, res) => {
  try {
    await Design.findByIdAndDelete(req.params.id);
    res.json({ message: 'Design deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
