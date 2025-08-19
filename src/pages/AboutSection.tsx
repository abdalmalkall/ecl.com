import specializationsIcons from "@/assets/specializations-icons.png";

const AboutSection = () => {
  const specializations = [
    { name: "إدارة الأعمال", icon: "💼", gradient: "from-[#f5f5dc] to-[#e4dfc1]", description: "تعلم مبادئ الإدارة والتسويق" },
    { name: "الهندسة", icon: "⚙️", gradient: "from-[#e4dfc1] to-[#b3a97c]", description: "التصميم والابتكار التقني" },
    { name: "تكنولوجيا المعلومات", icon: "💻", gradient: "from-[#f5f5dc] to-[#b3a97c]", description: "البرمجة والتقنيات الحديثة" },
    { name: "الزراعة", icon: "🌱", gradient: "from-[#e4dfc1] to-[#a89c70]", description: "الزراعة المستدامة والحديثة" },
    { name: "الضيافة", icon: "🍴", gradient: "from-[#f5f5dc] to-[#a89c70]", description: "فنون الطبخ وإدارة المطاعم" }
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#f5f5dc]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#e4dfc1]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* About Us Section */}
        <div id="about-us" className="text-center mb-24 animate-slide-up">
          <div className="inline-block p-3 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-full mb-8 shadow-md">
            <div className="bg-white rounded-full p-4 shadow">
              <span className="text-4xl">🏫</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#b3a97c] mb-6 md:mb-8 glow-effect">من نحن</h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] mx-auto mb-8 md:mb-12 rounded-full"></div>
          
          <div className="max-w-4xl md:max-w-5xl mx-auto">
            <div className="card-modern p-6 md:p-12 glow-effect space-y-6 md:space-y-8">
              <div className="bg-gradient-to-r from-[#f5f5dc]/10 to-[#e4dfc1]/10 rounded-2xl p-6 md:p-8 mb-4 md:mb-8 shadow">
                <p className="text-xl md:text-2xl leading-relaxed text-[#6b6b4d] font-medium">
                  تأسست مدرسة مرج الحمام في عهد جلالة الملك الحسين بن طلال رحمه الله عام 
                  <span className="text-[#b3a97c] font-bold"> ١٩٨٧</span>. 
                  تُعتبر المدرسة من أكبر وأعرق المدارس في المملكة.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#e4dfc1]/10 to-[#f5f5dc]/10 rounded-2xl p-6 md:p-8 shadow">
                <p className="text-lg md:text-xl leading-relaxed text-[#6b6b4d]">
                  بالتعاون مع <span className="text-[#a89c70] font-bold">شركة بيرسون العالمية للتعليم</span>، 
                  اعتمدت المدرسة التعلم المدمج في خمسة مجالات متخصصة.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="text-center mb-24">
          <div className="inline-block p-3 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] rounded-full mb-8 shadow-md">
            <div className="bg-white rounded-full p-4 shadow">
              <span className="text-4xl">🎯</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#b3a97c] mb-6 md:mb-8 glow-effect">تخصصاتنا المعتمدة</h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] mx-auto mb-8 md:mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {specializations.map((spec, index) => (
              <div 
                key={index} 
                className="card-modern text-center group relative overflow-hidden shadow-md"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative p-6 md:p-8">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${spec.gradient} rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center text-2xl md:text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow`}>
                    {spec.icon}
                  </div>
                  <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] mx-auto mb-3 md:mb-4 rounded-full"></div>
                  <h3 className="text-lg md:text-xl font-bold text-[#b3a97c] mb-2 md:mb-3">{spec.name}</h3>
                  <p className="text-xs md:text-sm text-[#a89c70] leading-relaxed">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Team Section */}
        <div className="text-center">
          {/* باقي محتوى فريق التطوير كما هو */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
