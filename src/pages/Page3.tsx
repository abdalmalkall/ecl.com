import React, { useState } from "react";

interface Admin {
  username: string;
  fullName: string;
  email: string;
  role: string;
  department?: string; // للقسم إذا كان مدير قسم
}

const fakeAdmin: Admin = {
  username: "admin001",
  fullName: "مدير المنصة الرئيسي",
  email: "admin@example.com",
  role: "admin",
  department: "إدارة عامة", // يمكن تغييره لأي قسم
};

const AdminCard = () => {
  const [note, setNote] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSend = () => {
    if (!note && !file) {
      alert("يرجى إدخال ملاحظة أو اختيار ملف");
      return;
    }

    // حفظ البيانات في localStorage (تجربة فقط)
    const submissions = JSON.parse(localStorage.getItem("adminSubmissions") || "[]");
    submissions.push({
      admin: fakeAdmin.username,
      note,
      fileName: file?.name || null,
      date: new Date().toLocaleString(),
    });
    localStorage.setItem("adminSubmissions", JSON.stringify(submissions));

    alert("تم إرسال البيانات بنجاح!");
    setNote("");
    setFile(null);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 20px",
      backgroundColor: "#F5F5F5",
      minHeight: "100vh",
    }}>
      <div style={{
        maxWidth: 600,
        width: "100%",
        padding: 30,
        borderRadius: 25,
        background: "linear-gradient(145deg, #F0F0F0, #E0E0E0)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}>
        <h2 style={{ textAlign: "center", marginBottom: 30, color: "#1E3A8A", fontSize: 26, letterSpacing: 1 }}>
          لوحة تحكم المدير / مدير القسم
        </h2>

        <div style={{ marginBottom: 20 }}>
          <p><strong>الاسم الكامل:</strong> {fakeAdmin.fullName}</p>
          <p><strong>اسم المستخدم:</strong> {fakeAdmin.username}</p>
          <p><strong>البريد الإلكتروني:</strong> {fakeAdmin.email}</p>
          <p><strong>الدور:</strong> {fakeAdmin.role}</p>
          <p><strong>القسم:</strong> {fakeAdmin.department}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <textarea
            placeholder="اكتب ملاحظتك أو تعليماتك هنا"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{
              padding: 12,
              borderRadius: 6,
              border: "1px solid #ccc",
              minHeight: 120,
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
              background: "#1E3A8A",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            إرسال البيانات
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
