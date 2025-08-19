import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LoginSection = () => {
  const navigate = useNavigate();

  const userTypes = [
    { id: "admin", title: "المدير ومدراء الأقسام", icon: "👑", description: "وصول كامل لإدارة المنصة" },
    { id: "teacher", title: "المعلم", icon: "👨‍🏫", description: "إدارة الدروس والدرجات" },
    { id: "student", title: "الطالب", icon: "📚", description: "عرض الدروس والواجبات" },
    { id: "parent", title: "ولي الأمر", icon: "👨‍👩‍👧‍👦", description: "متابعة تقدم الطالب" },
    { id: "supervisor", title: "المشرف", icon: "🔍", description: "الإشراف والمتابعة" },
    { id: "ministry", title: "وزارة التربية والتعليم", icon: "🏛️", description: "دخول خاص لموظفي الوزارة" },
  ];

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#a89c70]">تسجيل الدخول للمنصة التعليمية</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {userTypes.map((userType) => (
            <div key={userType.id} className="card-modern p-8 text-center">
              <div className="text-3xl mb-4">{userType.icon}</div>
              <h3 className="text-2xl font-bold text-[#a89c70] mb-3">{userType.title}</h3>
              <p className="text-[#6b6b4d] mb-6">{userType.description}</p>
              <Button 
                className="w-full bg-gradient-to-r from-[#d8cba4] to-[#c2b98e]"
                onClick={() => navigate("/auth")}  
              >
                🚀 دخول الآن
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
