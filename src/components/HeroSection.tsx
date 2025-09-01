import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import schoolHero from "@/assets/image.png";
import { Calendar, School, Users, Award, BookOpen } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { number: "37", label: "عاماً من التميز", subLabel: "منذ 1987", icon: School, color: "#D2B48C" },
    { number: "5", label: "تخصصات معتمدة", subLabel: "بيرسون", icon: BookOpen, color: "#F4A460" },
    { number: "1000+", label: "خريج متميز", subLabel: "في السوق", icon: Users, color: "#DEB887" },
    { number: "50+", label: "معلم مؤهل", subLabel: "وخبير", icon: Award, color: "#D2B48C" },
  ];

  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen flex items-start justify-center pt-32 pb-24 overflow-hidden"
      role="banner"
      aria-label="قسم البطل الرئيسي لمدرسة مرج الحمام المهنية"
    >
      {/* الخلفية */}
      <div className="absolute inset-0">
        <img
          src={schoolHero}
          alt="مدرسة مرج الحمام المهنية للبنين"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* غباش شفاف جميل */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* النصوص */}
          <div className="text-center lg:text-right space-y-8 animate-fade-in">
            <Badge
              variant="secondary"
              className="mb-6 inline-flex items-center border text-[#D2B48C] border-[#D2B48C] bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <Calendar className="h-4 w-4 ml-2" style={{ color: "#D2B48C" }} />
              منذ عام 1987 في عهد الملك الحسين بن طلال
            </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              مدرسة مرج الحمام{" "}
              <span className="block mt-2 animate-text-shimmer" style={{ color: "#D2B48C" }}>
                المهنية للبنين
              </span>
            </h1>

            <div className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-[#D2B48C] text-xl">رؤيتنا:</strong>{" "}
              <span className="text-white font-medium">
                مجتمع مدرسي فاعل، ملتزم، طموح، يسعى للتميز
              </span>
            </div>

            {/* بطاقة الرسالة */}
            <Card className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-right max-w-2xl mx-auto lg:mx-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/20">
              <h3 className="text-[#D2B48C] text-xl font-bold mb-4 flex flex-row-reverse items-center">
                <School className="ml-2 h-5 w-5" />
                رسالتنا
              </h3>
              <div className="text-sm md:text-base text-gray-200 space-y-3 leading-relaxed">
                <p>
                  توفير فرص متكافئة لجميع طلاب المدارس لتلقي تعليم عالي الجودة،
                  يُمكّنهم من التفكير العلمي والإبداعي، والعمل بروح الفريق،
                  والتعلم مدى الحياة، ويزودهم بالمعارف والمهارات والقيم
                  والمواقف التي تؤهلهم لدخول سوق العمل والمساهمة في نهضة الوطن.
                </p>
              </div>
            </Card>
          </div>

          {/* الإحصائيات */}
          <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-6 max-w-md w-full">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={i}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <Card className="p-6 text-center bg-white/15 backdrop-blur-md border border-white/30 hover:shadow-2xl transition-all duration-300 rounded-2xl hover:scale-105 hover:bg-white/20 group">
                      <div className="flex flex-col items-center space-y-3">
                        <IconComponent 
                          className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" 
                          style={{ color: stat.color }} 
                        />
                        <div
                          className="text-2xl md:text-3xl font-bold"
                          style={{ color: stat.color }}
                        >
                          {stat.number}
                        </div>
                        <div className="text-sm md:text-base font-medium text-white">
                          {stat.label}
                        </div>
                        <div className="text-xs md:text-sm text-gray-300">
                          {stat.subLabel}
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* أنيميشنات CSS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes text-shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; opacity: 0; }
        .animate-text-shimmer { animation: text-shimmer 3s ease-in-out infinite; }
        @media (max-width: 640px) {
          .container { padding-left: 1rem; padding-right: 1rem; }
        }
        .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
      `}</style>
    </section>
  );
};

export default HeroSection;
