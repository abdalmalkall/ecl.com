import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LoginSection from "@/components/LoginSection";
import AboutSection from "@/pages/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LoginSection />

      {/* زر للانتقال إلى صفحة من نحن */}
      <div className="text-center my-8">
        <button
          onClick={() => navigate("/about")}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          من نحن
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
