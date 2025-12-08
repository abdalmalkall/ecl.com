import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    
    // إضافة تأثيرات الظهور التدريجي
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => el.classList.add('visible'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specializations = [
    { 
      name: "الهندسة (Engineering)", 
      icon: "⚙️", 
      gradient: "from-[#e4dfc1] to-[#b3a97c]", 
      description: "التصميم والابتكار التقني / Innovation in design and technical creativity" 
    },
    { 
      name: "الأعمال (Business)", 
      icon: "💼", 
      gradient: "from-[#f5f5dc] to-[#e4dfc1]", 
      description: "تعلم مبادئ الإدارة والتسويق / Principles of management and marketing" 
    },
    { 
      name: "تكنولوجيا المعلومات (IT)", 
      icon: "💻", 
      gradient: "from-[#f5f5dc] to-[#b3a97c]", 
      description: "البرمجة والتقنيات الحديثة / Programming and modern technologies" 
    },
    { 
      name: "الضيافة (Hospitality)", 
      icon: "🍴", 
      gradient: "from-[#f5f5dc] to-[#a89c70]", 
      description: "فنون الطبخ وإدارة المطاعم / Culinary arts and restaurant management" 
    },
    { 
      name: "الزراعة (Agriculture)", 
      icon: "🌱", 
      gradient: "from-[#e4dfc1] to-[#a89c70]", 
      description: "الزراعة المستدامة والحديثة / Sustainable and modern farming practices" 
    }
  ];

  const achievements = [
    { number: "35+", label: "عاماً من الخبرة / Years of Experience" },
    { number: "5000+", label: "خريج / Graduates" },
    { number: "5", label: "تخصصات معتمدة / Accredited Specializations" },
    { number: "20+", label: "جائزة وتكريم / Awards & Recognitions" }
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
        {/* شريط التنقل السريع */}
        <div className="flex flex-wrap justify-between items-center mb-8 sticky top-4 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg z-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#b3a97c] to-[#a89c70] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>←</span>
            العودة للصفحة الرئيسية
          </button>
          
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <button onClick={() => scrollToSection('about-us')} className="px-4 py-2 bg-[#f5f5dc] rounded-lg hover:bg-[#e4dfc1] transition-colors text-sm">
              من نحن
            </button>
            <button onClick={() => scrollToSection('specializations')} className="px-4 py-2 bg-[#f5f5dc] rounded-lg hover:bg-[#e4dfc1] transition-colors text-sm">
              التخصصات
            </button>
            <button onClick={() => scrollToSection('vision')} className="px-4 py-2 bg-[#f5f5dc] rounded-lg hover:bg-[#e4dfc1] transition-colors text-sm">
              الرؤية والرسالة
            </button>
            <button onClick={() => scrollToSection('achievements')} className="px-4 py-2 bg-[#f5f5dc] rounded-lg hover:bg-[#e4dfc1] transition-colors text-sm">
              إنجازاتنا
            </button>
            <button onClick={() => scrollToSection('development')} className="px-4 py-2 bg-[#f5f5dc] rounded-lg hover:bg-[#e4dfc1] transition-colors text-sm">
              الخطة التطويرية
            </button>
          </div>
        </div>

        {/* قسم من نحن */}
        <div id="about-us" className="text-center mb-20 fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-full mb-8 shadow-lg">
            <div className="bg-white rounded-full p-5 shadow-inner">
              <span className="text-5xl">🏫</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-[#6b6b4d] mb-6">
            من <span className="text-[#b3a97c]">نحن</span> <br />
            <span className="text-3xl md:text-4xl text-[#a89c70]">About Us</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 transform transition-transform duration-500 hover:scale-[1.02]">
              <p className="text-xl md:text-2xl leading-relaxed text-[#6b6b4d] font-medium">
                أنشأت <span className="font-bold text-[#b3a97c]">مدرسة مرج الحمام المهنية للبنين</span> سنة <span className="font-bold text-[#b3a97c]">١٩٨٧</span> في عهد المغفور له الملك الحسين بن طلال، وتعتبر من أكبر المدارس المهنية المتميزة في المملكة. <br />
                <span className="text-lg text-[#a89c70]">Marj Al-Hamam Vocational School for Boys was established in 1987 during the reign of His Majesty the late King Hussein bin Talal. Today, the school is recognized as one of the leading and largest vocational schools across the Kingdom.</span>
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#f5f5dc]/50 to-[#e4dfc1]/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 transform transition-transform duration-500 hover:scale-[1.02]">
              <p className="text-lg md:text-xl leading-relaxed text-[#6b6b4d]">
                بالتعاون مع منظمة <span className="font-bold text-[#a89c70]">"بيرسون"</span> العالمية، اعتمدت المدرسة التدريس المتمازج في خمس تخصصات رئيسية. <br />
                <span className="text-[#a89c70]">In collaboration with the global education organization Pearson, the school has adopted a blended learning approach across five specialized fields.</span>
              </p>
            </div>
          </div>
        </div>

        {/* قسم الرؤية والرسالة */}
        <div id="vision" className="text-center mb-20 fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#e4dfc1] to-[#b3a97c] rounded-full mb-8 shadow-lg">
            <div className="bg-white rounded-full p-5 shadow-inner">
              <span className="text-5xl">👁️</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#6b6b4d] mb-6">
            الرؤية <span className="text-[#b3a97c]">والرسالة</span> <br />
            <span className="text-2xl text-[#a89c70]">Vision & message</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#e4dfc1] to-[#b3a97c] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#f5f5dc] to-[#e4dfc1] rounded-3xl p-8 shadow-lg border border-white/30 transform transition-transform duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-[#6b6b4d] mb-4">الرؤية / Vision</h3>
              <p className="text-lg text-[#6b6b4d]">
                أن نكون الرواد في تقديم التعليم المهني والتقني المتميز الذي يلبي احتياجات سوق العمل المحلي والعالمي .
                <span className="block mt-2 text-[#a89c70]">To be pioneers in providing distinguished vocational and technical education that meets the needs of the local and global labor market.</span>
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#e4dfc1] to-[#b3a97c] rounded-3xl p-8 shadow-lg border border-white/30 transform transition-transform duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-white mb-4">الرسالة / message</h3>
              <p className="text-lg text-white">
                إعداد جيل من التقنيين والمهنيين المؤهلين تأهيلاً عالياً، قادرين على الإبداع والابتكار والمنافسة في سوق العمل.
                <span className="block mt-2 text-[#f5f5dc]">Preparing a generation of highly qualified technicians and professionals capable of creativity, innovation and competition in the labor market.</span>
              </p>
            </div>
          </div>
        </div>

        {/* التخصصات */}
        <div id="specializations" className="text-center mb-20 fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] rounded-full mb-8 shadow-lg">
            <div className="bg-white rounded-full p-5 shadow-inner">
              <span className="text-5xl">🎯</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#6b6b4d] mb-6">
            التخصصات <span className="text-[#b3a97c]">المعتمدة</span> <br />
            <span className="text-2xl text-[#a89c70]">Accredited Specializations</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {specializations.map((spec, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group fade-in"
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

        {/* إنجازات المدرسة */}
        <div id="achievements" className="text-center mb-20 fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#b3a97c] to-[#6b6b4d] rounded-full mb-8 shadow-lg">
            <div className="bg-white rounded-full p-5 shadow-inner">
              <span className="text-5xl">🏆</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#6b6b4d] mb-6">
            إنجازات <span className="text-[#b3a97c]">المدرسة</span> <br />
            <span className="text-2xl text-[#a89c70]">School Achievements</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#b3a97c] to-[#6b6b4d] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#f5f5dc] to-[#e4dfc1] rounded-2xl p-6 shadow-lg border border-white/30 transform transition-all duration-300 hover:scale-105 group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-[#6b6b4d] mb-2 group-hover:text-[#b3a97c] transition-colors duration-300">
                  {achievement.number}
                </div>
                <div className="text-sm text-[#6b6b4d] font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* الخطة التطويرية وفريق الإدارة */}
        <div id="development" className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-[#6b6b4d] mb-8">
            الخطة <span className="text-[#b3a97c]">التطويرية</span> <br />
            <span className="text-2xl text-[#a89c70]">Development Plan</span>
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-3xl mx-auto space-y-6 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
            <p className="text-lg md:text-xl text-[#6b6b4d]">
              تم إنشاء هذا الموقع بواسطة طلاب الأول ثانوي - إدارة أعمال <br />
              <span className="text-[#a89c70]">This website was created by First-Year Business Administration students.</span>
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-[#e4dfc1] to-transparent my-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#f5f5dc] to-[#e4dfc1] rounded-2xl p-5 shadow">
                <p className="font-bold text-[#6b6b4d] mb-2">بإدارة المدير الفاضل / Supervised by the esteemed Principal</p>
                <p className="text-lg text-[#a89c70] font-semibold">محمود درويش / Mahmoud Darwish</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#f5f5dc] to-[#e4dfc1] rounded-2xl p-5 shadow">
                <p className="font-bold text-[#6b6b4d] mb-2">بإدارة الأستاذ / Guided by Instructor</p>
                <p className="text-lg text-[#a89c70] font-semibold">حمزة المناصير / Hamzeh Al-Manaseer</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#e4dfc1] to-[#b3a97c] rounded-2xl p-5 shadow mt-6">
              <p className="font-bold text-white mb-2">تطوير وتنسيق / Website Design and Coordination</p>
              <p className="text-lg text-white font-semibold">عبد الملك أحمد نعيم / Abdul Malik Ahmad Naeem</p>
            </div>
          </div>
        </div>

        {/* الفوتر */}
        <footer className="text-center py-8 border-t border-[#e4dfc1] mt-12 fade-in">
          <p className="text-sm md:text-base text-[#6b6b4d]">
            جميع الحقوق محفوظة © Educational Communication Launcher 2025 <br />
            <span className="text-[#a89c70]">All rights reserved © Educational Communication Launcher 2025</span>
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
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .sticky {
            position: relative;
            top: 0;
          }
        }
      `}
      </style>
    </section>
  );
};

export default AboutSection;