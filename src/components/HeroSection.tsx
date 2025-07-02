import schoolLogo from "@/assets/modern-education-hero.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white text-[#3f3f2f]">
      
      {/* Background image overlay (خفيفة وناعمة) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${schoolLogo})` }}
      />

      {/* محتوى الصفحة */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-5xl mx-auto space-y-12 animate-slide-up">

          {/* عنوان المدرسة */}
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-[#a89c70] mb-6">
              مدرسة مرج الحمام المهنية للبنين
            </h1>
          </div>

          {/* رؤيتنا */}
          <div className="bg-[#f5f5dc]/50 backdrop-blur-md p-6 md:p-10 border border-[#e4dfc1] rounded-xl shadow-md space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 bg-[#a89c70] rounded-full" />
              <h2 className="text-2xl md:text-3xl font-black text-[#a89c70]">رؤيتنا</h2>
              <div className="w-16 h-1 bg-[#a89c70] rounded-full" />
            </div>
            <p className="text-base md:text-lg leading-loose">
              مجتمع مدرسي فاعل، ملتزم، وطموح، ملتزم بقيم التسامح، مسترشدًا بالعلم والتطوير، يسعى للتميز.
            </p>
          </div>

          {/* رسالتنا */}
          <div className="bg-[#f5f5dc]/50 backdrop-blur-md p-6 md:p-10 border border-[#e4dfc1] rounded-xl shadow-md space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 bg-[#b3a97c] rounded-full" />
              <h2 className="text-2xl md:text-3xl font-black text-[#b3a97c]">رسالتنا</h2>
              <div className="w-16 h-1 bg-[#b3a97c] rounded-full" />
            </div>
            <p className="text-base md:text-lg leading-loose">
              توفير فرص متكافئة لجميع طلاب المدارس لتلقي تعليم عالي الجودة، يُمكّنهم من التفكير العلمي والإبداعي، والعمل بروح الفريق، والتعلم مدى الحياة، ويزودهم بالمعارف والمهارات والقيم والمواقف التي تؤهلهم لدخول سوق العمل والمساهمة في نهضة الوطن.
            </p>
          </div>

          {/* الأزرار */}
   
        

        </div>
      </div>

      {/* Scroll indicator */}
  
    </section>
  );
};

export default HeroSection;
