import React, { useState } from "react";

interface Teacher {
  fullName: string;
  username: string;
  email: string;
  role: string;
}

const fakeTeacher: Teacher = {
  fullName: "أحمد علي",
  username: "teacher123",
  email: "teacher@example.com",
  role: "teacher",
};

const TeacherCard = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSend = () => {
    if (!message && !file) {
      alert("يرجى إدخال نص أو اختيار ملف");
      return;
    }

    // حفظ البيانات في localStorage (تجربة فقط)
    const submissions = JSON.parse(localStorage.getItem("submissions") || "[]");
    submissions.push({
      teacher: fakeTeacher.username,
      message,
      fileName: file?.name || null,
      date: new Date().toLocaleString(),
    });
    localStorage.setItem("submissions", JSON.stringify(submissions));

    alert("تم الإرسال إلى ولي الأمر بنجاح!");
    setMessage("");
    setFile(null);
  };

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
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#5D4636",
      }}>
        <h2 style={{ textAlign: "center", marginBottom: 30, color: "#B8860B", fontSize: 26, letterSpacing: 1 }}>
          معلومات المعلم
        </h2>

        <div style={{ marginBottom: 20 }}>
          <p><strong>الاسم الكامل:</strong> {fakeTeacher.fullName}</p>
          <p><strong>اسم المستخدم:</strong> {fakeTeacher.username}</p>
          <p><strong>البريد الإلكتروني:</strong> {fakeTeacher.email}</p>
          <p><strong>الدور:</strong> {fakeTeacher.role}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <textarea
            placeholder="اكتب ملاحظتك أو رسالتك هنا"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              padding: 12,
              borderRadius: 6,
              border: "1px solid #d9cfc3",
              minHeight: 100,
              fontSize: 14,
              resize: "vertical",
            }}
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            style={{ padding: 6 }}
          />
          <button
            onClick={handleSend}
            style={{
              padding: 12,
              background: "#d6bfa5",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            إرسال إلى ولي الأمر
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
