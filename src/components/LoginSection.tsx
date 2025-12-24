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
  Lock,
  Globe,
  Video,
  FileText,
  BarChart
} from "lucide-react";

const LoginSection = () => {
  const navigate = useNavigate();

  const userTypes = [
    // { 
    //   id: "admin", 
    //   title: "مدير المنصة", 
    //   icon: <Crown className="w-8 h-8" />, 
    //   description: "وصول كامل لإدارة المنصة والتقارير المتقدمة",
    //   gradient: "from-blue-600 to-blue-800",
    //   features: ["لوحة تحكم كاملة", "تقارير مفصلة", "إدارة المستخدمين"]
    // },
    { 
      id: "teacher", 
      title: "المعلم / المدرب", 
      icon: <GraduationCap className="w-8 h-8" />, 
      description: "إدارة الدورات والتقييمات والتواصل مع الطلاب",
      gradient: "from-blue-400 to-blue-600",
      features: ["إدارة الدورات", "تقييم الطلاب", "رفع المحتوى"]
    },
    { 
      id: "student", 
      title: "الطالب", 
      icon: <BookOpen className="w-8 h-8" />, 
      description: "تصفح الدورات والمشاركة في الاختبارات والمتابعة",
      gradient: "from-blue-300 to-blue-500",
      features: ["الدورات المتاحة", "الاختبارات", "التقدم الدراسي"]
    },
    { 
      id: "parent", 
      title: "ولي الأمر", 
      icon: <Users className="w-8 h-8" />, 
      description: "متابعة تقدم الطالب ونتائج الدورات",
      gradient: "from-blue-700 to-blue-900",
      features: ["تقارير الأداء", "متابعة التقدم", "تواصل مع المدربين"]
    },
    // { 
    //   id: "content", 
    //   title: "مدير المحتوى", 
    //   icon: <FileText className="w-8 h-8" />, 
    //   description: "إدارة المحتوى التعليمي والدروس المصورة",
    //   gradient: "from-cyan-500 to-blue-700",
    //   features: ["إدارة الفيديوهات", "تنظيم المحتوى", "مراقبة الجودة"]
    // },
    { 
      id: "analytics", 
      title: "محلل البيانات", 
      icon: <BarChart className="w-8 h-8" />, 
      description: "تحليل أداء المنصة والإحصاءات المتقدمة",
      gradient: "from-indigo-500 to-blue-700",
      features: ["تقارير إحصائية", "تحليل الأداء", "توقعات النمو"]
    },
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* خلفيات زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* دوائر زخرفية */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-300/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        <div className="absolute bottom-1/4 right-10 w-px h-64 bg-gradient-to-b from-transparent via-blue-300/20 to-transparent"></div>
        
        {/* نقاط متناثرة */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-blue-300/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl mb-8 shadow-lg">
            <div className="p-4 bg-white rounded-xl shadow-inner">
              <Globe className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              منصة جو أكاديمي التعليمية
            </span>
          </h2>
          
          <p className="text-xl text-blue-800 max-w-2xl mx-auto leading-relaxed">
            أول منصة تعليم إلكتروني في الأردن والمنطقة
            <span className="block text-blue-600 mt-2">قم باختيار دورك للوصول إلى الخدمات المخصصة</span>
          </p>
          
          {/* خط زخرفي */}
          <div className="relative w-48 h-1 mx-auto mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
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
              <Card className="relative overflow-hidden h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group-hover:border-blue-400/30 border border-blue-200">
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
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* العنوان والوصف */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                      {userType.title}
                    </h3>
                    
                    <p className="text-blue-800/80 leading-relaxed min-h-[60px]">
                      {userType.description}
                    </p>

                    {/* الميزات */}
                    <div className="space-y-2 pt-4 border-t border-blue-200">
                      {userType.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-blue-800/70">
                          <Star className="w-3 h-3 text-blue-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* زر الدخول */}
                  <div className="mt-8 pt-6 border-t border-blue-200">
                    <Button
                      className={`w-full py-6 bg-gradient-to-r ${userType.gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group-hover:from-blue-500 group-hover:to-blue-700`}
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
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-400/30 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-600/30 rounded-bl-xl"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* قسم الدخول كزائر */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-100 to-blue-200 border-0 shadow-2xl overflow-hidden border border-blue-300">
            <div className="p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 bg-white/80 rounded-xl shadow-inner">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">الدخول كزائر</h3>
                  <p className="text-blue-800/70">تصفح المنصة بدون تسجيل دخول</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-white/80 rounded-xl">
                  <Video className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-blue-800">مشاهدة الدروس المجانية</p>
                </div>
                <div className="p-4 bg-white/80 rounded-xl">
                  <BookOpen className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-blue-800">تصفح المواد التعليمية</p>
                </div>
                <div className="p-4 bg-white/80 rounded-xl">
                  <Award className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                  <p className="text-sm text-blue-800">التعرف على قصص النجاح</p>
                </div>
              </div>
              
              <Button
                className="px-12 py-6 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/smart-book")}
              >
                <span className="flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  الدخول كزائر - تصفح الدورات
                  <Target className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </Card>
        </div>

        {/* نصائح وأرقام */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">2M+</div>
            <div className="text-blue-800 font-medium">طالب مسجل</div>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
            <div className="text-blue-800 font-medium">رضا المستخدمين</div>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200">
            <div className="text-3xl font-bold text-cyan-500 mb-2">13K+</div>
            <div className="text-blue-800 font-medium">دورة تدريبية</div>
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