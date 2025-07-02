import schoolLogo from "@/assets/school-logo.png";
import { Facebook } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-xl border-b sticky top-0 z-50">
      <div className="container-custom py-4 px-4 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* الشعار + النص، في الوسط على الهاتف */}
          <div className="w-full flex flex-col items-center text-center">
            <div className="relative mb-3">
              <img
                src={schoolLogo}
                alt="شعار المدرسة"
                className="w-20 h-20 md:w-24 md:h-24"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5dc]/20 to-[#eee8c9]/20 rounded-full blur-lg"></div>
            </div>
            <h1 className="text-xl md:text-3xl font-black text-[#a89c70] leading-tight mb-1">
              مدرسة مرج الحمام المهنية للبنين
            </h1>
            <div className="text-xs md:text-sm space-y-0.5 text-[#6b6b4d]">
              <p className="font-semibold">وزارة التربية والتعليم</p>
              <p>مديرية التربية والتعليم / مدرسة مرج الحمام / لواء وادي السير</p>
            </div>
          </div>

          {/* روابط التنقل */}


        </div>
      </div>
    </header>
  );
};

export default Header;
