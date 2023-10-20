import React, { useState } from 'react';

function AttendanceList({ getAttendance }) {
  const [studentId, setStudentId] = useState('');
  const [attendance, setAttendance] = useState([]);

  const handleGetAttendance = () => {
    getAttendance(studentId).then((data) => {
      setAttendance(data.attendance);
    });
  };

  return (
    <div>
      <h2>Get Attendance</h2>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={handleGetAttendance}>Get Attendance</button>

      <h3>Attendance Records for Student ID: {studentId}</h3>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>{record.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceList;
