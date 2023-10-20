const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample data to store attendance records (you should use a database in a production app)
const attendanceData = [];

// Route to mark attendance
app.post('/mark-attendance', (req, res) => {
  const { studentId, date } = req.body;

  // Check if the student has already marked attendance for the given date
  const existingEntry = attendanceData.find(entry => entry.studentId === studentId && entry.date === date);

  if (existingEntry) {
    return res.status(400).json({ error: 'Attendance already marked for this date' });
  }

  // Store the attendance record
  attendanceData.push({ studentId, date });
  res.status(201).json({ message: 'Attendance marked successfully' });
});

// Route to retrieve attendance for a specific student
app.get('/get-attendance/:studentId', (req, res) => {
  const studentId = req.params.studentId;

  // Filter attendance records for the given student
  const studentAttendance = attendanceData.filter(entry => entry.studentId === studentId);

  res.status(200).json({ attendance: studentAttendance });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
