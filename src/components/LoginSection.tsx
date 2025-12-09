import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Crown, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Eye,
  Building,
  Sparkles,
  ArrowLeft,
  Shield,
  UserCheck,
  Target,
  Award,
  Zap,
  Star,
  Lock
} from "lucide-react";

const LoginSection = () => {
  const navigate = useNavigate();

  const userTypes = [
    { 
      id: "admin", 
      title: "المدير ومدراء الأقسام", 
      icon: <Crown className="w-8 h-8" />, 
      description: "وصول كامل لإدارة المنصة والتقارير المتقدمة",
      gradient: "from-[#8B7355] to-[#B38B5B]",
      features: ["لوحة تحكم كاملة", "تقارير مفصلة", "إدارة المستخدمين"]
    },
    { 
      id: "teacher", 
      title: "المعلم", 
      icon: <GraduationCap className="w-8 h-8" />, 
      description: "إدارة الدروس والدرجات والتواصل مع الطلاب",
      gradient: "from-[#D2B48C] to-[#F4A460]",
      features: ["إدارة المواد", "تقييم الطلاب", "متابعة الحضور"]
    },
    { 
      id: "student", 
      title: "الطالب", 
      icon: <BookOpen className="w-8 h-8" />, 
      description: "عرض الدروس والواجبات والنتائج الدراسية",
      gradient: "from-[#A89C70] to-[#C9B37A]",
      features: ["المقررات الدراسية", "الواجبات", "النتائج"]
    },
    { 
      id: "parent", 
      title: "ولي الأمر", 
      icon: <Users className="w-8 h-8" />, 
      description: "متابعة تقدم الطالب والحضور والدرجات",
      gradient: "from-[#6b6b4d] to-[#8B7355]",
      features: ["تقارير الأداء", "متابعة الحضور", "تواصل مع المعلمين"]
    },
    { 
      id: "supervisor", 
      title: "المشرف", 
      icon: <Eye className="w-8 h-8" />, 
      description: "الإشراف والمتابعة والتقارير الإحصائية",
      gradient: "from-[#5D8AA8] to-[#7EB6D9]",
      features: ["تقارير إحصائية", "متابعة الأداء", "تقارير الجودة"]
    },
    { 
      id: "ministry", 
      title: "وزارة التربية والتعليم", 
      icon: <Building className="w-8 h-8" />, 
      description: "دخول خاص لموظفي الوزارة والمتابعة العامة",
      gradient: "from-[#2E4057] to-[#4A648C]",
      features: ["إحصاءات عامة", "تقارير وطنية", "متابعة المناهج"]
    },
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-[#FAFAF5] via-white to-[#F5F5F0]">
      {/* خلفيات زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* دوائر زخرفية */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#D2B48C]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#8B7355]/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-transparent via-[#B38B5B]/20 to-transparent"></div>
        <div className="absolute bottom-1/4 right-10 w-px h-64 bg-gradient-to-b from-transparent via-[#D2B48C]/20 to-transparent"></div>
        
        {/* نقاط متناثرة */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#B38B5B]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-[#D2B48C]/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#F5F5DC] to-[#E4DFC1] rounded-2xl mb-8 shadow-lg">
            <div className="p-4 bg-white rounded-xl shadow-inner">
              <Lock className="w-12 h-12 text-[#8B7355]" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#8B7355] via-[#B38B5B] to-[#D2B48C] bg-clip-text text-transparent">
              المنصة التعليمية الذكية
            </span>
          </h2>
          
          <p className="text-xl text-[#6b6b4d] max-w-2xl mx-auto leading-relaxed">
            اختر نوع الحساب المناسب لدخول منصتنا التعليمية المتكاملة
            <span className="block text-[#A89C70] mt-2">قم باختيار دورك للوصول إلى الخدمات المخصصة</span>
          </p>
          
          {/* خط زخرفي */}
          <div className="relative w-48 h-1 mx-auto mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B38B5B] to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm"></div>
          </div>
        </div>

        {/* بطاقات أنواع المستخدمين */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {userTypes.map((userType, index) => (
            <div
              key={userType.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="relative overflow-hidden h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group-hover:border-[#B38B5B]/30">
                {/* خلفية متدرجة */}
                <div className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* تأثير عند التحويم */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* الأيقونة والدائرة الزخرفية */}
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`relative w-20 h-20 mx-auto bg-gradient-to-br ${userType.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-500">
                        {userType.icon}
                      </div>
                    </div>
                    
                    {/* نجمة صغيرة */}
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-[#F4A460] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* العنوان والوصف */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#6b6b4d] group-hover:text-[#8B7355] transition-colors duration-300">
                      {userType.title}
                    </h3>
                    
                    <p className="text-[#6b6b4d]/80 leading-relaxed min-h-[60px]">
                      {userType.description}
                    </p>

                    {/* الميزات */}
                    <div className="space-y-2 pt-4 border-t border-[#E4DFC1]">
                      {userType.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#6b6b4d]/70">
                          <Star className="w-3 h-3 text-[#D2B48C]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* زر الدخول */}
                  <div className="mt-8 pt-6 border-t border-[#E4DFC1]">
                    <Button
                      className={`w-full py-6 bg-gradient-to-r ${userType.gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group-hover:from-[#B38B5B] group-hover:to-[#D2B48C]`}
                      onClick={() => navigate("/auth")}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        دخول الآن
                        <Zap className="w-4 h-4" />
                      </span>
                    </Button>
                    
                    {/* مؤشر نشط */}
                    <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-white to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </div>
                </CardContent>

                {/* زوايا زخرفية */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D2B48C]/30 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#B38B5B]/30 rounded-bl-xl"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* قسم الدخول كزائر */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-[#F5F5DC] to-[#E4DFC1] border-0 shadow-2xl overflow-hidden">
            <div className="p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 bg-white/80 rounded-xl shadow-inner">
                  <Eye className="w-8 h-8 text-[#8B7355]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#6b6b4d]">الدخول كزائر</h3>
                  <p className="text-[#6b6b4d]/70">تصفح المنصة بدون تسجيل دخول</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-white/80 rounded-xl">
                  <BookOpen className="w-6 h-6 text-[#B38B5B] mx-auto mb-2" />
                  <p className="text-sm text-[#6b6b4d]">تصفح الكتب الإلكترونية</p>
                </div>
                <div className="p-4 bg-white/80 rounded-xl">
                  <Users className="w-6 h-6 text-[#D2B48C] mx-auto mb-2" />
                  <p className="text-sm text-[#6b6b4d]">مشاهدة الدروس العامة</p>
                </div>
                <div className="p-4 bg-white/80 rounded-xl">
                  <Award className="w-6 h-6 text-[#A89C70] mx-auto mb-2" />
                  <p className="text-sm text-[#6b6b4d]">التعرف على الإنجازات</p>
                </div>
              </div>
              
              <Button
                className="px-12 py-6 bg-gradient-to-r from-[#6b6b4d] to-[#8B7355] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/smart-book")}
              >
                <span className="flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  الدخول كزائر - الكتاب الذكي
                  <Target className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </Card>
        </div>

        {/* نصائح وأرقام */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#E4DFC1]">
            <div className="text-3xl font-bold text-[#B38B5B] mb-2">5000+</div>
            <div className="text-[#6b6b4d] font-medium">مستخدم نشط</div>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#E4DFC1]">
            <div className="text-3xl font-bold text-[#D2B48C] mb-2">99.8%</div>
            <div className="text-[#6b6b4d] font-medium">رضا المستخدمين</div>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#E4DFC1]">
            <div className="text-3xl font-bold text-[#A89C70] mb-2">24/7</div>
            <div className="text-[#6b6b4d] font-medium">دعم فني متوفر</div>
          </div>
        </div>
      </div>

      {/* أنيميشنات CSS */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LoginSection;