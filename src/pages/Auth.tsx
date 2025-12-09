import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Eye, 
  EyeOff, 
  LogIn, 
  BookOpen, 
  Mail, 
  Lock, 
  GraduationCap, 
  User, 
  Shield, 
  Users, 
  Building, 
  Sparkles, 
  Copy,
  Check,
  AlertCircle,
  Smartphone,
  Globe,
  Heart
} from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();

  // جميع الإيميلات التجريبية
  const testEmails = [
    { email: "student.test@marjalhamam.edu.jo", password: "Student123!", role: "طالب تجريبي", icon: <GraduationCap className="w-4 h-4" /> },
    { email: "teacher.test@marjalhamam.edu.jo", password: "Teacher123!", role: "معلم تجريبي", icon: <User className="w-4 h-4" /> },
    { email: "admin.test@marjalhamam.edu.jo", password: "Admin123!", role: "إدارة تجريبية", icon: <Shield className="w-4 h-4" /> },
    { email: "support.test@marjalhamam.edu.jo", password: "Support123!", role: "دعم فني", icon: <Smartphone className="w-4 h-4" /> },
    { email: "engineering@marjalhamam.edu.jo", password: "Engineering123!", role: "الهندسة", icon: <Building className="w-4 h-4" /> },
    { email: "business@marjalhamam.edu.jo", password: "Business123!", role: "إدارة الأعمال", icon: <Users className="w-4 h-4" /> },
    { email: "it@marjalhamam.edu.jo", password: "IT123!", role: "تكنولوجيا المعلومات", icon: <Globe className="w-4 h-4" /> },
    { email: "principal@marjalhamam.edu.jo", password: "Principal123!", role: "المدير العام", icon: <Shield className="w-4 h-4" /> }
  ];

  // المستخدمون مع الصفحات
  const users = [
    { email: "student.test@marjalhamam.edu.jo", password: "Student123!", redirect: "/page1", role: "طالب" },
    { email: "teacher.test@marjalhamam.edu.jo", password: "Teacher123!", redirect: "/page2", role: "معلم" },
    { email: "admin.test@marjalhamam.edu.jo", password: "Admin123!", redirect: "/page3", role: "مشرف" },
    { email: "support.test@marjalhamam.edu.jo", password: "Support123!", redirect: "/page4", role: "دعم فني" },
    { email: "engineering@marjalhamam.edu.jo", password: "Engineering123!", redirect: "/page5", role: "هندسة" },
    { email: "business@marjalhamam.edu.jo", password: "Business123!", redirect: "/page6", role: "أعمال" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);
  const [showTestEmails, setShowTestEmails] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"login" | "test">("login");

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

  const handleTestEmailClick = (testEmail: string, testPassword: string) => {
    setEmail(testEmail);
    setPassword(testPassword);
  };

  const handleCopyCredentials = (email: string, password: string) => {
    navigator.clipboard.writeText(`Email: ${email}\nPassword: ${password}`);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleQuickLogin = (testEmail: string, testPassword: string) => {
    const foundUser = users.find(user => user.email === testEmail);
    if (foundUser) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("currentUser", testEmail);
        setCurrentUser(testEmail);
        setLoading(false);
        navigate(foundUser.redirect);
      }, 800);
    }
  };

  const handleSmartBook = () => {
    navigate("/smart-book");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafaf0] via-white to-[#f5f5dc] flex items-center justify-center p-4 font-cairo">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#b3a97c]/10 to-[#a89c70]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#e4dfc1]/10 to-[#f5f5dc]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#8B7355]/5 to-[#7A6345]/5 rounded-full blur-2xl"></div>
      </div>

      {/* البطاقة الرئيسية */}
      <div className={`relative w-full max-w-5xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden transition-all duration-500 ${shake ? 'animate-shake' : ''}`}>
        {/* تصميم علوي */}
        <div className="bg-gradient-to-r from-[#8B7355] via-[#a89c70] to-[#b3a97c] p-8 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/30 via-white/50 to-white/30"></div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full backdrop-blur-sm mb-6">
              <GraduationCap className="w-16 h-16" />
            </div>
            <h1 className="text-4xl font-black mb-3">مرج الحمام المهنية للبنين</h1>
            <p className="text-lg opacity-90">نظام التعليم الذكي المتكامل</p>
            <div className="flex justify-center gap-2 mt-4">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-sm">بيانات تجريبية جاهزة للاستخدام</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* قسم تسجيل الدخول */}
          <div className="p-10">
            {/* تبويبات */}
            <div className="flex mb-8 border-b border-[#e4dfc1]">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 font-bold text-lg transition-all duration-300 ${activeTab === "login" ? 'text-[#8B7355] border-b-2 border-[#8B7355]' : 'text-gray-500 hover:text-[#a89c70]'}`}
              >
                <LogIn className="inline w-5 h-5 ml-2" />
                تسجيل الدخول
              </button>
              <button
                onClick={() => setActiveTab("test")}
                className={`flex-1 py-3 font-bold text-lg transition-all duration-300 ${activeTab === "test" ? 'text-[#8B7355] border-b-2 border-[#8B7355]' : 'text-gray-500 hover:text-[#a89c70]'}`}
              >
                <Shield className="inline w-5 h-5 ml-2" />
                بيانات تجريبية
              </button>
            </div>

            {activeTab === "login" ? (
              <>
                <h2 className="text-2xl font-bold text-[#6b6b4d] mb-2">أهلاً بك مرة أخرى 👋</h2>
                <p className="text-gray-600 mb-8">أدخل بيانات الدخول للوصول إلى نظام التعليم الذكي</p>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      placeholder="البريد الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pr-12 pl-12 py-4 bg-[#fafaf0] border border-[#e4dfc1] rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b3a97c] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pr-12 pl-12 py-4 bg-[#fafaf0] border border-[#e4dfc1] rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b3a97c] focus:border-transparent transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#8B7355] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 bg-gradient-to-r from-[#8B7355] to-[#b3a97c] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        جاري التحقق...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <LogIn className="ml-2 w-5 h-5" />
                        تسجيل الدخول
                      </span>
                    )}
                  </button>
                </form>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#e4dfc1]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">أو</span>
                  </div>
                </div>

                <button
                  onClick={handleSmartBook}
                  className="w-full py-4 bg-gradient-to-r from-[#6b6b4d] to-[#8a7866] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                >
                  <BookOpen className="ml-2 w-5 h-5" />
                  الدخول كزائر (الكتاب الذكي)
                </button>
              </>
            ) : (
              /* قسم البيانات التجريبية */
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] p-5 rounded-2xl border border-[#e4dfc1]">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#6b6b4d] mb-2">معلومات مهمة</h3>
                      <p className="text-sm text-gray-600">
                        هذه بيانات تجريبية للاختبار فقط. يمكنك النقر على أي حساب لتعبئة البيانات تلقائياً، أو نسخ بيانات الدخول.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2">
                  {testEmails.map((test, index) => (
                    <div
                      key={index}
                      className="group bg-white border border-[#e4dfc1] rounded-xl p-4 hover:border-[#b3a97c] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-lg">
                            {test.icon}
                          </div>
                          <span className="font-bold text-[#6b6b4d]">{test.role}</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleCopyCredentials(test.email, test.password)}
                            className="p-2 text-gray-500 hover:text-[#8B7355] hover:bg-[#f5f5dc] rounded-lg transition-colors"
                            title="نسخ البيانات"
                          >
                            {copiedEmail === test.email ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={() => handleQuickLogin(test.email, test.password)}
                            className="px-3 py-1 bg-gradient-to-r from-[#8B7355] to-[#b3a97c] text-white text-sm rounded-lg hover:shadow-md transition-shadow"
                          >
                            دخول سريع
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div
                          onClick={() => handleTestEmailClick(test.email, test.password)}
                          className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">البريد الإلكتروني:</span>
                            <span className="font-mono text-[#6b6b4d] font-medium">{test.email}</span>
                          </div>
                        </div>
                        <div
                          onClick={() => handleTestEmailClick(test.email, test.password)}
                          className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">كلمة المرور:</span>
                            <span className="font-mono text-[#6b6b4d] font-medium">{test.password}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      const allData = testEmails.map(t => `${t.email} - ${t.password}`).join('\n');
                      navigator.clipboard.writeText(allData);
                      setCopiedEmail('all');
                      setTimeout(() => setCopiedEmail(null), 2000);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6b6b4d] to-[#8a7866] text-white rounded-xl hover:shadow-lg transition-all"
                  >
                    <Copy className="w-4 h-4" />
                    نسخ جميع البيانات
                    {copiedEmail === 'all' && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded ml-2 animate-pulse">
                        تم النسخ! ✓
                      </span>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* قسم الإيميلات التجريبية */}
          <div className="bg-gradient-to-b from-[#fafaf0] to-[#f5f5dc] p-10 border-r border-[#e4dfc1] lg:border-r-0 lg:border-l">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-[#b3a97c] to-[#8B7355] rounded-xl">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#6b6b4d]">الإيميلات التجريبية</h2>
                <p className="text-gray-600">جميع الحسابات المتاحة للاختبار</p>
              </div>
            </div>

            <div className="space-y-4">
              {testEmails.map((email, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-white/40 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${index % 4 === 0 ? 'bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1]' : 
                        index % 4 === 1 ? 'bg-gradient-to-r from-[#e4dfc1] to-[#d6bfa5]' : 
                        index % 4 === 2 ? 'bg-gradient-to-r from-[#d6bfa5] to-[#b3a97c]' : 
                        'bg-gradient-to-r from-[#b3a97c] to-[#8B7355]'}`}>
                        {email.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#6b6b4d]">{email.role}</h4>
                        <p className="text-xs text-gray-500">نقرتين للدخول السريع</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleQuickLogin(email.email, email.password)}
                      className="px-4 py-2 bg-gradient-to-r from-[#8B7355] to-[#b3a97c] text-white text-sm rounded-lg hover:shadow-md transition-shadow transform hover:scale-105"
                    >
                      دخول مباشر
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">الإيميل:</span>
                      <span className="font-mono text-[#6b6b4d] bg-gray-50 px-3 py-1 rounded">{email.email}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">كلمة المرور:</span>
                      <span className="font-mono text-[#6b6b4d] bg-gray-50 px-3 py-1 rounded">{email.password}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b3a97c] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-[#e4dfc1]">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-xl">
                <Heart className="w-6 h-6 text-[#8B7355]" />
                <div>
                  <p className="font-bold text-[#6b6b4d]">نصيحة سريعة</p>
                  <p className="text-sm text-gray-600">استخدم زر "نسخ جميع البيانات" لحفظ جميع الإيميلات وكلمات المرور</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الفوتر */}
        <div className="bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] p-6 text-center border-t border-[#e4dfc1]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#8B7355]" />
              <span className="text-sm text-[#6b6b4d]">بيانات تجريبية - للاختبار فقط</span>
            </div>
            <div className="text-sm text-[#6b6b4d]">
              © 2025 مدرسة مرج الحمام المهنية للبنين - نظام التعليم الذكي
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#b3a97c] animate-pulse" />
              <span className="text-sm text-[#6b6b4d]">جميع الحقوق محفوظة</span>
            </div>
          </div>
        </div>
      </div>

      {/* تأثيرات CSS */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .font-cairo {
          font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f5f5dc;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #b3a97c;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #8B7355;
        }
      `}</style>
    </div>
  );
};

export default Auth;