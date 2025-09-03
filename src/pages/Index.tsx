import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LoginSection from "@/components/LoginSection";
import Footer from "@/components/Footer";

// استيراد الفيديو
import meetingVideo from "../assets/meeting-video.mp4";

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

      {/* زر الانتقال إلى من نحن */}
      <div className="text-center my-12">
        <button
          onClick={() => navigate("/about")}
          className="px-8 py-3 bg-gradient-to-r from-[#b3a97c] to-[#a89c70] text-white font-medium text-lg rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          من نحن
        </button>
      </div>

      {/* فيديو مباشر */}
      <div className="my-16 flex justify-center px-4">
        <video
          src={meetingVideo}
          controls
          autoPlay
          className="w-full max-w-3xl rounded-2xl shadow-2xl border border-[#e4dfc1]"
        >
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      </div>

      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default Index;
