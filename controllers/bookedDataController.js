// src/controllers/bookedDataController.js
const BookedData = require('../models/bookedDataModel');

// Create a new bookedData record
exports.createBookedData = async (req, res) => {
  try {
    const bookedData = new BookedData(req.body);
    await bookedData.save();
    res.status(201).json(bookedData);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create bookedData record' });
  }
};

// Get all bookedData records
exports.getAllBookedData = async (req, res) => {
  try {
    const bookedData = await BookedData.find();
    res.status(200).json(bookedData);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch bookedData records' });
  }
};

// Delete a bookedData record by ID
exports.deleteBookedDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBookedData = await BookedData.findByIdAndDelete(id);
    if (!deletedBookedData) {
      return res.status(404).json({ error: 'BookedData record not found' });
    }
    res.status(200).json(deletedBookedData);
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete bookedData record' });
  }
};
