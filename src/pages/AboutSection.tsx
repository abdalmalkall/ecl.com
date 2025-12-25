import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Eye, 
  ArrowRight, 
  Award, 
  Users, 
  Target, 
  Building,
  ChevronRight,
  Star,
  Shield,
  BookOpen,
  Lightbulb
} from "lucide-react";

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
    { number: "35+", label: "عاماً من الخبرة / Years of Experience", icon: <Award className="w-6 h-6" /> },
    { number: "5000+", label: "خريج / Graduates", icon: <Users className="w-6 h-6" /> },
    { number: "5", label: "تخصصات معتمدة / Accredited Specializations", icon: <Target className="w-6 h-6" /> },
    { number: "20+", label: "جائزة وتكريم / Awards & Recognitions", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fafaf0] via-white to-[#f5f5dc] text-gray-800 py-12 px-4 relative overflow-hidden">
      {/* خلفيات زخرفية متطورة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* دوائر متحركة متعددة */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#b3a97c]/10 to-[#a89c70]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#e4dfc1]/10 to-[#f5f5dc]/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-[#8B7355]/5 to-[#7A6345]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-[#A67B5B]/5 to-[#956A4A]/5 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#b3a97c]/20 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-b from-transparent via-[#a89c70]/20 to-transparent"></div>
        
        {/* نقاط متناثرة */}
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-[#b3a97c]/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-[#a89c70]/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* شريط التنقل المميز */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sticky top-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/40 z-20 transform transition-all duration-300 hover:shadow-3xl">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-[#b3a97c] to-[#8B7355] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#a89c70] hover:to-[#7A6345]"
          >
            <ArrowRight className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">العودة للصفحة الرئيسية</span>
          </button>
          
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 justify-center">
            {[
              { id: 'about-us', label: 'من نحن', icon: <Building className="w-4 h-4" /> },
              { id: 'specializations', label: 'التخصصات', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'vision', label: 'الرؤية والرسالة', icon: <Eye className="w-4 h-4" /> },
              { id: 'achievements', label: 'إنجازاتنا', icon: <Star className="w-4 h-4" /> },
              { id: 'development', label: 'الخطة التطويرية', icon: <Lightbulb className="w-4 h-4" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center gap-2 px-4 py-2.5 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-gradient-to-r hover:from-[#f5f5dc] hover:to-[#e4dfc1] transition-all duration-300 hover:scale-105 border border-white/30 text-sm font-medium text-[#6b6b4d] hover:text-[#8B7355]"
              >
                {item.icon}
                {item.label}
                <ChevronRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* قسم من نحن */}
        <div id="about-us" className="text-center mb-24 fade-in">
          {/* أيقونة فخمة مع تأثيرات */}
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#b3a97c] via-[#a89c70] to-[#8B7355] rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-white to-[#f5f5dc] p-4 rounded-3xl shadow-2xl border border-white/50">
              <div className="bg-gradient-to-br from-[#f5f5dc] to-[#e4dfc1] p-6 rounded-2xl">
                <Building className="w-20 h-20 text-[#8B7355] animate-float" />
              </div>
            </div>
            {/* نجمة زخرفية */}
            <Star className="absolute -top-2 -right-2 w-8 h-8 text-[#b3a97c] animate-spin-slow" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#8B7355] via-[#a89c70] to-[#b3a97c] bg-clip-text text-transparent">
              من نحن
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-[#6b6b4d]/70 mt-2 block">About Us</span>
          </h2>
          
          {/* خط زخرفي */}
          <div className="relative w-64 h-1 mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b3a97c] to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm"></div>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* بطاقة رئيسية */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/40 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl overflow-hidden">
              {/* خلفية متحركة */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5dc]/0 via-[#e4dfc1]/0 to-[#b3a97c]/0 group-hover:from-[#f5f5dc]/10 group-hover:via-[#e4dfc1]/10 group-hover:to-[#b3a97c]/10 transition-all duration-700"></div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-[#6b6b4d] font-medium relative z-10">
                أنشأت <span className="font-bold text-[#8B7355] bg-gradient-to-r from-[#f5f5dc] to-transparent px-2 py-1 rounded-lg">مدرسة مرج الحمام المهنية للبنين</span> سنة <span className="font-bold text-[#a89c70]">١٩٨٧</span> في عهد المغفور له الملك الحسين بن طلال، وتعتبر من أكبر المدارس المهنية المتميزة في المملكة.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#6b6b4d]/70 mt-6 font-medium relative z-10">
                <span className="text-[#a89c70] font-semibold">Marj Al-Hamam Vocational School for Boys</span> was established in <span className="font-bold text-[#a89c70]">1987</span> during the reign of His Majesty the late King Hussein bin Talal. Today, the school is recognized as one of the leading and largest vocational schools across the Kingdom.
              </p>
            </div>
            
            {/* بطاقة ثانوية */}
            <div className="group relative bg-gradient-to-r from-[#f5f5dc]/40 to-[#e4dfc1]/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 transform transition-all duration-500 hover:scale-[1.01] overflow-hidden">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#b3a97c]/10 rounded-full blur-2xl"></div>
              
              <p className="text-lg md:text-xl leading-relaxed text-[#6b6b4d] font-medium relative z-10">
                بالتعاون مع منظمة <span className="font-bold text-[#8B7355]">"بيرسون" العالمية</span>، اعتمدت المدرسة التدريس المتمازج في خمس تخصصات رئيسية.
              </p>
              <p className="text-lg leading-relaxed text-[#6b6b4d]/70 mt-4 font-medium relative z-10">
                <span className="text-[#a89c70]">In collaboration with the global education organization</span> <span className="font-bold text-[#a89c70]">"Pearson"</span>, the school has adopted a blended learning approach across five specialized fields.
              </p>
            </div>
          </div>
        </div>

        {/* قسم الرؤية والرسالة */}
        <div id="vision" className="text-center mb-24 fade-in">
          {/* أيقونة الرؤية الفخمة */}
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B7355] to-[#b3a97c] rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-[#f5f5dc] to-white p-3 rounded-3xl shadow-2xl">
              <div className="relative bg-gradient-to-br from-[#8B7355] via-[#a89c70] to-[#b3a97c] p-6 rounded-2xl group">
                <Eye className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            {/* تأثيرات حول الأيقونة */}
            <div className="absolute -inset-4 border-2 border-[#b3a97c]/20 rounded-full animate-ping-slow"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#6b6b4d] via-[#8B7355] to-[#a89c70] bg-clip-text text-transparent">
              الرؤية والرسالة
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-[#6b6b4d]/60 mt-2 block">Vision & Mission</span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-[#e4dfc1] via-[#b3a97c] to-[#8B7355] mx-auto mb-12 rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* بطاقة الرؤية */}
            <div className="group relative bg-gradient-to-br from-white to-[#f5f5dc] rounded-3xl p-8 shadow-2xl border border-white/40 transform transition-all duration-500 hover:scale-[1.03] hover:shadow-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#b3a97c]/10 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-xl shadow-inner">
                  <Eye className="w-6 h-6 text-[#8B7355]" />
                </div>
                <h3 className="text-2xl font-bold text-[#6b6b4d]">الرؤية / Vision</h3>
              </div>
              
              <p className="text-lg text-[#6b6b4d] leading-relaxed text-right">
                أن نكون الرواد في تقديم التعليم المهني والتقني المتميز الذي يلبي احتياجات سوق العمل المحلي والعالمي.
              </p>
              <p className="text-lg text-[#6b6b4d]/70 leading-relaxed text-right mt-4 border-t border-[#e4dfc1] pt-4">
                <span className="text-[#8B7355] font-medium">To be pioneers</span> in providing distinguished vocational and technical education that meets the needs of the local and global labor market.
              </p>
            </div>
            
            {/* بطاقة الرسالة */}
            <div className="group relative bg-gradient-to-br from-[#8B7355] via-[#a89c70] to-[#b3a97c] rounded-3xl p-8 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-[1.03] hover:shadow-3xl overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-12 translate-y-12"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">الرسالة / Mission</h3>
              </div>
              
              <p className="text-lg text-white leading-relaxed text-right">
                إعداد جيل من التقنيين والمهنيين المؤهلين تأهيلاً عالياً، قادرين على الإبداع والابتكار والمنافسة في سوق العمل.
              </p>
              <p className="text-lg text-white/90 leading-relaxed text-right mt-4 border-t border-white/20 pt-4">
                <span className="font-semibold">Preparing a generation</span> of highly qualified technicians and professionals capable of creativity, innovation and competition in the labor market.
              </p>
            </div>
          </div>
        </div>

        {/* التخصصات */}
        <div id="specializations" className="text-center mb-24 fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] rounded-full blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-white to-[#f5f5dc] p-4 rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-[#e4dfc1] to-[#b3a97c] p-6 rounded-2xl">
                <BookOpen className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#6b6b4d] via-[#a89c70] to-[#b3a97c] bg-clip-text text-transparent">
              التخصصات المعتمدة
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-[#6b6b4d]/60 mt-2 block">Accredited Specializations</span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-[#e4dfc1] via-[#a89c70] to-[#8B7355] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {specializations.map((spec, index) => (
              <div 
                key={index} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* تأثير خلفي */}
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className={`relative w-20 h-20 mx-auto mb-5 bg-gradient-to-br ${spec.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {spec.icon}
                </div>
                
                {/* خط زخرفي تحت الأيقونة */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
                
                <h3 className="text-lg font-bold text-[#6b6b4d] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                  {spec.name}
                </h3>
                
                <p className="text-sm text-[#6b6b4d]/80 leading-relaxed group-hover:text-[#6b6b4d] transition-colors duration-300">
                  {spec.description}
                </p>
                
                {/* زاوية زخرفية */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#b3a97c]/20 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#a89c70]/20 rounded-bl-2xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* إنجازات المدرسة */}
        <div id="achievements" className="text-center mb-24 fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#b3a97c] to-[#6b6b4d] rounded-full blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-white to-[#f5f5dc] p-4 rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-[#b3a97c] to-[#6b6b4d] p-6 rounded-2xl">
                <Award className="w-20 h-20 text-white animate-bounce-slow" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#6b6b4d] via-[#b3a97c] to-[#8B7355] bg-clip-text text-transparent">
              إنجازات المدرسة
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-[#6b6b4d]/60 mt-2 block">School Achievements</span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-[#b3a97c] via-[#8B7355] to-[#6b6b4d] mx-auto mb-12 rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-[#f5f5dc] rounded-2xl p-6 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* تأثير خلفي متحرك */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b3a97c]/0 via-[#a89c70]/0 to-[#8B7355]/0 group-hover:from-[#b3a97c]/5 group-hover:via-[#a89c70]/5 group-hover:to-[#8B7355]/5 transition-all duration-500"></div>
                
                {/* الأيقونة */}
                <div className="relative w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#f5f5dc] to-[#e4dfc1] rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[#8B7355]">
                    {achievement.icon}
                  </div>
                </div>
                
                {/* الرقم */}
                <div className="text-4xl font-bold bg-gradient-to-r from-[#8B7355] to-[#b3a97c] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                
                {/* النص */}
                <div className="text-sm text-[#6b6b4d] font-medium group-hover:text-[#8B7355] transition-colors duration-300">
                  {achievement.label}
                </div>
                
                {/* خط متحرك في الأسفل */}
                <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#b3a97c] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* الخطة التطويرية وفريق الإدارة */}
        <div id="development" className="text-center mb-20 fade-in">
          <div className="relative mb-10">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-[#b3a97c]/10 to-[#a89c70]/10 rounded-full blur-2xl"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black relative z-10">
              <span className="bg-gradient-to-r from-[#6b6b4d] via-[#a89c70] to-[#b3a97c] bg-clip-text text-transparent">
                الخطة التطويرية
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-[#6b6b4d]/60 mt-2 block">Development Plan</span>
            </h2>
          </div>
          
          <div className="w-48 h-1 bg-gradient-to-r from-[#e4dfc1] via-[#a89c70] to-[#8B7355] mx-auto mb-12 rounded-full"></div>
          
          <div className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/40 transform transition-all duration-500 hover:shadow-3xl overflow-hidden">
            {/* تأثيرات خلفية */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#b3a97c]/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#a89c70]/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-[#6b6b4d] leading-relaxed mb-8">
                تم إنشاء هذا الموقع بواسطة طلاب الثاني  ثانوي - إدارة أعمال
                <br />
                <span className="text-[#a89c70] font-medium mt-2 block">
                  This website was created by First-Year Business Administration students.
                </span>
              </p>
              
              {/* خط زخرفي */}
              <div className="relative h-px my-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e4dfc1] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#b3a97c] rounded-full"></div>
              </div>
              
              {/* فريق الإدارة */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* المدير */}
                <div className="group relative bg-gradient-to-br from-[#f5f5dc] to-white rounded-2xl p-6 shadow-lg border border-white/40 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-xl shadow-inner">
                      <Shield className="w-6 h-6 text-[#8B7355]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#6b6b4d] text-right">بإدارة المدير الفاضل</p>
                      <p className="text-sm text-[#6b6b4d]/70 text-right">Supervised by the esteemed Principal</p>
                    </div>
                  </div>
                  <p className="text-xl text-[#8B7355] font-semibold text-center group-hover:text-[#6b6b4d] transition-colors duration-300">
                    محمود درويش / Mahmoud Darwish
                  </p>
                </div>
                
                {/* الأستاذ */}
                <div className="group relative bg-gradient-to-br from-[#f5f5dc] to-white rounded-2xl p-6 shadow-lg border border-white/40 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-xl shadow-inner">
                      <Users className="w-6 h-6 text-[#8B7355]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#6b6b4d] text-right">بإدارة الأستاذ</p>
                      <p className="text-sm text-[#6b6b4d]/70 text-right">Guided by Instructor</p>
                    </div>
                  </div>
                  <p className="text-xl text-[#8B7355] font-semibold text-center group-hover:text-[#6b6b4d] transition-colors duration-300">
                    حمزة المناصير / Hamzeh Al-Manaseer
                  </p>
                </div>
              </div>
              
              {/* المطور */}
              <div className="group relative bg-gradient-to-br from-[#8B7355] via-[#a89c70] to-[#b3a97c] rounded-2xl p-6 shadow-lg border border-white/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-right">تطوير وتنسيق</p>
                    <p className="text-sm text-white/80 text-right">Website Design and Coordination</p>
                  </div>
                </div>
                <p className="text-xl text-white font-semibold text-center group-hover:text-white/90 transition-colors duration-300">
                  عبد الملك أحمد نعيم / Abdul Malik Ahmad Naeem
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* الفوتر */}
        <footer className="text-center py-10 border-t border-[#e4dfc1]/50 mt-16 fade-in">
          <div className="relative">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-[#b3a97c]/5 to-[#a89c70]/5 rounded-full blur-xl"></div>
            </div>
            
            <p className="text-base text-[#6b6b4d] font-medium relative z-10">
              جميع الحقوق محفوظة © Educational Communication Launcher 2025
              <br />
              <span className="text-[#a89c70] text-sm mt-2 block">
                All rights reserved © Educational Communication Launcher 2025
              </span>
            </p>
            
            {/* نقاط زخرفية */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 bg-gradient-to-r from-[#b3a97c] to-[#a89c70] rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </footer>
      </div>

      {/* تأثيرات CSS مخصصة */}
      <style>
        {`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
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