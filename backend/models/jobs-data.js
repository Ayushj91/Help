const mongoose = require('mongoose');
const Job = require('./Job'); // Replace with the correct path to your Job model
const sampleJobs = require('./data'); // Replace with the correct path to your sample data

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

// Insert the sample job data into the database
Job.insertMany(sampleJobs, (err, docs) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`${docs.length} job listings inserted into the database.`);
  }

  // Close the database connection
  mongoose.connection.close();
});
