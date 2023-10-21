import React from 'react';
import AttendanceForm from './AttendanceForm';
import AttendanceList from './AttendanceList';
import './App.css'; // Import the CSS file

function App() {
  const markAttendance = (data) => {
    // Implement a function to make a POST request to your backend to mark attendance
  };

  const getAttendance = (studentId) => {
    // Implement a function to make a GET request to your backend to retrieve attendance data
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Mark Attendance</h2>
        <AttendanceForm markAttendance={markAttendance} />
      </div>
      <div className="list-container">
        <h2>Get Attendance</h2>
        <AttendanceList getAttendance={getAttendance} />
      </div>
    </div>
  );
}

export default App;
