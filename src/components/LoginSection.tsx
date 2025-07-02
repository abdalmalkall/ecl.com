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
      description: "وصول كامل لإدارة المنصة"
    },
    {
      id: "teacher", 
      title: "المعلم",
      icon: "👨‍🏫",
      description: "إدارة الدروس والدرجات"
    },
    {
      id: "student",
      title: "الطالب", 
      icon: "👨‍🎓",
      description: "عرض الدروس والواجبات"
    },
    {
      id: "parent",
      title: "ولي الأمر",
      icon: "👪", 
      description: "متابعة تقدم الطالب"
    },
    {
      id: "supervisor",
      title: "المشرف",
      icon: "👨‍💼",
      description: "الإشراف والمتابعة"
    }
  ];

  return (
    <section className="section-spacing bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">تسجيل الدخول للمنصة التعليمية</h2>
          <p className="text-xl text-muted-foreground">اختر نوع حسابك لتسجيل الدخول</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {userTypes.map((userType) => (
            <Card key={userType.id} className="card-elevated cursor-pointer hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">{userType.icon}</div>
                <CardTitle className="text-xl text-primary">{userType.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{userType.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full btn-hero">
                  تسجيل الدخول
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Login Form */}
        <div className="max-w-md mx-auto">
          <Card className="card-elevated">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">نموذج تسجيل الدخول</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">اسم المستخدم</Label>
                <Input id="username" placeholder="أدخل اسم المستخدم" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <Input id="password" type="password" placeholder="أدخل كلمة المرور" />
              </div>
              <Button className="w-full btn-hero">
                دخول
              </Button>
              <div className="text-center">
                <Button variant="ghost" className="text-primary hover:text-primary-glow">
                  هل نسيت كلمة المرور؟
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;