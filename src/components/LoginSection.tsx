import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginSection = () => {
  const userTypes = [
    {
      id: "admin",
      title: "المدير ومدراء الأقسام",
      icon: "👑",
      description: "وصول كامل لإدارة المنصة",
      gradient: "from-[#d8cba4] to-[#d8cba4]",
      shadowColor: "shadow-yellow-300/300"
    },
    {
      id: "teacher", 
      title: "المعلم",
      icon: "🎓",
      description: "إدارة الدروس والدرجات",
         gradient: "from-[#d8cba4] to-[#d8cba4]",
      shadowColor: "shadow-yellow-400/30"
    },
    {
      id: "student",
      title: "الطالب", 
      icon: "📚",
      description: "عرض الدروس والواجبات",
           gradient: "from-[#d8cba4] to-[#d8cba4]",
      shadowColor: "shadow-yellow-200/30"
    },
    {
      id: "parent",
      title: "ولي الأمر",
      icon: "👨‍👩‍👧‍👦", 
      description: "متابعة تقدم الطالب",
         gradient: "from-[#d8cba4] to-[#d8cba4]",
      shadowColor: "shadow-yellow-300/25"
    },
    {
      id: "supervisor",
      title: "المشرف",
      icon: "🔍",
      description: "الإشراف والمتابعة",
      gradient: "from-[#d8cba4] to-[#d8cba4]",
      shadowColor: "shadow-yellow-300/30"
    },
    {
      id: "ministry",
      title: "وزارة التربية والتعليم",
      icon: "🏛️",
      description: "دخول خاص لموظفي الوزارة",
      gradient: "from-[#d8cba4] to-[#d8cba4]",
      shadowColor: "shadow-yellow-300/30"
    }
  ];

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* زينة الخلفية الهادئة */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#f5f5dc]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#e4dfc1]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        {/* العنوان */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block p-2 bg-gradient-to-r from-[#d8cba4] to-[#c2b98e] rounded-full mb-6">
            <div className="bg-white rounded-full p-4 shadow-md">
              <span className="text-4xl">🔐</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#a89c70] mb-6">تسجيل الدخول للمنصة التعليمية</h2>
          <p className="text-xl md:text-2xl text-[#6b6b4d]">اختر نوع حسابك للوصول إلى عالم التعلم الرقمي</p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#d8cba4] to-[#c2b98e] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* أنواع الحسابات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {userTypes.map((userType, index) => (
            <div
              key={userType.id}
              className="card-modern cursor-pointer group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              <div className="relative p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${userType.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300 ${userType.shadowColor} shadow-lg`}>
                  {userType.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#a89c70] mb-3">{userType.title}</h3>
                <p className="text-[#6b6b4d] mb-6 leading-relaxed">{userType.description}</p>
                <Button className={`btn-modern w-full bg-gradient-to-r ${userType.gradient} hover:scale-105`}>
                  🚀 دخول الآن
                </Button>
              </div>
            </div>
          ))}
        </div>

            </div>
    </section>
  );
};

export default LoginSection;

