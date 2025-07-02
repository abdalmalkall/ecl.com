import educationHero from "@/assets/education-hero.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${educationHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="hero-title text-white">
            أهلاً وسهلاً بكم في منصتنا التعليمية
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-accent">رؤيتنا</h2>
              <p>
                مجتمع مدرسي فاعل، ملتزم، وطموح، ملتزم بقيم التسامح، مسترشدًا بالعلم والتطوير، يسعى للتميز.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-accent">رسالتنا</h2>
              <p>
                توفير فرص متكافئة لجميع طلاب المدارس لتلقي تعليم عالي الجودة، يُمكّنهم من التفكير العلمي والإبداعي، والعمل بروح الفريق، والتعلم مدى الحياة، ويزودهم بالمعارف والمهارات والقيم والمواقف التي تؤهلهم لدخول سوق العمل والمساهمة في نهضة الوطن.
              </p>
            </div>
          </div>
          
          <Button className="btn-hero text-white border-none">
            استكشف المنصة
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;