import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const users = [
    { email: "student@gmail.com", password: "111111", redirect: "/page1", role: "طالب" },
    { email: "teacher@gmail.com", password: "222222", redirect: "/page2", role: "معلم" },
    { email: "supervisor@gmail.com", password: "333333", redirect: "/page3", role: "مشرف" },
    { email: "parent@gmail.com", password: "444444", redirect: "/page4", role: "ولي أمر" },
    { email: "ministry@gmail.com", password: "555555", redirect: "/page5", role: "وزارة" },
    { email: "manager@gmail.com", password: "666666", redirect: "/page6", role: "مدير" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);

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
        navigate(foundUser.redirect);
      }, 1000);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleSmartBook = () => {
    navigate("/smart-book");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      <div style={styles.background}>
        <div style={styles.shape}></div>
        <div style={styles.shape}></div>
      </div>
      
      <div style={{...styles.card, ...(shake ? styles.shake : {})}}>
        <div style={styles.logo}>
          <i className="fas fa-graduation-cap" style={styles.logoIcon}></i>
          <span style={styles.logoText}>نظام التعليم الذكي</span>
        </div>
        
        <h2 style={styles.title}>تسجيل الدخول</h2>
        <p style={styles.subtitle}>أدخل بياناتك للوصول إلى حسابك</p>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputContainer}>
            <i className="fas fa-envelope" style={styles.inputIcon}></i>
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          
          <div style={styles.inputContainer}>
            <i className="fas fa-lock" style={styles.inputIcon}></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <i 
              className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"} 
              style={styles.passwordToggle}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          
          <button 
            type="submit" 
            style={{...styles.button, ...(loading ? styles.buttonLoading : {})}} 
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin" style={styles.buttonSpinner}></i>
                جارٍ التحميل...
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt" style={styles.buttonIcon}></i>
                دخول
              </>
            )}
          </button>
        </form>

        <div style={styles.separator}>
          <span style={styles.separatorText}>أو</span>
        </div>

        <button onClick={handleSmartBook} style={styles.smartBookButton}>
          <i className="fas fa-book" style={styles.smartBookIcon}></i>
          الدخول كزائر (الكتاب الذكي)
        </button>
        
        <div style={styles.hint}>
          <p style={styles.hintText}>بيانات الدخول للتجربة:</p>
          <div style={styles.credentials}>
            {users.slice(0, 3).map((user, index) => (
              <div key={index} style={styles.credential}>
                <span style={styles.credentialRole}>{user.role}:</span>
                <span style={styles.credentialEmail}>{user.email}</span>
                <span style={styles.credentialPassword}>كلمة المرور: {user.password}</span>
              </div>
            ))}
          </div>
        </div>
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
    background: "linear-gradient(135deg, #fdfbf7 0%, #ebedee 100%)",
    direction: "rtl",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  shape: {
    position: "absolute",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #d6bfa5 0%, rgba(214, 191, 165, 0.3) 100%)",
    opacity: 0.5,
  },
  card: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "450px",
    textAlign: "right",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(10px)",
    zIndex: 2,
    position: "relative",
    transition: "transform 0.3s ease",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25px",
    color: "#5c4b3c",
  },
  logoIcon: {
    fontSize: "28px",
    marginLeft: "10px",
  },
  logoText: {
    fontSize: "18px",
    fontWeight: 700,
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#5c4b3c",
    marginBottom: "8px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "14px",
    color: "#8a7866",
    marginBottom: "30px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    padding: "16px 45px 16px 16px",
    border: "1px solid #e5ded3",
    borderRadius: "12px",
    fontSize: "16px",
    background: "#fffaf5",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },
  inputIcon: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "15px",
    color: "#8a7866",
    fontSize: "18px",
  },
  passwordToggle: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "45px",
    color: "#8a7866",
    fontSize: "18px",
    cursor: "pointer",
  },
  button: {
    padding: "16px",
    background: "linear-gradient(135deg, #d6bfa5 0%, #c19e79 100%)",
    color: "#fff",
    fontWeight: 600,
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(193, 158, 121, 0.3)",
  },
  buttonLoading: {
    opacity: 0.8,
  },
  buttonIcon: {
    marginLeft: "8px",
  },
  buttonSpinner: {
    marginLeft: "8px",
  },
  separator: {
    display: "flex",
    alignItems: "center",
    margin: "25px 0",
  },
  separatorText: {
    padding: "0 15px",
    color: "#8a7866",
    fontSize: "14px",
    backgroundColor: "#fff",
    zIndex: 1,
  },
  smartBookButton: {
    padding: "16px",
    background: "linear-gradient(135deg, #5c4b3c 0%, #8a7866 100%)",
    color: "#fff",
    fontWeight: 600,
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(92, 75, 60, 0.3)",
    width: "100%",
  },
  smartBookIcon: {
    marginLeft: "8px",
  },
  hint: {
    marginTop: "25px",
    padding: "15px",
    backgroundColor: "#f8f4ef",
    borderRadius: "12px",
    border: "1px dashed #d6bfa5",
  },
  hintText: {
    margin: "0 0 10px 0",
    fontSize: "14px",
    color: "#5c4b3c",
    fontWeight: 600,
  },
  credentials: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  credential: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  credentialRole: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#8a7866",
  },
  credentialEmail: {
    fontSize: "11px",
    color: "#5c4b3c",
  },
  credentialPassword: {
    fontSize: "11px",
    color: "#5c4b3c",
  },
  shake: {
    animation: "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
  },
};

// Add this to your global CSS or use a CSS-in-JS solution
// @keyframes shake {
//   10%, 90% { transform: translateX(-1px); }
//   20%, 80% { transform: translateX(2px); }
//   30%, 50%, 70% { transform: translateX(-4px); }
//   40%, 60% { transform: translateX(4px); }
// }

export default Auth;