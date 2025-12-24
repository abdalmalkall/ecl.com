import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LoginSection from "@/components/LoginSection";
import Footer from "@/components/Footer";
import { ArrowLeft, Calculator, Users, Fingerprint, Globe, Video, Book, Target } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);
  
  const buttons = [
    {
      id: 1,
      title: "من نحن",
      icon: <Users className="ml-2" size={22} />,
      onClick: () => navigate("/about"),
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      id: 2,
      title: "الدورات التدريبية",
      icon: <Video className="ml-2" size={22} />,
      onClick: () => window.open("https://www.joacademy.com", "_blank", "noopener,noreferrer"),
      color: "from-cyan-500 to-blue-500",
      hoverColor: "hover:from-cyan-600 hover:to-blue-600"
    },
    {
      id: 3,
      title: "الكتاب الذكي",
      icon: <Book className="ml-2" size={22} />,
      onClick: () => window.open("https://www.joacademy.com", "_blank", "noopener,noreferrer"),
      color: "from-blue-400 to-cyan-500",
      hoverColor: "hover:from-blue-500 hover:to-cyan-600"
    },
    {
      id: 4,
      title: "قصص النجاح",
      icon: <Target className="ml-2" size={22} />,
      onClick: () => navigate("/success-stories"),
      color: "from-indigo-500 to-blue-700",
      hoverColor: "hover:from-indigo-600 hover:to-blue-800"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col">
      {/* الهيدر */}
      <Header />
      
      {/* المحتوى الرئيسي */}
      <main className="flex-1">
        {/* قسم البطل */}
        <HeroSection />
        
        {/* قسم تسجيل الدخول */}
        <LoginSection />
        
        {/* قسم الأزرار المميزة */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                خدمات جو أكاديمي
              </span>
            </h2>
            <p className="text-blue-800 text-xl max-w-3xl mx-auto leading-relaxed">
              منصة التعليم الإلكتروني الأولى في الأردن والمنطقة، نقدم مجموعة من الخدمات المتكاملة
              لدعم رحلتك التعليمية باستخدام أحدث التقنيات والذكاء الاصطناعي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={button.onClick}
                className={`
                  group relative overflow-hidden
                  px-6 py-8
                  bg-gradient-to-r ${button.color} ${button.hoverColor}
                  text-white font-bold text-xl
                  rounded-2xl shadow-2xl
                  transform transition-all duration-300
                  hover:scale-[1.05] hover:shadow-3xl
                  flex flex-col items-center justify-center
                  min-h-[160px]
                  border-2 border-white/30
                  backdrop-blur-sm
                `}
              >
                {/* تأثير خلفي */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* أيقونة */}
                <div className="mb-4 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                  {button.icon}
                </div>
                
                {/* محتوى الزر */}
                <div className="relative z-10 text-center">
                  <span className="text-xl font-bold tracking-wide drop-shadow-lg">{button.title}</span>
                </div>
                
                {/* تأثير عند التحويم */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                
                {/* زوايا زخرفية */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40 rounded-bl-xl"></div>
              </button>
            ))}
          </div>
          
          {/* معلومات إضافية */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 text-center">
              <Globe className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">+2 مليون طالب</h3>
              <p className="text-blue-800">يستفيدون من خدماتنا التعليمية</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 text-center">
              <Video className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">+13 ألف دورة</h3>
              <p className="text-blue-800">تدريبية متنوعة لجميع المراحل</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 text-center">
              <Users className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">2.8 ألف معلم</h3>
              <p className="text-blue-800">متخصص باستخدام أحدث التقنيات</p>
            </div>
          </div>
          
          {/* زر رجوع إلى الأعلى */}
          <div className="mt-16 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/30"
            >
              <ArrowLeft size={22} className="rotate-90" />
              العودة إلى الأعلى
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowLeft size={14} className="rotate-90" />
              </div>
            </button>
          </div>
        </section>
      </main>
      
      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default Index;