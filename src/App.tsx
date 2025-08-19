import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth"; // صفحة تسجيل الدخول/التسجيل
import Register from "./pages/register"; // صفحة تسجيل ثانيه

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Index />} />

          {/* صفحة تسجيل الدخول / تسجيل مستخدم */}
          <Route path="/auth" element={<Auth />} />

          {/* صفحة إنشاء حساب جديد */}
          <Route path="/register" element={<Register />} />

          {/* أي صفحة غير موجودة */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
