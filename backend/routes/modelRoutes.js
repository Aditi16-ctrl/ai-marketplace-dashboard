const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Model = require('../models/model');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

router.post('/upload', upload.single('model'), async (req, res) => {
  try {
    const newModel = new Model({
      name: req.body.name,
      fileUrl: req.file.path,
    });
    const savedModel = await newModel.save();
    res.status(201).json(savedModel);
  } catch (err) {
    res.status(500).json({ error: 'Error uploading model' });
  }
});

router.get('/', async (req, res) => {
  try {
    const models = await Model.find().sort({ createdAt: -1 });
    res.json(models);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch models' });
  }
});

module.exports = router;
