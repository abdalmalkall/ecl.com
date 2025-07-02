import schoolLogo from "@/assets/school-logo.png";
import { Facebook } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-card border-b">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-reverse space-x-4">
            <img src={schoolLogo} alt="شعار المدرسة" className="w-16 h-16" />
            <div className="text-right">
              <h1 className="text-2xl font-bold text-primary">مدرسة مرج الحمام المهنية للبنين</h1>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>وزارة التربية والتعليم</p>
                <p>مديرية التربية والتعليم / مدرسة مرج الحمام / لواء وادي السير</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-4">
            <a href="#home" className="text-primary hover:text-primary-glow transition-colors px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary">
              الصفحة الرئيسية
            </a>
            <a href="#about" className="text-primary hover:text-primary-glow transition-colors">
              من نحن
            </a>
            <a href="#facebook" className="text-primary hover:text-primary-glow transition-colors flex items-center space-x-reverse space-x-2">
              <span>تابعنا على فيسبوك</span>
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;