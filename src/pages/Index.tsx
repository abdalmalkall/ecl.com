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

      {/* فيديو مباشر في الصفحة الرئيسية */}
      <div className="my-12 flex justify-center">
        <video
          src={meetingVideo}
          controls
          autoPlay
          className="max-w-full rounded shadow-lg"
        >
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
