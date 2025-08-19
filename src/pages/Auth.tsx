import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const users = [
    { email: "student@gmail.com", password: "111111", redirect: "/page1" },
    { email: "teacher@gmail.com", password: "222222", redirect: "/page2" },
    { email: "supervisor@gmail.com", password: "333333", redirect: "/page3" },
    { email: "parent@gmail.com", password: "444444", redirect: "/page4" },
    { email: "ministry@gmail.com", password: "555555", redirect: "/page5" },
    { email: "manager@gmail.com", password: "666666", redirect: "/page6" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("currentUser", email);
        setCurrentUser(email);
        setLoading(false);
        navigate(foundUser.redirect); // توجيه بدون ريفرش
      }, 500);
    } else {
      alert("خطأ في الإيميل أو كلمة المرور");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setEmail("");
    setPassword("");
  };



  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>تسجيل الدخول</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="الإيميل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "جارٍ التحميل..." : "دخول"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#fdfbf7",
    direction: "rtl",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "right",
    border: "1px solid #e5ded3",
  },
  title: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#5c4b3c",
    marginBottom: 15,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
    border: "1px solid #d9cfc3",
    borderRadius: "6px",
    fontSize: "14px",
    background: "#fffaf5",
  },
  button: {
    padding: "12px",
    background: "#d6bfa5",
    color: "#fff",
    fontWeight: 600,
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Auth;
