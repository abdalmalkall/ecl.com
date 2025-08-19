import schoolLogo from "@/assets/school-logo.png";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#f5f5dc] via-[#e4dfc1] to-[#b3a97c] text-[#6b6b4d] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#f5f5dc]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#e4dfc1]/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and School Info */}
          <div className="text-center md:text-right">
            <div className="relative inline-block mb-6">
              <img src={schoolLogo} alt="شعار المدرسة" className="w-32 h-32 mx-auto md:mx-0 floating-animation" />
              <div className="absolute inset-0 bg-[#f5f5dc]/30 rounded-full blur-xl"></div>
            </div>
            <h3 className="text-2xl font-black mb-4 text-[#b3a97c]">مدرسة مرج الحمام المهنية للبنين</h3>
            <div className="text-[#a89c70] text-lg leading-relaxed space-y-2">
              <p className="font-semibold">مدرسة مرج الحمام</p>
              <p>وزارة التربية والتعليم</p>
              <p>لواء وادي السير</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-8 text-[#b3a97c]">روابط سريعة</h4>
            <div className="space-y-4">
              <a href="#home" className="block text-lg hover:text-[#b3a97c] transition-colors p-2 rounded-lg hover:bg-[#f5f5dc]/10">
                🏠 الصفحة الرئيسية
              </a>
              <a href="/about" className="block text-lg hover:text-[#b3a97c] transition-colors p-2 rounded-lg hover:bg-[#f5f5dc]/10">
                📖 من نحن
              </a>
           <a href="/about#about-us" className="block text-lg hover:text-[#b3a97c] transition-colors p-2 rounded-lg hover:bg-[#f5f5dc]/10">
  🎯 التخصصات
</a>

              <a href="#login" className="block text-lg hover:text-[#b3a97c] transition-colors p-2 rounded-lg hover:bg-[#f5f5dc]/10">
                🔐 تسجيل الدخول
              </a>
              <a href="#contact" className="block text-lg hover:text-[#b3a97c] transition-colors p-2 rounded-lg hover:bg-[#f5f5dc]/10">
                📞 اتصل بنا
              </a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-8 text-[#b3a97c]">تواصل معنا</h4>
            <a 
              href="https://www.facebook.com/people/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D9%85%D8%B1%D8%AC-%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84%D8%A9/61555886417903/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-reverse space-x-4 text-xl hover:text-[#b3a97c] transition-colors p-4 rounded-2xl hover:bg-[#f5f5dc]/10 bg-[#f5f5dc]/5"
            >
              <Facebook className="w-8 h-8" />
              <span className="font-semibold">فيسبوك</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#b3a97c]/20 mt-12 pt-8 text-center">
          <div className="bg-[#f5f5dc]/30 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <p className="text-[#a89c70] text-lg font-medium">
              جميع الحقوق محفوظة © <span className="text-[#b3a97c] font-bold">مدرسة مرج الحمام المهنية للبنين</span> 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;