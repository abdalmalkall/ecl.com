import schoolLogo from "@/assets/school-logo.png";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and School Info */}
          <div className="text-center md:text-right">
            <img src={schoolLogo} alt="شعار المدرسة" className="w-24 h-24 mx-auto md:mx-0 mb-4" />
            <h3 className="text-xl font-bold mb-2">مُطلق التواصل التربوي</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              مدرسة مرج الحمام<br/>
              وزارة التربية والتعليم<br/>
              لواء وادي السير
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              <a href="#about" className="block hover:text-accent transition-colors">نبذة عنا</a>
              <a href="#calendar" className="block hover:text-accent transition-colors">التقويم الدراسي</a>
              <a href="#announcements" className="block hover:text-accent transition-colors">الإعلانات</a>
              <a href="#contact" className="block hover:text-accent transition-colors">اتصل بنا</a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
            <a 
              href="#facebook" 
              className="inline-flex items-center space-x-reverse space-x-2 hover:text-accent transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span>فيسبوك</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            جميع الحقوق محفوظة © Educational Communication Launcher 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;