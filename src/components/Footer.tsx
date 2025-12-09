import schoolLogo from "@/assets/school-logo.png";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Heart,
  Shield,
  Award,
  GraduationCap,
  BookOpen,
  Users,
  Home,
  Info,
  Target,
  Contact,
  Sparkles,
  ArrowUp,
  Globe,
  MessageCircle,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const quickLinks = [
    { icon: <Home className="w-4 h-4" />, label: "الصفحة الرئيسية", href: "/" },
    { icon: <Info className="w-4 h-4" />, label: "من نحن", href: "/about" },
    { icon: <BookOpen className="w-4 h-4" />, label: "التخصصات", href: "/about#specializations" },
    { icon: <GraduationCap className="w-4 h-4" />, label: "المناهج", href: "#" },
    { icon: <Target className="w-4 h-4" />, label: "الرؤية والرسالة", href: "/about#vision" },
    { icon: <Users className="w-4 h-4" />, label: "فريق العمل", href: "/about#development" },
    { icon: <Contact className="w-4 h-4" />, label: "اتصل بنا", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: "مرج الحمام، عمان، الأردن" },
    { icon: <Phone className="w-4 h-4" />, text: "+962 6 123 4567" },
    { icon: <Mail className="w-4 h-4" />, text: "info@marjalhamam.edu.jo" },
    { icon: <Clock className="w-4 h-4" />, text: "الأحد - الخميس: 8:00 ص - 3:00 م" },
  ];

  const socialMedia = [
    { icon: <Facebook className="w-5 h-5" />, label: "فيسبوك", href: "https://www.facebook.com/people/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D9%85%D8%B1%D8%AC-%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84%D8%A9/61555886417903/" },
    { icon: <Instagram className="w-5 h-5" />, label: "إنستجرام", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "تويتر", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, label: "يوتيوب", href: "#" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "واتساب", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#f5f5dc] via-[#e4dfc1] to-[#b3a97c] text-[#6b6b4d] overflow-hidden">
      {/* خلفيات زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f5f5dc]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#e4dfc1]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#b3a97c]/10 to-transparent rounded-full blur-2xl"></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-transparent via-[#b3a97c]/20 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-[#a89c70]/20 to-transparent"></div>
        
        {/* نقاط متناثرة */}
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-[#b3a97c]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 left-1/3 w-3 h-3 bg-[#a89c70]/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* شريط العودة للأعلى */}
      <div className="relative z-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-[#b3a97c] to-[#a89c70] text-white rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* معلومات المدرسة */}
          <div className="text-center lg:text-right">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-full blur-xl opacity-50"></div>
              <img 
                src={schoolLogo} 
                alt="شعار مدرسة مرج الحمام المهنية للبنين" 
                className="relative w-40 h-40 mx-auto lg:mx-0 object-contain floating-animation rounded-2xl shadow-2xl border-4 border-white/50"
              />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-[#b3a97c] animate-pulse" />
            </div>
            
            <h3 className="text-2xl font-black mb-6 text-[#6b6b4d]">
              <span className="bg-gradient-to-r from-[#b3a97c] to-[#a89c70] bg-clip-text text-transparent">
                مدرسة مرج الحمام المهنية للبنين
              </span>
            </h3>
            
            <div className="space-y-4 text-[#6b6b4d]/80 text-lg">
              <div className="flex items-center justify-center lg:justify-end gap-2">
                <Award className="w-5 h-5 text-[#b3a97c]" />
                <p className="font-semibold">مدرسة مرج الحمام</p>
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-2">
                <Shield className="w-5 h-5 text-[#b3a97c]" />
                <p>وزارة التربية والتعليم</p>
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-2">
                <Globe className="w-5 h-5 text-[#b3a97c]" />
                <p>لواء وادي السير</p>
              </div>
            </div>
          </div>
          
          {/* الروابط السريعة */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-lg shadow-inner">
                <Target className="w-6 h-6 text-[#b3a97c]" />
              </div>
              <h4 className="text-2xl font-bold text-[#6b6b4d]">روابط سريعة</h4>
            </div>
            
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center justify-center lg:justify-end gap-3 text-lg p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="text-[#6b6b4d] group-hover:text-[#b3a97c] transition-colors duration-300">
                    {link.label}
                  </span>
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* معلومات الاتصال */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-lg shadow-inner">
                <Contact className="w-6 h-6 text-[#b3a97c]" />
              </div>
              <h4 className="text-2xl font-bold text-[#6b6b4d]">معلومات الاتصال</h4>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center lg:justify-end gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-[#6b6b4d]/80 group-hover:text-[#6b6b4d] transition-colors duration-300">
                    {info.text}
                  </span>
                  <div className="p-2 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-lg shadow-sm">
                    {info.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* النشرة البريدية والتواصل الاجتماعي */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-[#f5f5dc] to-[#e4dfc1] rounded-lg shadow-inner">
                <MessageCircle className="w-6 h-6 text-[#b3a97c]" />
              </div>
              <h4 className="text-2xl font-bold text-[#6b6b4d]">تواصل معنا</h4>
            </div>
            
            {/* النشرة البريدية */}
            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="relative mb-4">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a89c70]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني"
                  className="w-full pr-10 pl-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-[#e4dfc1] focus:outline-none focus:ring-2 focus:ring-[#b3a97c] focus:border-transparent"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#b3a97c] to-[#a89c70] text-white font-bold rounded-xl hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="flex items-center justify-center gap-2">
                  اشترك في النشرة
                  <Heart className="w-4 h-4" />
                </span>
              </Button>
            </form>
            
            {/* وسائل التواصل الاجتماعي */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-r from-white/20 to-white/10 rounded-xl hover:from-[#f5f5dc] hover:to-[#e4dfc1] transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <div className="relative">
                    {social.icon}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#b3a97c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* حقوق النشر */}
        <div className="border-t border-[#b3a97c]/20 pt-12 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* معلومات حقوق النشر */}
            <div className="text-center md:text-right">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-[#6b6b4d] text-lg font-medium">
                  جميع الحقوق محفوظة © 
                  <span className="font-bold text-[#b3a97c] mx-2">
                    مدرسة مرج الحمام المهنية للبنين
                  </span>
                  {new Date().getFullYear()}
                </p>
              </div>
            </div>
            
            {/* الشعارات */}
            <div className="flex justify-center items-center gap-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <GraduationCap className="w-8 h-8 text-[#b3a97c]" />
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Shield className="w-8 h-8 text-[#b3a97c]" />
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Award className="w-8 h-8 text-[#b3a97c]" />
              </div>
            </div>
            
            {/* الروابط الإضافية */}
            <div className="text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#" className="text-[#6b6b4d] hover:text-[#b3a97c] transition-colors text-sm">
                  سياسة الخصوصية
                </a>
                <span className="text-[#a89c70]">•</span>
                <a href="#" className="text-[#6b6b4d] hover:text-[#b3a97c] transition-colors text-sm">
                  شروط الاستخدام
                </a>
                <span className="text-[#a89c70]">•</span>
                <a href="#" className="text-[#6b6b4d] hover:text-[#b3a97c] transition-colors text-sm">
                  خريطة الموقع
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* أنيميشنات CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .floating-animation {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;