import React, { useState } from 'react';

function AttendanceForm({ markAttendance }) {
  const [studentId, setStudentId] = useState('');
  const [date, setDate] = useState('');

  const handleMarkAttendance = () => {
    markAttendance({ studentId, date });
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleMarkAttendance}>Mark Attendance</button>
    </div>
  );
}

export default AttendanceForm;
