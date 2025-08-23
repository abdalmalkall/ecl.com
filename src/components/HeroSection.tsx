import schoolHero from "@/assets/image.png"; // تأكد أن الصورة موجودة في نفس المسار

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
    { number: "37", label: "عاماً من التميز", subLabel: "منذ 1987" },
    { number: "5", label: "تخصصات معتمدة", subLabel: "بيرسون" },
    { number: "1000+", label: "خريج متميز", subLabel: "في السوق" },
    { number: "50+", label: "معلم مؤهل", subLabel: "وخبير" },
  ];

  return (
    <section id="home" dir="rtl" className="relative min-h-screen flex items-center pt-20">
      {/* خلفية */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${schoolHero})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-0 gap-12 items-start">
          {/* النصوص */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right space-y-6"
          >
<Badge
  variant="secondary"
  className="mb-6 inline-flex items-center border text-[#D2B48C] border-[#D2B48C] bg-white hover:bg-white"
>
  <Calendar className="h-4 w-4 ml-2" style={{ color: '#D2B48C' }} />
  منذ عام 1987 في عهد الملك الحسين بن طلال
</Badge>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
  مدرسة مرج الحمام <span className="block mt-2" style={{ color: '#D2B48C' }}>المهنية للبنين</span>
</h1>



 <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
  <strong style={{ color: '#D2B48C' }}>رؤيتنا:</strong>{' '}
  <span className="text-white">مجتمع مدرسي فاعل، ملتزم، طموح، يسعى للتميز</span>
</p>


            {/* بطاقة الرسالة */}
            <Card className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-right">
               <strong style={{ color: '#D2B48C' }}>رسالتنا</strong>{' '}
              <div className="text-sm text-gray-200 space-y-2">
                <p>
                  توفير فرص متكافئة لجميع طلاب المدارس لتلقي تعليم عالي الجودة، يُمكّنهم من التفكير العلمي والإبداعي،
                  والعمل بروح الفريق، والتعلم مدى الحياة، ويزودهم بالمعارف والمهارات والقيم والمواقف التي تؤهلهم لدخول سوق العمل والمساهمة في نهضة الوطن.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* الإحصائيات */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6" // نقل الإحصائيات ليكون بنفس مستوى التباعد كبطاقة الرسالة
          >
  <div className="grid grid-cols-2 gap-4">
  {stats.map((stat, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
    >
      <Card className="p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-lg transition">
        {/* الرقم باللون البيج */}
        <div className="text-3xl font-bold mb-2" style={{ color: '#D2B48C' }}>
          {stat.number}
        </div>
        <div className="text-sm font-medium text-white">{stat.label}</div>
        <div className="text-xs text-gray-300">{stat.subLabel}</div>
      </Card>
    </motion.div>
  ))}
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
