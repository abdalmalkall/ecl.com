import schoolLogo from "@/assets/school-logo.png";
import { Facebook } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-xl border-b border-blue-100 sticky top-0 left-0 w-full z-50">
      <div className="container-custom py-2 px-4 md:py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* الشعار + النص، في الوسط على الهاتف */}
          <div className="w-full flex flex-col items-center text-center">
            <div className="relative mb-2">
              <img
                src={schoolLogo}
                alt="شعار JO Academy"
                className="w-14 h-14 md:w-16 md:h-16"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-blue-100/20 rounded-full blur-lg"></div>
            </div>
            <h1 className="text-xl md:text-3xl font-black text-blue-600 leading-tight mb-1">
              JO ACADEMY
            </h1>
          </div>
          {/* روابط التنقل */}
          {/* يمكنك إضافة روابط هنا إذا أردت */}
        </div>
      </div>
    </header>
  );
};

export default Header;