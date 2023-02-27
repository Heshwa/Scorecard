const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create a new Express app
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/performance-scorecard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Define the schema for the PerformanceScorecard model
const performanceScorecardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teamwork: { type: String, required: true },
  communication: { type: String, required: true },
  adaptability: { type: String, required: true },
  initiative: { type: String, required: true },
  problemSolving: { type: String, required: true },
  leadership: { type: String, required: true },
  workEthic: { type: String, required: true },
  creativity: { type: String, required: true },
  description: { type: String },
});

// Define the PerformanceScorecard model
const PerformanceScorecard = mongoose.model(
  'PerformanceScorecard',
  performanceScorecardSchema
);

// Define a route to handle form submissions
app.post('/submit', async (req, res) => {
  try {
    // Create a new performance scorecard document from the request body
    const performanceScorecard = new PerformanceScorecard(req.body);

    // Save the performance scorecard document to the database
    await performanceScorecard.save();

    // Return a success message
    res.json({ message: 'Performance scorecard submitted successfully' });
  } catch (error) {
    // Return an error message
    res.status(500).json({ error: error.message });
  }
});

// Start the server listening on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
