import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LoginSection from "@/components/LoginSection";
import Footer from "@/components/Footer";
const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* الهيدر */}
      <Header />
      {/* قسم البطل */}
      <HeroSection />
      {/* قسم تسجيل الدخول */}
      <LoginSection />
<div className="text-center my-12 flex flex-col md:flex-row justify-center gap-6">
  {/* زر من نحن */}
  <button
    onClick={() => navigate("/about")}
    className="px-8 py-3 bg-gradient-to-r from-[#b3a97c] to-[#a89c70] text-white font-medium text-lg rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
  >
    من نحن
  </button>

  {/* زر احسب معدلك باللون البيج */}
  <button
    onClick={() => window.location.href = "https://ecl-btec.netlify.app/"}
    className="px-8 py-3 bg-gradient-to-r from-[#b3a97c] to-[#a89c70] text-white font-medium text-lg rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
  >
 احسب معدلك
  </button>
</div>
      <Footer />
    </div>
  );
};
export default Index;