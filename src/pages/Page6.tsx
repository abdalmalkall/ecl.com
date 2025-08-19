import React from "react";

interface Parent {
  fullName: string;
  username: string;
  email: string;
  nationalId: string;
  role: string;
  grade: string;
  attendance: number;
  absence: number;
  notes: string[];
}

const fakeParent: Parent = {
  fullName: "محمد علي",
  username: "mohamed123",
  email: "mohamed@example.com",
  nationalId: "1234567890",
  role: "parent",
  grade:  "A",
  attendance: 25,
  absence: 5,
  notes: [
    "حضور الطالب ممتاز في النشاطات اليومية.",
    "تم تقديم الواجبات في الوقت المحدد.",
    "تفاعل جيد مع المعلمين والزملاء."
  ],
};

const Page6 = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "40px 20px",
      backgroundColor: "#f5f3ef",
      minHeight: "100vh",
    }}>
      <div style={{
        maxWidth: 700,
        width: "100%",
        padding: 30,
        borderRadius: 20,
        background: "linear-gradient(145deg, #fffdf8, #f7f3ec)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#4b3a2f",
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: 25,
          color: "#b8860b",
          fontSize: 26,
          letterSpacing: 1,
        }}>معلومات ولي الأمر</h2>

        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: 25,
        }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", padding: 8, border: "1px solid #d9cfc3" }}>الاسم الكامل:</td>
              <td style={{ padding: 8, border: "1px solid #d9cfc3" }}>{fakeParent.fullName}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: 8, border: "1px solid #d9cfc3" }}>اسم المستخدم:</td>
              <td style={{ padding: 8, border: "1px solid #d9cfc3" }}>{fakeParent.username}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: 8, border: "1px solid #d9cfc3" }}>البريد الإلكتروني:</td>
              <td style={{ padding: 8, border: "1px solid #d9cfc3" }}>{fakeParent.email}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: 8, border: "1px solid #d9cfc3" }}>الرقم الوطني:</td>
              <td style={{ padding: 8, border: "1px solid #d9cfc3" }}>{fakeParent.nationalId}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: 8, border: "1px solid #d9cfc3" }}>الدور:</td>
              <td style={{ padding: 8, border: "1px solid #d9cfc3" }}>{fakeParent.role}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: 8, border: "1px solid #d9cfc3" }}>التقييم:</td>
              <td style={{ padding: 8, border: "1px solid #d9cfc3" }}>{fakeParent.grade}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: 8, border: "1px solid #d9cfc3" }}>عدد الحضور:</td>
              <td style={{ padding: 8, border: "1px solid #d9cfc3" }}>{fakeParent.attendance}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: 8, border: "1px solid #d9cfc3" }}>عدد الغياب:</td>
              <td style={{ padding: 8, border: "1px solid #d9cfc3" }}>{fakeParent.absence}</td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ marginBottom: 15, fontSize: 20, color: "#5d4636" }}>الملاحظات المدرسية</h3>
        <ul style={{ paddingLeft: 20, listStyleType: "disc", fontSize: 16 }}>
          {fakeParent.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page6;
