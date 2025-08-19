import React from "react";

// بيانات وهمية لطلاب مدرسة مرج الحمام المهنية
interface Student {
  fullName: string;
  username: string;
  gradeD: number; // Distinction
  gradeM: number; // Merit
  gradeP: number; // Pass
  attendance: number;
  absence: number;
}

const students: Student[] = [
  { fullName: "أحمد علي", username: "ahmed123", gradeD: 5, gradeM: 3, gradeP: 2, attendance: 28, absence: 2 },
  { fullName: "محمد خالد", username: "mohamedk", gradeD: 4, gradeM: 4, gradeP: 2, attendance: 26, absence: 4 },
  { fullName: "ياسين حسن", username: "yassinh", gradeD: 6, gradeM: 2, gradeP: 2, attendance: 30, absence: 0 },
  { fullName: "رامي فهد", username: "ramif", gradeD: 3, gradeM: 5, gradeP: 2, attendance: 27, absence: 3 },
];

const MinistryDashboard = () => {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#2E3A59", marginBottom: "20px" }}>
        وزارة التربية والتعليم - مدرسة مرج الحمام المهنية للبنين
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
        لوحة بيانات وهمية لعرض تقدم الطلاب وعلاماتهم وفق نظام BTEC (D/M/P)
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff" }}>
        <thead>
          <tr style={{ backgroundColor: "#2E3A59", color: "#fff", textAlign: "center" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>اسم الطالب</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>اسم المستخدم</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Distinction (D)</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Merit (M)</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Pass (P)</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>الحضور</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>الغياب</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>{s.fullName}</td>
              <td>{s.username}</td>
              <td>{s.gradeD}</td>
              <td>{s.gradeM}</td>
              <td>{s.gradeP}</td>
              <td>{s.attendance}</td>
              <td>{s.absence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MinistryDashboard;
