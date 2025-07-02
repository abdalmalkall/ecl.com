import schoolLogo from "@/assets/school-logo.png";
import { Facebook } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-xl border-b sticky top-0 z-50">
      <div className="container-custom py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-reverse space-x-6">
            <div className="relative">
              <img src={schoolLogo} alt="شعار المدرسة" className="w-20 h-20 floating-animation" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg"></div>
            </div>
            <div className="text-right">
              <h1 className="text-3xl font-black text-primary mb-2">مدرسة مرج الحمام المهنية للبنين</h1>
              <div className="text-sm text-muted-foreground space-y-1 leading-relaxed">
                <p className="font-semibold">وزارة التربية والتعليم</p>
                <p>مديرية التربية والتعليم / مدرسة مرج الحمام / لواء وادي السير</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-6">
            <a 
              href="#home" 
              className="btn-modern text-lg px-6 py-3 bg-gradient-to-r from-primary to-primary-glow hover:scale-105"
            >
              🏠 الصفحة الرئيسية
            </a>
            <a 
              href="#about" 
              className="text-primary hover:text-primary-glow transition-colors text-lg font-semibold px-4 py-2 rounded-lg hover:bg-primary/10"
            >
              📖 من نحن
            </a>
            <a 
              href="#facebook" 
              className="flex items-center space-x-reverse space-x-3 text-primary hover:text-primary-glow transition-colors text-lg font-semibold px-4 py-2 rounded-lg hover:bg-primary/10"
            >
              <span>تابعنا على فيسبوك</span>
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;