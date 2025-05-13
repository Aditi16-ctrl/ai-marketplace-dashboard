const Model = require('../models/model');

const uploadModel = async (req, res) => {
  try {
    const { modelName } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;

    const newModel = new Model({ name: modelName, fileUrl });
    await newModel.save();

    res.status(201).json({ message: 'Model uploaded successfully', model: newModel });
  } catch (error) {
    res.status(500).json({ message: 'Upload failed', error });
  }
};

const getModels = async (req, res) => {
  try {
    const models = await Model.find();
    res.json(models);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch models', error });
  }
};

module.exports = { uploadModel, getModels };
