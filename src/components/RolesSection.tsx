import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RolesSection = () => {
  const roles = [
    {
      icon: "🔑",
      title: "المدير",
      description: "وصول كامل إلى المنصة",
      permissions: ["إدارة شاملة", "تقارير متقدمة", "إعدادات النظام"],
      color: "bg-primary"
    },
    {
      icon: "👨‍🏫",
      title: "المعلم", 
      description: "تنزيل خطط الواجبات، وإضافة الدرجات، وإجراء تعديلات على الجدول",
      permissions: ["إدارة الدرجات", "الواجبات", "الجدول الدراسي"],
      color: "bg-secondary"
    },
    {
      icon: "👨‍🎓",
      title: "الطالب",
      description: "عرض الدرجات والجدول، وتحميل الواجبات فقط",
      permissions: ["عرض الدرجات", "الجدول الدراسي", "تحميل الواجبات"],
      color: "bg-accent"
    },
    {
      icon: "👪",
      title: "ولي الأمر",
      description: "تتبع الدرجات والتقارير",
      permissions: ["متابعة الدرجات", "التقارير", "التواصل مع المدرسة"],
      color: "bg-muted"
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">عندما يُحدث أولياء الأمور فرقًا!</h2>
          <h3 className="text-3xl font-semibold text-secondary mb-6">نظام الصلاحيات</h3>
          <p className="text-xl text-muted-foreground">صلاحيات مختلفة لكل مستخدم حسب دوره في العملية التعليمية</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <Card key={index} className="card-elevated text-center">
              <CardHeader>
                <div className="text-6xl mb-4">{role.icon}</div>
                <CardTitle className="text-xl text-primary">{role.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-right">{role.description}</p>
                <div className="space-y-2">
                  {role.permissions.map((permission, permIndex) => (
                    <div key={permIndex} className="flex items-center justify-center">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {permission}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;