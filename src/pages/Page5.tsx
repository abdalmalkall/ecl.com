import React from "react";

interface Student {
  username: string;
  password: string;
  fullName: string;
  email: string;
  role: string;
  nationalId: string;
  grade: string;
  attendance: number;
  absence: number;
}

const fakeStudent: Student = {
  username: "mohamed123",
  password: "123456",
  fullName: "محمد علي",
  email: "mohamed@example.com",
  role: "student",
  nationalId: "1234567890",
  grade: "A",
  attendance: 25,
  absence: 5,
};

const StudentCard = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 20px",
      backgroundColor: "#FFFDF8",
      minHeight: "100vh",
    }}>
      <div style={{
        maxWidth: 500,
        width: "100%",
        padding: 30,
        borderRadius: 25,
        background: "linear-gradient(145deg, #FFF8F0, #FDF3EB)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        transition: "transform 0.4s, box-shadow 0.4s",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#5D4636",
      }}
      onMouseEnter={e => {
        const target = e.currentTarget;
        target.style.transform = "translateY(-12px) scale(1.02)";
        target.style.boxShadow = "0 25px 50px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={e => {
        const target = e.currentTarget;
        target.style.transform = "translateY(0) scale(1)";
        target.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
      }}
      >
        <h2 style={{ 
          textAlign: "center", 
          marginBottom: 30, 
          color: "#B8860B", 
          fontSize: 26,
          letterSpacing: 1,
        }}>معلومات الطالب</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 15, fontSize: 16 }}>
          <p><strong>الاسم الكامل:</strong> {fakeStudent.fullName}</p>
          <p><strong>اسم المستخدم:</strong> {fakeStudent.username}</p>
          <p><strong>البريد الإلكتروني:</strong> {fakeStudent.email}</p>
          <p><strong>الرقم الوطني:</strong> {fakeStudent.nationalId}</p>
          <p><strong>الدور:</strong> {fakeStudent.role}</p>
          <p><strong>التقييم:</strong> {fakeStudent.grade}</p>
          <p><strong>عدد الغياب:</strong> {fakeStudent.absence}</p>
          <p><strong>عدد الحضور:</strong> {fakeStudent.attendance}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
