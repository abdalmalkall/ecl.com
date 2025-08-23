import schoolHero from "@/assets/modern-education-hero.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, GraduationCap, ArrowLeft, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
    { number: "37", label: "عاماً من التميز", subLabel: "منذ 1987" },
    { number: "5", label: "تخصصات معتمدة", subLabel: "بيرسون" },
    { number: "1000+", label: "خريج متميز", subLabel: "في السوق" },
    { number: "50+", label: "معلم مؤهل", subLabel: "وخبير" },
  ];

  const specializations = [
    { name: "الهندسة", nameEn: "Engineering", icon: "⚙️" },
    { name: "الأعمال", nameEn: "Business", icon: "💼" },
    { name: "تكنولوجيا المعلومات", nameEn: "IT", icon: "💻" },
    { name: "الضيافة", nameEn: "Hospitality", icon: "🏨" },
    { name: "الزراعة", nameEn: "Agriculture", icon: "🌱" },
  ];

  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* خلفية */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${schoolHero})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* النصوص */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
 <Badge
  variant="secondary"
  className="mb-6 text-blue-600 bg-white border border-blue-600 relative inline-flex items-center"
>
  <Calendar className="h-4 w-4 ml-2 text-blue-600" />
  منذ عام 1987 في عهد الملك الحسين بن طلال
</Badge>



            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              مدرسة مرج الحمام{" "}
              <span className="text-primary block mt-2">المهنية للبنين</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-2xl mx-auto lg:mx-0">
              <strong className="text-primary">رؤيتنا:</strong> مجتمع مدرسي
              فاعل، ملتزم، طموح، يسعى للتميز
            </p>

        

            {/* أزرار */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
             
            </div>

            {/* فريق الإدارة */}
            <Card className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-right">
              <h3 className="font-semibold text-primary mb-3">
رسالتنا
</h3>
              <div className="text-sm text-gray-200 space-y-2">
                <p>
                  <strong></strong> توفير فرص متكافئة لجميع طلاب المدارس لتلقي تعليم عالي الجودة، يُمكّنهم من التفكير العلمي والإبداعي، والعمل بروح الفريق، والتعلم مدى الحياة، ويزودهم بالمعارف والمهارات والقيم والمواقف التي تؤهلهم لدخول سوق العمل والمساهمة في نهضة الوطن.                </p>
                <p>
                  <strong></strong>
                </p>
                <p>
     
                </p>
              </div>
            </Card>
          </motion.div>

          {/* الإحصائيات والتخصصات */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            {/* إحصائيات */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <Card className="p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-lg transition">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-300">{stat.subLabel}</div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* تخصصات */}
            <Card className="p-6 bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-primary ml-2" />
                <h3 className="text-lg font-semibold text-white">
                  التخصصات المعتمدة
                </h3>
                <Badge variant="secondary" className="mr-2 text-xs">
                  بيرسون
                </Badge>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {specializations.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                  >
                    <span className="text-2xl">{spec.icon}</span>
                    <div>
                      <div className="font-medium text-white">{spec.name}</div>
                      <div className="text-sm text-gray-300">
                        {spec.nameEn}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
