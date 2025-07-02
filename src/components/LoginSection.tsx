import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      gradient: "from-primary to-primary-glow",
      shadowColor: "shadow-blue-500/25"
    },
    {
      id: "teacher", 
      title: "المعلم",
      icon: "🎓",
      description: "إدارة الدروس والدرجات",
      gradient: "from-secondary to-accent",
      shadowColor: "shadow-orange-500/25"
    },
    {
      id: "student",
      title: "الطالب", 
      icon: "📚",
      description: "عرض الدروس والواجبات",
      gradient: "from-accent to-secondary",
      shadowColor: "shadow-yellow-500/25"
    },
    {
      id: "parent",
      title: "ولي الأمر",
      icon: "👨‍👩‍👧‍👦", 
      description: "متابعة تقدم الطالب",
      gradient: "from-primary to-accent",
      shadowColor: "shadow-purple-500/25"
    },
    {
      id: "supervisor",
      title: "المشرف",
      icon: "🔍",
      description: "الإشراف والمتابعة",
      gradient: "from-secondary to-primary",
      shadowColor: "shadow-green-500/25"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block p-2 bg-gradient-to-r from-primary to-secondary rounded-full mb-6">
            <div className="bg-white rounded-full p-4">
              <span className="text-4xl">🔐</span>
            </div>
          </div>
          <h2 className="text-5xl font-black text-primary mb-6 glow-effect">تسجيل الدخول للمنصة التعليمية</h2>
          <p className="text-2xl text-muted-foreground">اختر نوع حسابك للوصول إلى عالم التعلم الرقمي</p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {userTypes.map((userType, index) => (
            <div 
              key={userType.id} 
              className="card-modern cursor-pointer group relative"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              <div className="relative p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${userType.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300 ${userType.shadowColor} shadow-lg`}>
                  {userType.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{userType.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{userType.description}</p>
                <Button className={`btn-modern w-full bg-gradient-to-r ${userType.gradient} hover:scale-105`}>
                  🚀 دخول الآن
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Login Form */}
        <div className="max-w-lg mx-auto">
          <div className="card-modern glow-effect">
            <div className="text-center p-8 border-b">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔑</span>
              </div>
              <h3 className="text-3xl font-bold text-primary">تسجيل الدخول</h3>
              <p className="text-muted-foreground mt-2">أدخل بياناتك للوصول للمنصة</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-3">
                <Label htmlFor="username" className="text-lg font-semibold">اسم المستخدم</Label>
                <Input 
                  id="username" 
                  placeholder="أدخل اسم المستخدم" 
                  className="h-14 text-lg rounded-xl border-2 focus:border-primary"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="password" className="text-lg font-semibold">كلمة المرور</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="أدخل كلمة المرور" 
                  className="h-14 text-lg rounded-xl border-2 focus:border-primary"
                />
              </div>
              <Button className="w-full btn-modern text-xl py-4 h-auto">
                🚀 دخول
              </Button>
              <div className="text-center">
                <Button variant="ghost" className="text-primary hover:text-primary-glow text-lg">
                  ❓ هل نسيت كلمة المرور؟
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;