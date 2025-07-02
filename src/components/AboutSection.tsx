import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const specializations = [
    "إدارة الأعمال",
    "الهندسة", 
    "تكنولوجيا المعلومات",
    "الزراعة",
    "الضيافة"
  ];

  return (
    <section className="section-spacing">
      <div className="container-custom">
        {/* About Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8">من نحن</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-card-foreground">
                  تأسست مدرسة مرج الحمام في عهد جلالة الملك الحسين بن طلال رحمه الله عام ١٩٨٧. 
                  تُعتبر المدرسة من أكبر وأعرق المدارس في المملكة. بالتعاون مع شركة بيرسون العالمية للتعليم، 
                  اعتمدت المدرسة التعلم المدمج في خمسة مجالات.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specializations */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8">تخصصاتنا المعتمدة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg text-primary">{spec}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Plan */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">خطة تطوير كليتنا</h2>
          <Card className="card-elevated">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg text-card-foreground">
                أُنشئ هذا الموقع الإلكتروني من قِبل طلاب السنة الأولى في المرحلة الثانوية بقسم إدارة الأعمال
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">بإدارة المدير الموقر</h3>
                  <p className="text-lg font-semibold text-accent">محمود درويش</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">بإدارة الأستاذ الدكتور</h3>
                  <p className="text-lg font-semibold text-accent">حمزة المناصير</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-bold text-primary mb-2">تطوير وتنسيق:</h4>
                <p className="text-lg font-semibold text-secondary-foreground">عبد الملك أحمد نعيم</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;