import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import schoolHero from "@/assets/image.png";
import { 
  Calendar, 
  School, 
  Users, 
  Award, 
  BookOpen, 
  Target,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  Trophy,
  Star,
  Crown,
  Lightbulb,
  Zap,
  Globe,
  Shield,
  MapPin,
  Heart,
  Clock,
  Target as TargetIcon,
  CheckCircle
} from "lucide-react";

const HeroSection = () => {
  // الألوان الرئيسية - ذهبية وبيجية وأنيقة
  const colors = {
    primary: "#B38B5B",      // ذهبي غامق رئيسي
    secondary: "#D2B48C",    // ذهبي فاتح
    accent: "#F4A460",       // برتقالي ذهبي
    light: "#F5F5DC",        // بيج فاتح جداً (Beige)
    dark: "#8B7355",         // بني ذهبي غامق
    success: "#A89C70",      // زيتوني ذهبي
    textLight: "#FFFFFF",     // أبيض
    textDark: "#6b6b4d",      // بني غامق للنصوص
  };

  const stats = [
    { 
      number: "37", 
      label: "عاماً من التميز", 
      subLabel: "منذ 1987", 
      icon: Calendar, 
      color: colors.accent,
      gradient: `from-[${colors.accent}] to-[${colors.primary}]`,
      description: "منذ تأسيس المدرسة في عهد الملك الحسين بن طلال"
    },
    { 
      number: "5", 
      label: "تخصصات معتمدة", 
      subLabel: "بيرسون العالمية", 
      icon: BookOpen, 
      color: colors.secondary,
      gradient: `from-[${colors.secondary}] to-[${colors.success}]`,
      description: "برامج تعليمية معتمدة من بيرسون العالمية"
    },
    { 
      number: "5000+", 
      label: "خريج متميز", 
      subLabel: "في سوق العمل", 
      icon: Users, 
      color: colors.primary,
      gradient: `from-[${colors.primary}] to-[${colors.dark}]`,
      description: "خريجون يعملون في مختلف القطاعات"
    },
    { 
      number: "50+", 
      label: "معلم مؤهل", 
      subLabel: "وخبراء", 
      icon: Award, 
      color: colors.success,
      gradient: `from-[${colors.success}] to-[${colors.secondary}]`,
      description: "كادر تدريسي مؤهل وذو خبرة"
    },
  ];

  const achievements = [
    { title: "جائزة التميز", year: "2024", icon: <Trophy className="w-4 h-4" color={colors.accent} /> },
    { title: "اعتماد بيرسون الذهبي", year: "2023", icon: <Star className="w-4 h-4" color={colors.accent} /> },
    { title: "أفضل مدرسة مهنية", year: "2022", icon: <Crown className="w-4 h-4" color={colors.accent} /> },
    { title: "جائزة الابتكار", year: "2021", icon: <Lightbulb className="w-4 h-4" color={colors.accent} /> },
  ];

  const features = [
    { text: "تعليم متمازج", icon: <Globe className="w-4 h-4" color={colors.secondary} /> },
    { text: "مناهج عالمية", icon: <BookOpen className="w-4 h-4" color={colors.secondary} /> },
    { text: "تدريب عملي", icon: <TargetIcon className="w-4 h-4" color={colors.secondary} /> },
    { text: "بيئة آمنة", icon: <Shield className="w-4 h-4" color={colors.secondary} /> },
  ];

  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#6b6b4d] to-gray-800"
      role="banner"
      aria-label="قسم البطل الرئيسي لمدرسة مرج الحمام المهنية"
    >
      {/* خلفيات متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={schoolHero}
            alt="مدرسة مرج الحمام المهنية للبنين"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            loading="eager"
          />
          {/* طبقة متدرجة فوق الصورة */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/70 via-[#6b6b4d]/85 to-gray-800/90" />
        </div>
        
        {/* تأثيرات زخرفية ذهبية */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#D2B48C]/15 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#F4A460]/15 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-[#B38B5B]/10 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* خطوط زخرفية ذهبية */}
        <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-transparent via-[#D2B48C]/40 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-[#F4A460]/40 to-transparent"></div>
        
        {/* نقاط ذهبية متناثرة */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D2B48C] rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#F4A460] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* النصوص والبطاقات */}
          <div className="space-y-10 animate-fade-in">
            {/* الشارة العلوية */}
            <div className="inline-flex items-center gap-3">
              <Badge
                variant="secondary"
                className="px-6 py-3 border-2 border-[#D2B48C] bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg shadow-lg group hover:border-[#F4A460]"
                style={{ borderColor: colors.secondary }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" style={{ color: colors.secondary }} />
                  <span className="font-bold text-sm md:text-base" style={{ color: colors.secondary }}>
                    منذ عام 1987 في عهد الملك الحسين بن طلال
                  </span>
                  <Sparkles className="h-4 w-4" style={{ color: colors.accent }} />
                </div>
              </Badge>
              
              {/* إنجازات مصغرة */}
              <div className="hidden md:flex items-center gap-2">
                {achievements.slice(0, 2).map((ach, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#D2B48C] transition-colors"
                    style={{ borderColor: i === 0 ? `${colors.secondary}40` : 'rgba(255,255,255,0.2)' }}
                  >
                    {ach.icon}
                    <span className="text-xs" style={{ color: colors.light }}>{ach.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* العنوان الرئيسي */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-white">مدرسة مرج الحمام</span>
                <span className="block mt-4 relative">
                  <span 
                    className="animate-text-glow"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 50%, ${colors.primary} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    المهنية للبنين
                  </span>
                  <Sparkles 
                    className="absolute -top-4 -right-4 w-8 h-8 animate-spin-slow" 
                    style={{ color: colors.accent }} 
                  />
                </span>
              </h1>

              {/* الميزات السريعة */}
              <div className="flex flex-wrap gap-3">
                {features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: `${colors.light}15`,
                      borderColor: `${colors.secondary}40`,
                      color: colors.light
                    }}
                  >
                    {feature.icon}
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* الرؤية والأهداف */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl backdrop-blur-sm border" style={{ backgroundColor: `${colors.light}10`, borderColor: `${colors.secondary}30` }}>
                <Target className="h-6 w-6" style={{ color: colors.secondary }} />
                <div>
                  <h3 className="text-xl font-bold" style={{ color: colors.light }}>
                    <span style={{ color: colors.secondary }}>رؤيتنا:</span> مجتمع مدرسي فاعل، ملتزم، طموح، يسعى للتميز
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-2xl backdrop-blur-sm border" style={{ backgroundColor: `${colors.light}10`, borderColor: `${colors.primary}30` }}>
                <Zap className="h-6 w-6" style={{ color: colors.primary }} />
                <div>
                  <h3 className="text-xl font-bold" style={{ color: colors.light }}>
                    <span style={{ color: colors.primary }}>هدفنا:</span> تكامل العملية التعليمية التربوية
                  </h3>
                  <p className="text-sm mt-1" style={{ color: `${colors.light}90` }}>
                    تقديم تعليم متكامل يجمع بين الأصالة والحداثة
                  </p>
                </div>
              </div>
            </div>

            {/* بطاقة الرسالة */}
            <Card 
              className="group relative overflow-hidden rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border"
              style={{ 
                background: `linear-gradient(135deg, ${colors.light}15 0%, rgba(139, 115, 85, 0.15) 100%)`,
                backdropFilter: 'blur(20px)',
                borderColor: `${colors.secondary}40`
              }}
            >
              {/* تأثير خلفي */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ 
                  background: `radial-gradient(circle at 30% 50%, ${colors.accent}15 0%, transparent 70%)`,
                }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <div 
                      className="p-2 rounded-lg shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`
                      }}
                    >
                      <School className="h-6 w-6 text-white" />
                    </div>
                    <span 
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      رسالتنا
                    </span>
                  </h3>
                  <GraduationCap className="h-8 w-8" style={{ color: `${colors.light}30` }} />
                </div>
                
                <div className="space-y-4 text-right">
                  <p className="text-lg leading-relaxed font-medium" style={{ color: colors.light }}>
                    توفير فرص متكافئة لجميع الطلاب لتلقي تعليم عالي الجودة،
                    يُمكّنهم من التفكير العلمي والإبداعي، والعمل بروح الفريق،
                    والتعلم مدى الحياة.
                  </p>
                  
                  <p className="text-lg leading-relaxed" style={{ color: `${colors.light}90` }}>
                    نزود طلابنا بالمعارف والمهارات والقيم التي تؤهلهم لدخول سوق العمل
                    والمساهمة في نهضة الوطن بكل كفاءة واقتدار.
                  </p>
                </div>

                {/* خط زخرفي سفلي */}
                <div className="mt-6 pt-6" style={{ borderTop: `1px solid ${colors.secondary}30` }}>
                  <div className="flex items-center justify-end gap-4">
                    <span className="text-sm" style={{ color: `${colors.light}60` }}>تعليم متميز لمستقبل مشرق</span>
                    <Heart className="h-4 w-4 animate-pulse" style={{ color: colors.accent }} />
                  </div>
                </div>
              </div>
            </Card>

            {/* أزرار إضافية */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="px-8 py-6 font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                  color: 'white'
                }}
              >
                <BookOpen className="ml-2 h-5 w-5" />
                اكتشف برامجنا
              </Button>
              
              <Button 
                variant="outline" 
                className="px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300 border-2"
                style={{ 
                  borderColor: colors.secondary,
                  color: colors.light,
                  backgroundColor: `${colors.light}10`
                }}
                onClick={() => window.open("https://maps.app.goo.gl/8GvFqPD9GR4SdCLT8", "_blank")}
              >
                <MapPin className="ml-2 h-5 w-5" style={{ color: colors.secondary }} />
                زيارتنا
              </Button>
            </div>
          </div>

          {/* الإحصائيات والبطاقات */}
          <div className="relative">
            {/* خلفية البطاقات */}
            <div 
              className="absolute -inset-4 rounded-3xl blur-xl opacity-30"
              style={{ 
                background: `radial-gradient(circle at center, ${colors.accent}20 0%, transparent 70%)`
              }}
            ></div>
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={i}
                    className="animate-fade-in-up group"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <Card 
                      className="relative overflow-hidden p-8 backdrop-blur-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.light}15 0%, rgba(139, 115, 85, 0.15) 100%)`,
                        borderColor: `${colors.secondary}40`,
                        backdropFilter: 'blur(20px)'
                      }}
                    >
                      {/* تأثير خلفي متحرك */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ 
                          background: `linear-gradient(135deg, ${stat.color}15 0%, transparent 100%)`,
                        }}
                      ></div>
                      
                      {/* الزوايا الزخرفية */}
                      <div 
                        className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 rounded-tr-3xl"
                        style={{ borderColor: `${colors.secondary}30` }}
                      ></div>
                      <div 
                        className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 rounded-bl-3xl"
                        style={{ borderColor: `${colors.accent}30` }}
                      ></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col items-center text-center space-y-4">
                          {/* الأيقونة */}
                          <div 
                            className="p-4 rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-300"
                            style={{ 
                              background: `linear-gradient(135deg, ${colors.light}20 0%, ${colors.light}10 100%)`,
                              border: `1px solid ${colors.secondary}20`
                            }}
                          >
                            <IconComponent 
                              className="h-10 w-10" 
                              style={{ color: stat.color }} 
                            />
                          </div>
                          
                          {/* الرقم */}
                          <div className="space-y-2">
                            <div
                              className="text-3xl md:text-4xl font-black"
                              style={{ 
                                background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}99 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}
                            >
                              {stat.number}
                            </div>
                            
                            {/* النصوص */}
                            <div className="space-y-1">
                              <div className="text-lg font-bold" style={{ color: colors.light }}>
                                {stat.label}
                              </div>
                              <div className="text-sm font-medium" style={{ color: `${colors.light}70` }}>
                                {stat.subLabel}
                              </div>
                            </div>
                          </div>
                          
                          {/* الوصف */}
                          <div className="pt-4 w-full" style={{ borderTop: `1px solid ${colors.secondary}20` }}>
                            <p className="text-xs leading-relaxed" style={{ color: `${colors.light}60` }}>
                              {stat.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* خط متحرك عند التحويم */}
                      <div 
                        className="absolute bottom-0 left-1/4 right-1/4 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                        style={{ 
                          background: `linear-gradient(90deg, transparent 0%, ${colors.accent} 50%, transparent 100%)`
                        }}
                      ></div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* الإنجازات في الأسفل */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((ach, i) => (
                <div 
                  key={i} 
                  className="group flex items-center justify-center gap-2 p-4 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: `${colors.light}10`,
                    borderColor: `${colors.secondary}30`,
                    color: colors.light
                  }}
                >
                  <div style={{ color: colors.accent }}>
                    {ach.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{ach.title}</div>
                    <div className="text-xs" style={{ color: `${colors.light}60` }}>{ach.year}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* زر التمرير */}
            <div className="mt-12 text-center">
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="inline-flex flex-col items-center gap-2 transition-colors duration-300 hover:scale-110"
                style={{ color: `${colors.light}70` }}
              >
                <span className="text-sm">اكتشف المزيد</span>
                <div className="animate-bounce">
                  <ChevronLeft className="h-6 w-6 rotate-90" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* أنيميشنات CSS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes text-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 5px ${colors.accent}40);
          }
          50% { 
            filter: drop-shadow(0 0 15px ${colors.accent}60) brightness(1.1);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; opacity: 0; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        
        /* تحسينات للجوال */
        @media (max-width: 640px) {
          .container { padding-left: 1rem; padding-right: 1rem; }
          h1 { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;