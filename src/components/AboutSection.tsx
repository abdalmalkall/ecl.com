import specializationsIcons from "@/assets/specializations-icons.png";

const AboutSection = () => {
  const specializations = [
    {
      name: "إدارة الأعمال",
      icon: "💼",
      gradient: "from-blue-500 to-blue-700",
      description: "تعلم مبادئ الإدارة والتسويق"
    },
    {
      name: "الهندسة", 
      icon: "⚙️",
      gradient: "from-orange-500 to-red-600",
      description: "التصميم والابتكار التقني"
    },
    {
      name: "تكنولوجيا المعلومات",
      icon: "💻",
      gradient: "from-green-500 to-teal-600",
      description: "البرمجة والتقنيات الحديثة"
    },
    {
      name: "الزراعة",
      icon: "🌱",
      gradient: "from-emerald-500 to-green-700",
      description: "الزراعة المستدامة والحديثة"
    },
    {
      name: "الضيافة",
      icon: "🍴",
      gradient: "from-purple-500 to-pink-600",
      description: "فنون الطبخ وإدارة المطاعم"
    }
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* About Us Section */}
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-block p-3 bg-gradient-to-r from-primary to-secondary rounded-full mb-8">
            <div className="bg-white rounded-full p-4">
              <span className="text-4xl">🏫</span>
            </div>
          </div>
          <h2 className="text-6xl font-black text-primary mb-8 glow-effect">من نحن</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-5xl mx-auto">
            <div className="card-modern p-12 glow-effect">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
                <p className="text-2xl leading-relaxed text-card-foreground font-medium">
                  تأسست مدرسة مرج الحمام في عهد جلالة الملك الحسين بن طلال رحمه الله عام 
                  <span className="text-primary font-bold"> ١٩٨٧</span>. 
                  تُعتبر المدرسة من أكبر وأعرق المدارس في المملكة.
                </p>
              </div>
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8">
                <p className="text-xl leading-relaxed text-card-foreground">
                  بالتعاون مع <span className="text-accent font-bold">شركة بيرسون العالمية للتعليم</span>، 
                  اعتمدت المدرسة التعلم المدمج في خمسة مجالات متخصصة.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="text-center mb-24">
          <div className="inline-block p-3 bg-gradient-to-r from-secondary to-accent rounded-full mb-8">
            <div className="bg-white rounded-full p-4">
              <span className="text-4xl">🎯</span>
            </div>
          </div>
          <h2 className="text-6xl font-black text-primary mb-8 glow-effect">تخصصاتنا المعتمدة</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {specializations.map((spec, index) => (
              <div 
                key={index} 
                className="card-modern text-center group relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative p-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${spec.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    {spec.icon}
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 rounded-full"></div>
                  <h3 className="text-xl font-bold text-primary mb-3">{spec.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Team */}
        <div className="text-center">
          <div className="inline-block p-3 bg-gradient-to-r from-accent to-primary rounded-full mb-8">
            <div className="bg-white rounded-full p-4">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
          <h2 className="text-6xl font-black text-primary mb-8 glow-effect">خطة تطوير كليتنا</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="card-modern p-12 glow-effect">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12">
              <p className="text-2xl text-card-foreground font-medium leading-relaxed">
                أُنشئ هذا الموقع الإلكتروني من قِبل طلاب السنة الأولى في المرحلة الثانوية 
                <br />بقسم <span className="text-primary font-bold">إدارة الأعمال</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="card-modern p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">المدير الموقر</h3>
                <p className="text-3xl font-black text-accent">محمود درويش</p>
              </div>
              
              <div className="card-modern p-8 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">الأستاذ الدكتور</h3>
                <p className="text-3xl font-black text-accent">حمزة المناصير</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                💻
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">تطوير وتنسيق:</h4>
              <p className="text-4xl font-black text-secondary">عبد الملك أحمد نعيم</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;