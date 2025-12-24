import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Eye, 
  ArrowRight, 
  Award, 
  Users, 
  Target, 
  Globe,
  ChevronRight,
  Star,
  BookOpen,
  Lightbulb,
  Video,
  GraduationCap,
  FileText,
  Cpu
} from "lucide-react";

const AboutSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    
    // إضافة تأثيرات الظهور التدريجي
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => el.classList.add('visible'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specializations = [
    { 
      name: "المنهج الوطني", 
      icon: <BookOpen className="w-8 h-8" />, 
      gradient: "from-blue-200 to-blue-400", 
      description: "دروس مصورة وشاملة لجميع المواد الدراسية للمنهج الوطني الأردني",
      features: ["دروس مجانية مصورة", "ملفات تعليمية شاملة", "اختبارات تفاعلية"]
    },
    { 
      name: "المنهج الدولي", 
      icon: <Globe className="w-8 h-8" />, 
      gradient: "from-blue-100 to-blue-300", 
      description: "برامج متخصصة للشهادات الدولية مثل IB, IGCSE, SAT",
      features: ["مواد دولية معتمدة", "تحضير للاختبارات", "مناهج عالمية"]
    },
    { 
      name: "طلبة الجامعات", 
      icon: <GraduationCap className="w-8 h-8" />, 
      gradient: "from-blue-300 to-cyan-500", 
      description: "مواد مساعدة ودورات تأهيلية لطلبة الجامعات",
      features: ["مواد جامعية مساعدة", "دورات تأهيلية", "تحضير للمسارات المهنية"]
    },
    { 
      name: "الدورات التدريبية", 
      icon: <Video className="w-8 h-8" />, 
      gradient: "from-cyan-400 to-blue-500", 
      description: "+13 ألف دورة تدريبية متنوعة في مختلف المجالات",
      features: ["+13 ألف دورة", "مجالات متنوعة", "تدريب عملي وتطبيقي"]
    },
    { 
      name: "الذكاء الاصطناعي", 
      icon: <Cpu className="w-8 h-8" />, 
      gradient: "from-indigo-400 to-blue-600", 
      description: "استخدام أحدث تقنيات الذكاء الاصطناعي في التعليم الإلكتروني",
      features: ["تقنيات حديثة", "تعلم مخصص", "تطبيقات ذكية"]
    }
  ];

  const achievements = [
    { number: "2014", label: "عام التأسيس - أول منصة تعليم إلكتروني", icon: <Award className="w-6 h-6" /> },
    { number: "2M+", label: "طالب مسجل على المنصة", icon: <Users className="w-6 h-6" /> },
    { number: "13K+", label: "دورة تدريبية متاحة", icon: <Target className="w-6 h-6" /> },
    { number: "2.8K", label: "معلم وخبير تعليمي", icon: <Star className="w-6 h-6" /> },
    { number: "1.2M+", label: "ساعة مشاهدة للدروس", icon: <Video className="w-6 h-6" /> },
    { number: "313K+", label: "ملف تعليمي متاح", icon: <FileText className="w-6 h-6" /> }
  ];

  const successStories = [
    { 
      name: "لين المومني", 
      achievement: "الأولى على المملكة 2004", 
      quote: "كتير وفرتلي وقت كونه الفيديو بالبيت وبقدر احضره وقت ما بدي، كان هاد احسن جانب بالمنصة"
    },
    { 
      name: "تالا مصطفى", 
      achievement: "الأولى على المملكة 2005", 
      quote: "كنت ماخدة منصة جو أكاديمي كإشي تكاملي مع دراستي بالمدرسة وكنت أعتمد عليها بعد المدرسة"
    },
    { 
      name: "رايا عليان", 
      achievement: "الثانية على المملكة الأدبي", 
      quote: "اشكر جو أكاديمي منصة المليون وبشكر كل كادرها لانهم ما تركونا ووقفوا معنا من اللحظة الاولى"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-blue-900 py-12 px-4 relative overflow-hidden">
      {/* خلفيات زخرفية متطورة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* دوائر متحركة متعددة */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-300/10 to-blue-100/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-indigo-500/5 to-blue-600/5 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        
        {/* نقاط متناثرة */}
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-blue-500/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* شريط التنقل المميز */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sticky top-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/40 z-20 transform transition-all duration-300 hover:shadow-3xl">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-600"
          >
            <ArrowRight className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">العودة للصفحة الرئيسية</span>
          </button>
          
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 justify-center">
            {[
              { id: 'about-us', label: 'من نحن', icon: <Globe className="w-4 h-4" /> },
              { id: 'services', label: 'خدماتنا', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'vision', label: 'الرؤية والرسالة', icon: <Eye className="w-4 h-4" /> },
              { id: 'achievements', label: 'إنجازاتنا', icon: <Star className="w-4 h-4" /> },
              { id: 'success-stories', label: 'قصص النجاح', icon: <Users className="w-4 h-4" /> },
              { id: 'team', label: 'فريق العمل', icon: <Lightbulb className="w-4 h-4" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center gap-2 px-4 py-2.5 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 border border-white/30 text-sm font-medium text-blue-800 hover:text-blue-600"
              >
                {item.icon}
                {item.label}
                <ChevronRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* قسم من نحن */}
        <div id="about-us" className="text-center mb-24 fade-in">
          {/* أيقونة فخمة مع تأثيرات */}
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-100 p-4 rounded-3xl shadow-2xl border border-white/50">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl">
                <Globe className="w-20 h-20 text-blue-600 animate-float" />
              </div>
            </div>
            {/* نجمة زخرفية */}
            <Star className="absolute -top-2 -right-2 w-8 h-8 text-blue-500 animate-spin-slow" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              من نحن
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-blue-700/70 mt-2 block">About Us</span>
          </h2>
          
          {/* خط زخرفي */}
          <div className="relative w-64 h-1 mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm"></div>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* بطاقة رئيسية */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/40 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl overflow-hidden">
              {/* خلفية متحركة */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 via-blue-200/0 to-blue-300/0 group-hover:from-blue-100/10 group-hover:via-blue-200/10 group-hover:to-blue-300/10 transition-all duration-700"></div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-blue-800 font-medium relative z-10">
                بدأت منصة <span className="font-bold text-blue-600 bg-gradient-to-r from-blue-100 to-transparent px-2 py-1 rounded-lg">جو أكاديمي</span> عام <span className="font-bold text-blue-500">2014</span>، كأول منصة تعليم إلكتروني في المملكة الأردنية الهاشمية والمنطقة.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-blue-700/70 mt-6 font-medium relative z-10">
                <span className="text-blue-600 font-semibold">JO Academy</span> started in <span className="font-bold text-blue-500">2014</span> as the first e-learning platform in the Hashemite Kingdom of Jordan and the region.
              </p>
            </div>
            
            {/* بطاقة ثانوية */}
            <div className="group relative bg-gradient-to-r from-blue-100/40 to-blue-200/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 transform transition-all duration-500 hover:scale-[1.01] overflow-hidden">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
              
              <p className="text-lg md:text-xl leading-relaxed text-blue-800 font-medium relative z-10">
                تقدم المنصة العديد من الخدمات التعليمية المتنوعة؛ لتكون الرحلة التعليمية تفاعلية متكاملة، لطلبة المدارس من كلا المنهجين الوطني والدولي، وطلبة الجامعات.
              </p>
              <p className="text-lg leading-relaxed text-blue-700/70 mt-4 font-medium relative z-10">
                The platform offers many diverse educational services; to make the educational journey an integrated interactive experience, for school students from both national and international curricula, and university students.
              </p>
            </div>

            {/* بطاقة تقنية */}
            <div className="group relative bg-gradient-to-r from-blue-200/40 to-cyan-100/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 transform transition-all duration-500 hover:scale-[1.01] overflow-hidden">
              <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
              
              <p className="text-lg md:text-xl leading-relaxed text-blue-800 font-medium relative z-10">
                بالإضافة إلى تقديم العديد من الدورات التدريبية باستخدام أحدث التقنيات والتكنولوجيا والذكاء الاصطناعي لتسهيل وصول المعلومة للطالب بما يتناسب مع العصر سريع التطور.
              </p>
              <p className="text-lg leading-relaxed text-blue-700/70 mt-4 font-medium relative z-10">
                In addition to providing many training courses using the latest technologies and artificial intelligence to facilitate students' access to information in line with the rapidly evolving era.
              </p>
            </div>
          </div>
        </div>

        {/* قسم الخدمات */}
        <div id="services" className="text-center mb-24 fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-100 p-4 rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-blue-200 to-blue-400 p-6 rounded-2xl">
                <BookOpen className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 bg-clip-text text-transparent">
              خدمات جو أكاديمي
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-blue-700/60 mt-2 block">JO Academy Services</span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div 
                key={index} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* تأثير خلفي */}
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${spec.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <div className="text-white">
                    {spec.icon}
                  </div>
                </div>
                
                {/* خط زخرفي تحت الأيقونة */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {spec.name}
                </h3>
                
                <p className="text-sm text-blue-800/80 leading-relaxed mb-6 group-hover:text-blue-900 transition-colors duration-300">
                  {spec.description}
                </p>

                {/* الميزات */}
                <div className="space-y-2">
                  {spec.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-blue-700">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* زاوية زخرفية */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-400/20 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/20 rounded-bl-2xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم الرؤية والرسالة */}
        <div id="vision" className="text-center mb-24 fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-blue-100 to-white p-3 rounded-3xl shadow-2xl">
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-6 rounded-2xl group">
                <Eye className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            {/* تأثيرات حول الأيقونة */}
            <div className="absolute -inset-4 border-2 border-blue-400/20 rounded-full animate-ping-slow"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent">
              الرؤية والرسالة
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-blue-700/60 mt-2 block">Vision & Mission</span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 mx-auto mb-12 rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* بطاقة الرؤية */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border border-white/40 transform transition-all duration-500 hover:scale-[1.03] hover:shadow-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-inner">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">الرؤية / Vision</h3>
              </div>
              
              <p className="text-lg text-blue-800 leading-relaxed text-right">
                جيل عربي متمكن بالعلم والمعرفة، مستعد لمواكبة تحديات العصر الرقمي.
              </p>
              <p className="text-lg text-blue-700/70 leading-relaxed text-right mt-4 border-t border-blue-200 pt-4">
                <span className="text-blue-600 font-medium">An empowered Arab generation</span> with science and knowledge, ready to keep pace with the challenges of the digital age.
              </p>
            </div>
            
            {/* بطاقة الرسالة */}
            <div className="group relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-3xl p-8 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-[1.03] hover:shadow-3xl overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-12 translate-y-12"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">الرسالة / Mission</h3>
              </div>
              
              <p className="text-lg text-white leading-relaxed text-right">
                تقديم رحلة تعليمية تفاعلية متكاملة لطلبة المدارس والجامعات باستخدام أحدث التقنيات والذكاء الاصطناعي.
              </p>
              <p className="text-lg text-white/90 leading-relaxed text-right mt-4 border-t border-white/20 pt-4">
                <span className="font-semibold">Providing an integrated interactive educational journey</span> for school and university students using the latest technologies and artificial intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* إنجازات جو أكاديمي */}
        <div id="achievements" className="text-center mb-24 fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-100 p-4 rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl">
                <Award className="w-20 h-20 text-white animate-bounce-slow" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent">
              إنجازات جو أكاديمي
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-blue-700/60 mt-2 block">JO Academy Achievements</span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 mx-auto mb-12 rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* تأثير خلفي متحرك */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-blue-500/0 to-blue-600/0 group-hover:from-blue-400/5 group-hover:via-blue-500/5 group-hover:to-blue-600/5 transition-all duration-500"></div>
                
                {/* الأيقونة */}
                <div className="relative w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600">
                    {achievement.icon}
                  </div>
                </div>
                
                {/* الرقم */}
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                
                {/* النص */}
                <div className="text-xs md:text-sm text-blue-800 font-medium group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {achievement.label}
                </div>
                
                {/* خط متحرك في الأسفل */}
                <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* قصص النجاح */}
        <div id="success-stories" className="text-center mb-24 fade-in">
          <div className="relative mb-10">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-full blur-2xl"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black relative z-10">
              <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 bg-clip-text text-transparent">
                قصص النجاح
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-blue-700/60 mt-2 block">Success Stories</span>
            </h2>
          </div>
          
          <div className="w-48 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* صورة رمزية */}
                <div className="relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {story.name.charAt(0)}
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {story.name}
                </h3>
                
                <div className="text-blue-600 font-semibold mb-4">
                  {story.achievement}
                </div>
                
                <p className="text-blue-800/80 leading-relaxed text-right italic border-t border-blue-100 pt-4">
                  "{story.quote}"
                </p>
                
                {/* علامات اقتباس زخرفية */}
                <div className="absolute top-4 right-4 text-3xl text-blue-300">"</div>
                <div className="absolute bottom-4 left-4 text-3xl text-blue-300 transform rotate-180">"</div>
              </div>
            ))}
          </div>
        </div>

        {/* فريق العمل */}
        <div id="team" className="text-center mb-20 fade-in">
          <div className="relative mb-10">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-full blur-2xl"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black relative z-10">
              <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 bg-clip-text text-transparent">
                فريق العمل
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-blue-700/60 mt-2 block">Our Team</span>
            </h2>
          </div>
          
          <div className="w-48 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/40 transform transition-all duration-500 hover:shadow-3xl overflow-hidden">
            {/* تأثيرات خلفية */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {/* الأستاذ حمزة */}
                <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl overflow-hidden">
                  <div className="flex flex-col items-center">
                    {/* أيقونة */}
                    <div className="relative w-24 h-24 mb-6 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    
                    <div className="text-center">
                      <p className="font-bold text-blue-900 text-lg mb-2">بإدارة الأستاذ</p>
                      <p className="text-sm text-blue-700/70 mb-4">Guided by Instructor</p>
                      <p className="text-xl text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                        حمزة المناصير
                      </p>
                      <p className="text-blue-700/70 text-sm mt-1">
                        Hamzeh Al-Manaseer
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* المطور عبد الملك */}
                <div className="group relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-2xl p-8 shadow-xl border border-white/20 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl overflow-hidden">
                  <div className="flex flex-col items-center">
                    {/* أيقونة */}
                    <div className="relative w-24 h-24 mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-12 h-12 text-white" />
                    </div>
                    
                    <div className="text-center">
                      <p className="font-bold text-white text-lg mb-2">تطوير وتنسيق</p>
                      <p className="text-sm text-white/80 mb-4">Website Design and Coordination</p>
                      <p className="text-xl text-white font-semibold group-hover:text-white/90 transition-colors duration-300">
                        عبد الملك أحمد نعيم
                      </p>
                      <p className="text-white/80 text-sm mt-1">
                        Abdul Malik Ahmad Naeem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* رسالة شكر */}
              <div className="mt-12 pt-8 border-t border-blue-200">
                <p className="text-lg text-blue-800 leading-relaxed text-center">
                  نقدم لكم منصة جو أكاديمي التعليمية، جيل عربي متمكن بالعلم والمعرفة
                </p>
                <p className="text-blue-600 font-medium mt-2 text-center">
                  We present to you JO Academy educational platform, an empowered Arab generation with science and knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* الفوتر */}
        <footer className="text-center py-10 border-t border-blue-200/50 mt-16 fade-in">
          <div className="relative">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-400/5 to-blue-500/5 rounded-full blur-xl"></div>
            </div>
            
            <p className="text-base text-blue-800 font-medium relative z-10">
              جميع الحقوق محفوظة © جو أكاديمي JO ACADEMY 2025
              <br />
              <span className="text-blue-600 text-sm mt-2 block">
                All rights reserved © JO ACADEMY 2025
              </span>
            </p>
            
            {/* نقاط زخرفية */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </footer>
      </div>

      {/* تأثيرات CSS مخصصة */}
      <style>
        {`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .sticky {
            position: relative;
            top: 0;
          }
        }
        `}
      </style>
    </section>
  );
};

export default AboutSection;