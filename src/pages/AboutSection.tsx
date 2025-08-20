import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // عند تحميل الصفحة، اجعل التمرير للأعلى
    window.scrollTo(0, 0);
  }, []);

  // ... بقية الكود كما هو


  const specializations = [
    { name: "الهندسة (Engineering)", icon: "⚙️", gradient: "from-[#e4dfc1] to-[#b3a97c]", description: "التصميم والابتكار التقني" },
    { name: "الأعمال (Business)", icon: "💼", gradient: "from-[#f5f5dc] to-[#e4dfc1]", description: "تعلم مبادئ الإدارة والتسويق" },
    { name: "تكنولوجيا المعلومات (IT)", icon: "💻", gradient: "from-[#f5f5dc] to-[#b3a97c]", description: "البرمجة والتقنيات الحديثة" },
    { name: "الضيافة (Hospitality)", icon: "🍴", gradient: "from-[#f5f5dc] to-[#a89c70]", description: "فنون الطبخ وإدارة المطاعم" },
    { name: "الزراعة (Agriculture)", icon: "🌱", gradient: "from-[#e4dfc1] to-[#a89c70]", description: "الزراعة المستدامة والحديثة" }
  ];

  return (
    <section className="section-spacing relative overflow-hidden bg-white text-gray-800">
      {/* الخلفيات الزخرفية */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#f5f5dc]/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#e4dfc1]/10 rounded-full blur-3xl"></div>
</div>


        {/* التخصصات */}
        <div className="text-center mb-24">
          <div className="inline-block p-3 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] rounded-full mb-8 shadow-md">
            <div className="bg-white rounded-full p-4 shadow">
              <span className="text-4xl">🎯</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#b3a97c] mb-6 md:mb-8">التخصصات المعتمدة لدينا</h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#e4dfc1] to-[#a89c70] mx-auto mb-8 md:mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {specializations.map((spec, index) => (
              <div 
                key={index} 
                className="card-modern text-center group relative overflow-hidden shadow-lg rounded-2xl"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative p-6 md:p-8">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${spec.gradient} rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center text-2xl md:text-3xl shadow-lg`}>
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

        {/* الخطة التطويرية وفريق الإدارة */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#b3a97c] mb-6 md:mb-8">الخطة التطويرية لمدرستنا</h2>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <p className="text-lg md:text-xl text-[#6b6b4d]">تم إنشاء هذا الموقع بواسطة طلاب الأول ثانوي - إدارة أعمال</p>
            <p className="text-lg md:text-xl text-[#6b6b4d]">بإدارة المدير الفاضل <span className="font-bold text-[#a89c70]">محمود درويش</span></p>
            <p className="text-lg md:text-xl text-[#6b6b4d]">بإدارة الأستاذ <span className="font-bold text-[#a89c70]">حمزة المناصير</span></p>
            <p className="text-lg md:text-xl text-[#6b6b4d]">تطوير وتنسيق <span className="font-bold text-[#a89c70]">عبد الملك أحمد نعيم</span></p>
          </div>
        </div>

      <div className="container-custom relative z-10">
        {/* من نحن */}
        <div id="about-us" className="text-center mb-24">
          <div className="inline-block p-3 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-full mb-8 shadow-md">
            <div className="bg-white rounded-full p-4 shadow">
              <span className="text-4xl">🏫</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#b3a97c] mb-6 md:mb-8">من نحن</h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] mx-auto mb-8 md:mb-12 rounded-full"></div>
          
          <div className="max-w-4xl md:max-w-5xl mx-auto space-y-6 md:space-y-8">
            <div className="bg-[#f5f5dc]/10 rounded-2xl p-6 md:p-8 shadow">
              <p className="text-xl md:text-2xl leading-relaxed text-[#6b6b4d] font-medium">
                أنشأت <span className="font-bold text-[#b3a97c]">مدرسة مرج الحمام المهنية للبنين</span> في عهد صاحب الجلالة المغفور له جلالة الملك الحسين بن طلال المعظم سنة <span className="font-bold text-[#b3a97c]">١٩٨٧</span>، وتعتبر المدرسة من أكبر المدارس المتميزة في جميع أنحاء المملكة.
              </p>
            </div>
            <div className="bg-[#e4dfc1]/10 rounded-2xl p-6 md:p-8 shadow">
              <p className="text-lg md:text-xl leading-relaxed text-[#6b6b4d]">
                وبالتعاون مع منظمة التدريس العالمية <span className="font-bold text-[#a89c70]">"بيرسون"</span>، فقد اعتمدت المدرسة التدريس المتمازج في خمس من المجالات.
              </p>
            </div>
          </div>

          {/* زر الصفحة الرئيسية بعد النص */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-[#b3a97c] text-white rounded-lg shadow hover:bg-[#a89c70] transition"
            >
              العودة للصفحة الرئيسية
            </button>
          </div>
        </div>

        {/* الفوتر */}
        <footer className="text-center py-8 border-t border-gray-300 mt-12">
          <p className="text-sm md:text-base text-[#6b6b4d]">جميع الحقوق محفوظة لدى ©Educational Communication Launcher.2025</p>
        </footer>
      </div>
    </section>
  );
};

export default AboutSection;
