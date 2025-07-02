import modernEducationHero from "@/assets/modern-education-hero.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${modernEducationHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/85 to-secondary/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full floating-animation"></div>
        <div className="absolute top-60 right-32 w-6 h-6 bg-secondary/30 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-accent/25 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-20 w-5 h-5 bg-white/15 rounded-full floating-animation" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-5xl mx-auto space-y-12 animate-slide-up">
          <div className="glow-effect">
            <h1 className="hero-title text-white mb-8">
              مدرسة مرج الحمام المهنية للبنين
            </h1>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <div className="card-modern bg-white/10 backdrop-blur-lg p-10 space-y-6 border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-1 bg-secondary rounded-full"></div>
                <h2 className="text-3xl font-black text-secondary mx-6">رؤيتنا</h2>
                <div className="w-20 h-1 bg-secondary rounded-full"></div>
              </div>
              <p className="text-white/90 leading-relaxed">
                مجتمع مدرسي فاعل، ملتزم، وطموح، ملتزم بقيم التسامح، مسترشدًا بالعلم والتطوير، يسعى للتميز.
              </p>
            </div>
            
            <div className="card-modern bg-white/10 backdrop-blur-lg p-10 space-y-6 border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-1 bg-accent rounded-full"></div>
                <h2 className="text-3xl font-black text-accent mx-6">رسالتنا</h2>
                <div className="w-20 h-1 bg-accent rounded-full"></div>
              </div>
              <p className="text-white/90 leading-relaxed">
                توفير فرص متكافئة لجميع طلاب المدارس لتلقي تعليم عالي الجودة، يُمكّنهم من التفكير العلمي والإبداعي، والعمل بروح الفريق، والتعلم مدى الحياة، ويزودهم بالمعارف والمهارات والقيم والمواقف التي تؤهلهم لدخول سوق العمل والمساهمة في نهضة الوطن.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-modern text-xl px-12 py-6">
              🚀 تسجيل الدخول للمنصة
            </Button>
            <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm">
              📖 تعرف علينا أكثر
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;