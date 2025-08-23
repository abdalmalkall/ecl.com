import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specializations = [
    { name: "الهندسة (Engineering)", icon: "⚙️", gradient: "from-[#e4dfc1] to-[#b3a97c]", description: "التصميم والابتكار التقني" },
    { name: "الأعمال (Business)", icon: "💼", gradient: "from-[#f5f5dc] to-[#e4dfc1]", description: "تعلم مبادئ الإدارة والتسويق" },
    { name: "تكنولوجيا المعلومات (IT)", icon: "💻", gradient: "from-[#f5f5dc] to-[#b3a97c]", description: "البرمجة والتقنيات الحديثة" },
    { name: "الضيافة (Hospitality)", icon: "🍴", gradient: "from-[#f5f5dc] to-[#a89c70]", description: "فنون الطبخ وإدارة المطاعم" },
    { name: "الزراعة (Agriculture)", icon: "🌱", gradient: "from-[#e4dfc1] to-[#a89c70]", description: "الزراعة المستدامة والحديثة" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fafaf0] to-[#e4dfc1] text-gray-800 py-12 px-4 relative overflow-hidden">
      {/* خلفيات زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#f5f5dc]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#e4dfc1]/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#b3a97c]/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* زر العودة */}
        <div className="flex justify-start mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#b3a97c] to-[#a89c70] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>←</span>
            العودة للصفحة الرئيسية
          </button>
        </div>

        {/* قسم من نحن */}
        <div id="about-us" className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-full mb-8 shadow-lg">
            <div className="bg-white rounded-full p-5 shadow-inner">
              <span className="text-5xl">🏫</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-[#6b6b4d] mb-6">
            من <span className="text-[#b3a97c]">نحن</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 transform transition-transform duration-500 hover:scale-[1.02]">
              <p className="text-xl md:text-2xl leading-relaxed text-[#6b6b4d] font-medium">
                أنشأت <span className="font-bold text-[#b3a97c]">مدرسة مرج الحمام المهنية للبنين</span> في عهد صاحب الجلالة المغفور له جلالة الملك الحسين بن طلال المعظم سنة <span className="font-bold text-[#b3a97c]">١٩٨٧</span>، وتعتبر المدرسة من أكبر المدارس المتميزة في جميع أنحاء المملكة.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#f5f5dc]/50 to-[#e4dfc1]/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 transform transition-transform duration-500 hover:scale-[1.02]">
              <p className="text-lg md:text-xl leading-relaxed text-[#6b6b4d]">
                وبالتعاون مع منظمة التدريس العالمية <span className="font-bold text-[#a89c70]">"بيرسون"</span>، فقد اعتمدت المدرسة التدريس المتمازج في خمس من المجالات.
              </p>
            </div>
          </div>
        </div>

        {/* التخصصات */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] rounded-full mb-8 shadow-lg">
            <div className="bg-white rounded-full p-5 shadow-inner">
              <span className="text-5xl">🎯</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#6b6b4d] mb-6">
            التخصصات <span className="text-[#b3a97c]">المعتمدة</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {specializations.map((spec, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-5 bg-gradient-to-br ${spec.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {spec.icon}
                </div>
                
                <div className="w-12 h-1 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] mx-auto mb-4 rounded-full"></div>
                
                <h3 className="text-lg font-bold text-[#6b6b4d] mb-3 group-hover:text-[#b3a97c] transition-colors duration-300">
                  {spec.name}
                </h3>
                
                <p className="text-sm text-[#6b6b4d]/80 leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* الخطة التطويرية وفريق الإدارة */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#6b6b4d] mb-8">
            الخطة <span className="text-[#b3a97c]">التطويرية</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-3xl mx-auto space-y-6 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
            <p className="text-lg md:text-xl text-[#6b6b4d]">
              تم إنشاء هذا الموقع بواسطة طلاب الأول ثانوي - إدارة أعمال
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-[#e4dfc1] to-transparent my-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#f5f5dc] to-[#e4dfc1] rounded-2xl p-5 shadow">
                <p className="font-bold text-[#6b6b4d] mb-2">بإدارة المدير الفاضل</p>
                <p className="text-lg text-[#a89c70] font-semibold">محمود درويش</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#f5f5dc] to-[#e4dfc1] rounded-2xl p-5 shadow">
                <p className="font-bold text-[#6b6b4d] mb-2">بإدارة الأستاذ</p>
                <p className="text-lg text-[#a89c70] font-semibold">حمزة المناصير</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#e4dfc1] to-[#b3a97c] rounded-2xl p-5 shadow mt-6">
              <p className="font-bold text-white mb-2">تطوير وتنسيق</p>
              <p className="text-lg text-white font-semibold">عبد الملك أحمد نعيم</p>
            </div>
          </div>
        </div>

        {/* الفوتر */}
        <footer className="text-center py-8 border-t border-[#e4dfc1] mt-12">
          <p className="text-sm md:text-base text-[#6b6b4d]">
            جميع الحقوق محفوظة لدى © Educational Communication Launcher 2025
          </p>
        </footer>
      </div>

      {/* تأثيرات CSS مخصصة */}
      <style>
        {`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;