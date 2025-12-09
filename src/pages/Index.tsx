import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LoginSection from "@/components/LoginSection";
import Footer from "@/components/Footer";
import { ArrowLeft, Calculator, Users, Fingerprint } from "lucide-react";

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
      color: "from-[#b3a97c] to-[#a89c70]",
      hoverColor: "hover:from-[#a89c70] hover:to-[#9d9164]"
    },
    {
      id: 2,
      title: "احسب معدلك",
      icon: <Calculator className="ml-2" size={22} />,
      onClick: () => window.open("https://ecl-btec.netlify.app/", "_blank", "noopener,noreferrer"),
      color: "from-[#8B7355] to-[#7A6345]",
      hoverColor: "hover:from-[#7A6345] hover:to-[#695335]"
    },
    {
      id: 3,
      title: "بصمة النص",
      icon: <Fingerprint className="ml-2" size={22} />,
      onClick: () => window.open("https://app.user1.us/", "_blank", "noopener,noreferrer"),
      color: "from-[#A67B5B] to-[#956A4A]",
      hoverColor: "hover:from-[#956A4A] hover:to-[#845939]"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* الهيدر */}
      <Header />
      
      {/* المحتوى الرئيسي */}
      <main className="flex-1">
        {/* قسم البطل */}
        <HeroSection />
        
        {/* قسم تسجيل الدخول */}
        <LoginSection />
        
        {/* قسم الأزرار المميزة */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              خدماتنا المميزة
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              اكتشف مجموعة من الأدوات والخدمات المصممة خصيصاً لتحسين تجربتك الأكاديمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={button.onClick}
                className={`
                  group relative overflow-hidden
                  px-8 py-6
                  bg-gradient-to-r ${button.color} ${button.hoverColor}
                  text-white font-semibold text-xl
                  rounded-2xl shadow-xl
                  transform transition-all duration-300
                  hover:scale-[1.02] hover:shadow-2xl
                  flex items-center justify-center
                  min-h-[120px]
                  border-2 border-white/20
                  backdrop-blur-sm
                `}
              >
                {/* تأثير خلفي */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* محتوى الزر */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-2xl font-bold tracking-wide">{button.title}</span>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    {button.icon}
                  </div>
                </div>
                
                {/* تأثير عند التحويم */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/40 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            ))}
          </div>
          
          {/* زر رجوع إلى الأعلى */}
          <div className="mt-12 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 border border-gray-200"
            >
              <ArrowLeft size={20} className="rotate-90" />
              العودة إلى الأعلى
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