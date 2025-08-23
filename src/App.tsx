import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth"; // صفحة تسجيل الدخول / التسجيل

// استيراد الصفحات الوهمية من Page1 إلى Page8
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import AboutSection from "./pages/AboutSection";

// استيراد صفحة الطالب الشخصية
import StudentProfile from "./pages/StudentProfile";

// استيراد الفيديو
import meetingVideo from "./pages/meeting-video.mp4";

const queryClient = new QueryClient();

// 🔹 كومبوننت لإرجاع التمرير للأعلى عند كل تغيير في المسار
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
};

// 🔹 كومبوننت صفحة الفيديو
const VideoPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <video
      src={meetingVideo}
      controls
      autoPlay
      className="max-w-full max-h-full"
    >
      متصفحك لا يدعم تشغيل الفيديو.
    </video>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* مكونات التنبيهات */}
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Index />} />

          {/* صفحة تسجيل الدخول / تسجيل مستخدم */}
          <Route path="/auth" element={<Auth />} />

          {/* الصفحات من Page1 إلى Page8 */}
          <Route path="/about" element={<AboutSection />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />

          {/* صفحة الفيديو */}
          <Route path="/video" element={<VideoPage />} />

          {/* صفحة الطالب الشخصية */}
          <Route path="/student-profile" element={<StudentProfile />} />

          {/* أي صفحة غير موجودة */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
