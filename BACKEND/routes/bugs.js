const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');

// Create a bug
router.post('/', async (req, res, next) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
});

// Get all bugs
router.get('/', async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err);
  }
});

// Update bug status
router.put('/:id', async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(bug);
  } catch (err) {
    next(err);
  }
});

// Delete bug
router.delete('/:id', async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bug deleted successfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
