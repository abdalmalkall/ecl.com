import React, { useState, useRef, useEffect } from "react";

// ---------- Types ----------
interface Note {
  id: number;
  text: string;
  date?: string;
  category?: 'academic' | 'behavior' | 'participation';
}

interface Message {
  id: number;
  sender: "parent" | "teacher";
  content: string;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

interface Teacher {
  name: string;
  email: string;
  avatar?: string;
  status?: 'online' | 'offline' | 'away';
  subject?: string;
}

interface FileLink {
  id: number;
  title: string;
  url: string;
  type?: 'document' | 'video' | 'image' | 'link';
  size?: string;
}

interface Student {
  nationalId: string;
  fullName: string;
  specialization: string;
  subjects: string[];
  teachers: Teacher[];
  notesPositive: Note[];
  notesNegative: Note[];
  links: FileLink[];
  avatar?: string;
  grade?: string;
  gpa?: number;
  attendanceRate?: number;
  parentName?: string;
  parentPhone?: string;
  parentEmail?: string;
}

// ---------- Sample Data ----------
const student: Student = {
  nationalId: "200512345678",
  fullName: "عبد الملك أحمد نعيم ", // تم تعديل الاسم هنا
  specialization: "إدارة أعمال",
  subjects: ["التربية الإسلامي", "اللغة العربية", " إدارة أعمال", "التاريخ"],
  grade: "الصف الثاني عشر",
  gpa: 3.8,
  attendanceRate: 92,
  parentName: "عبد الملك نعيم  ",
  parentPhone: "+962795123456",
  parentEmail: "ahmed.almanaseer@gmail.com",
  avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg  ",
  teachers: [
    { 
      name: "حمزة المناصير", 
      email: "hamzeh@school.edu.jo",
      avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      status: 'online',
      subject: "إدارة أعمال"
    },
    { 
      name: "نسيم", 
      email: "nsem@school.edu.jo",
      avatar: "https://i.pinimg.com/736x/c6/f7/c8/c6f7c8f7e8d9b8c6f7c8d9e8f7c6d9e8.jpg",
      status: 'away',
      subject: "التاريخ"
    },
    { 
      name: "محمود الخواجه", 
      email: "mohammOed@school.edu.jo",
      avatar: "https://i.pinimg.com/736x/d9/e8/f7/d9e8f7c6b8a7d9e8f7c6b8a7d9e8f7c6.jpg",
      status: 'offline',
      subject: "حاسوب"
    }
  ],
  notesPositive: [
    { id: 1, text: "متفوق في الرياضيات والعلوم بشكل استثنائي", date: "2024-03-15", category: 'academic' },
    { id: 2, text: "ملتزم بالحضور اليومي بنسبة عالية جداً", date: "2024-03-14", category: 'behavior' },
    { id: 3, text: "يشارك بفعالية في الأنشطة المدرسية والثقافية", date: "2024-03-13", category: 'participation' },
    { id: 4, text: "يساعد زملاءه في فهم الدروس الصعبة", date: "2024-03-12", category: 'behavior' },
    { id: 5, text: "أظهر تحسناً ملحوظاً في مادة الكيمياء", date: "2024-03-11", category: 'academic' },
    { id: 6, text: "حصل على المركز الأول في مسابقة الرياضيات", date: "2024-03-10", category: 'academic' },
  ],
  notesNegative: [
    { id: 1, text: "يحتاج لتحسين إدارة الوقت", date: "2024-03-10", category: 'academic' },
    { id: 2, text: "تأخر في تسليم الواجب", date: "2024-03-08", category: 'academic' },
    { id: 3, text: "يحتاج للتركيز أكثر أثناء الحصص", date: "2024-03-05", category: 'behavior' },
  ],
  links: [
    { id: 1, title: "دليل الطالب الأكاديمي الشامل", url: "https://example.com/guide", type: 'document', size: "2.5 MB" },
    { id: 2, title: "مشروع العلوم - العرض التقديمي", url: "https://example.com/presentation", type: 'document', size: "1.8 MB" },
    { id: 3, title: "فيديو شرح الرياضيات المتقدمة", url: "https://example.com/video", type: 'video', size: "45 MB" },
    { id: 4, title: "معرض صور الرحلة العلمية", url: "https://example.com/photos", type: 'image', size: "12 MB" },
    { id: 5, title: "كتاب الكيمياء التفاعلي", url: "https://example.com/chemistry", type: 'document', size: "8.2 MB" },
    { id: 6, title: "واجبات الأسبوع القادم", url: "https://example.com/homework", type: 'document', size: "1.2 MB" },
  ],
};

// ---------- Initial Messages ----------
const initialMessages: Message[] = [
  { 
    id: 1, 
    sender: "teacher", 
    content: "السلام عليكم أستاذ أحمد، أود إعلامكم أن ابنكم عبد الملك يُظهر تقدماً ممتازاً في مادة الرياضيات. حصل على 98% في الامتحان الأخير.", // تم تعديل الاسم هنا
    timestamp: new Date(Date.now() - 7200000),
    status: 'read'
  },
  { 
    id: 2, 
    sender: "parent", 
    content: "وعليكم السلام أستاذ حمزة، الحمد لله هذا يسعدني كثيراً. شكراً لجهودكم مع عبد الملك.", // تم تعديل الاسم هنا
    timestamp: new Date(Date.now() - 6000000),
    status: 'read'
  },
  { 
    id: 3, 
    sender: "teacher", 
    content: "أود أيضاً أن أنبهكم إلى أن هناك مشروع فيزياء مطلوب تسليمه الأسبوع القادم، وقد لاحظت أن عبد الملك يحتاج بعض المساعدة فيه.", // تم تعديل الاسم هنا
    timestamp: new Date(Date.now() - 3600000),
    status: 'read'
  },
  { 
    id: 4, 
    sender: "parent", 
    content: "شكراً على التنبيه. سأتابع مع عبد الملك هذا الموضوع في المنزل وأتأكد من إنجازه في الوقت المحدد.", // تم تعديل الاسم هنا
    timestamp: new Date(Date.now() - 1800000),
    status: 'delivered'
  },
  { 
    id: 5, 
    sender: "teacher", 
    content: "أريد أن أبلغكم أن عبد الملك حقق تقدماً ملحوظاً في سلوكه داخل الصف وأصبح أكثر انضباطاً.", // تم تعديل الاسم هنا
    timestamp: new Date(Date.now() - 900000),
    status: 'read'
  },
  { 
    id: 6, 
    sender: "parent", 
    content: "الحمد لله، هذا خبر سار. نحن أيضاً لاحظنا تحسناً في سلوكه في المنزل.", // تم تعديل الاسم هنا
    timestamp: new Date(Date.now() - 300000),
    status: 'delivered'
  },
];

// ---------- Utility Functions ----------
const getCategoryIcon = (category?: string): string => {
  switch (category) {
    case 'academic': return '📚';
    case 'behavior': return '👤';
    case 'participation': return '🤝';
    default: return '📝';
  }
};

const getFileIcon = (type?: string): string => {
  switch (type) {
    case 'document': return '📄';
    case 'video': return '🎥';
    case 'image': return '🖼️';
    case 'link': return '🔗';
    default: return '📎';
  }
};

const formatTimestamp = (timestamp: Date): string => {
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  
  if (hours > 24) {
    return timestamp.toLocaleDateString('ar-SA');
  } else if (hours > 0) {
    return `منذ ${hours} ساعة`;
  } else if (minutes > 0) {
    return `منذ ${minutes} دقيقة`;
  } else {
    return 'الآن';
  }
};

// ---------- Components ----------

// Stats Card Component
const StatsCard: React.FC<{ 
  title: string; 
  value: string | number; 
  icon: string; 
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
}> = ({ title, value, icon, trend, trendValue }) => (
  <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200 group">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-3xl font-bold text-amber-900 mb-1">{value}</div>
        <div className="text-amber-800 text-sm font-medium">{title}</div>
        {trend && trendValue && (
          <div className={`flex items-center gap-1 mt-2 text-xs ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
            {trend === 'up' ? '↗️' : trend === 'down' ? '↘️' : '➡️'}
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    </div>
  </div>
);

// Profile Header Component
const ProfileHeader: React.FC<{ student: Student }> = ({ student }) => {
  const stats = [
    { 
      title: "التقييم العام", 
      value: "9.5", 
      icon: "🎯", 
      trend: 'up' as const,
      trendValue: "+0.5 من الشهر الماضي"
    },
    { 
      title: "نسبة الحضور", 
      value: `${student.attendanceRate}%`, 
      icon: "📅",
      trend: 'stable' as const,
      trendValue: "مستقر"
    },
    { 
      title: "عدد المواد", 
      value: student.subjects.length, 
      icon: "📚",
      trend: 'stable' as const,
      trendValue: "لا تغيير"
    },
    { 
      title: "الملاحظات الإيجابية", 
      value: student.notesPositive.length, 
      icon: "⭐",
      trend: 'up' as const,
      trendValue: `+${student.notesPositive.length - 3} من البداية`
    },
  ];

  return (
    <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 p-8 rounded-3xl shadow-xl mb-8 border border-amber-200">
      {/* Parent Info Section */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-200 p-6 rounded-2xl mb-8 border border-amber-300 shadow-lg">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-amber-900 mb-2">مرحباً بك في لوحة تحكم ولي الأمر</h1>
          <div className="text-amber-800">
            <p className="text-lg font-medium mb-1">👨‍💼 {student.parentName}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mt-2">
              <span className="flex items-center gap-1">
                <span className="text-amber-700">📱</span>
                {student.parentPhone}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-amber-700">📧</span>
                {student.parentEmail}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Student Info */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="relative">
          <div className="p-1 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full shadow-lg">
            <img
              src={student.avatar || "/api/placeholder/120/120"}
              alt={student.fullName}
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
            <span className="text-white text-sm">⭐</span>
          </div>
        </div>
        
        <div className="text-center md:text-right flex-1">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            <span className="text-amber-600">👦</span> {student.fullName}
          </h2>
          <div className="space-y-3 text-gray-700 mb-6">
            <p className="text-lg bg-gradient-to-r from-amber-100 to-orange-100 inline-block px-4 py-2 rounded-full">
              🎓 {student.specialization} - {student.grade}
            </p>
            <p className="text-base bg-gradient-to-r from-blue-50 to-blue-100 inline-block px-4 py-2 rounded-full">
              🆔 الرقم الوطني: {student.nationalId}
            </p>
           
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {student.subjects.map((subject, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-800 border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

// Teachers Section Component
const TeachersSection: React.FC<{ teachers: Teacher[] }> = ({ teachers }) => (
  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
    <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-amber-900">
      <span className="text-2xl">👩‍🏫</span>
      المدرسون
      <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200">
        {teachers.length}
      </span>
    </h2>
    
    <div className="grid md:grid-cols-3 gap-4">
      {teachers.map((teacher, index) => (
        <div key={index} className="bg-white p-4 rounded-xl border border-amber-200 hover:shadow-md transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={teacher.avatar || "/api/placeholder/50/50"}
                alt={teacher.name}
                className="w-14 h-14 rounded-full border-2 border-amber-200 shadow-sm"
              />
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                teacher.status === 'online' ? 'bg-green-500' : 
                teacher.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
              }`}></div>
            </div>
            <div className="flex-1 text-right">
              <h3 className="font-semibold text-gray-800">{teacher.name}</h3>
              <p className="text-sm text-amber-700 font-medium">{teacher.subject}</p>
              <p className="text-xs text-gray-600 truncate">{teacher.email}</p>
              <div className="mt-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  teacher.status === 'online' ? 'bg-green-100 text-green-800' :
                  teacher.status === 'away' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {teacher.status === 'online' ? '🟢 متاح' : 
                   teacher.status === 'away' ? '🟡 مشغول' : '⚫ غير متاح'}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Notes Section Component
const NotesSection: React.FC<{ 
  title: string; 
  notes: Note[]; 
  type: 'positive' | 'negative';
}> = ({ title, notes, type }) => {
  const [showAll, setShowAll] = useState(false);
  const displayNotes = showAll ? notes : notes.slice(0, 3);
  
  const colorClasses = type === 'positive' 
    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-300 text-green-800 hover:shadow-md'
    : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-300 text-red-800 hover:shadow-md';
    
  const headerColor = type === 'positive' ? 'text-green-700' : 'text-red-700';
  const icon = type === 'positive' ? '✅' : '⚠️';

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
      <h2 className={`font-bold text-xl mb-6 flex items-center gap-3 ${headerColor}`}>
        <span className="text-2xl">{icon}</span>
        {title}
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200">
          {notes.length}
        </span>
      </h2>
      
      <div className="space-y-4">
        {displayNotes.map((note) => (
          <div key={note.id} className={`p-4 rounded-xl border-l-4 ${colorClasses} shadow-sm hover:scale-105 transition-all duration-300`}>
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">{getCategoryIcon(note.category)}</span>
              <div className="flex-1">
                <p className="font-medium mb-2 leading-relaxed">{note.text}</p>
                <div className="flex items-center gap-2 text-sm opacity-75 mt-2">
                  <span className="flex items-center gap-1">
                    <span>📅</span>
                    <span>{note.date}</span>
                  </span>
                  {note.category && (
                    <>
                      <span>•</span>
                      <span className="capitalize font-medium px-2 py-1 rounded-full bg-white/50">
                        {note.category === 'academic' ? 'أكاديمي' :
                         note.category === 'behavior' ? 'سلوكي' : 'مشاركة'}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {notes.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full mt-4 py-3 text-amber-800 border border-amber-300 rounded-xl hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 transition-all duration-300 font-medium flex items-center justify-center gap-2"
          >
            {showAll ? (
              <>
                <span>⬆️</span>
                <span>إخفاء التفاصيل</span>
              </>
            ) : (
              <>
                <span>⬇️</span>
                <span>عرض جميع الملاحظات ({notes.length - 3} أخرى)</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

// Links Section Component
const LinksSection: React.FC<{ links: FileLink[] }> = ({ links }) => (
  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
    <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-amber-900">
      <span className="text-2xl">📂</span>
      الملفات والروابط التعليمية
      <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200">
        {links.length}
      </span>
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-amber-200 bg-gradient-to-r from-white to-amber-50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
        >
          <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
            {getFileIcon(link.type)}
          </span>
          <div className="flex-1 text-right">
            <p className="font-medium text-gray-800 group-hover:text-amber-700 transition-colors">{link.title}</p>
            {link.size && (
              <p className="text-sm text-gray-600 mt-1">
                {link.size} • {link.type === 'document' ? 'وثيقة' : 
                               link.type === 'video' ? 'فيديو' : 
                               link.type === 'image' ? 'صورة' : 'رابط'}
              </p>
            )}
          </div>
          <span className="text-gray-400 group-hover:text-amber-600 transition-colors">↗️</span>
        </a>
      ))}
    </div>
  </div>
);

// Chat Section Component
const ChatSection: React.FC<{ teachers: Teacher[] }> = ({ teachers }) => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(teachers[0] || null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (): void => {
    if (newMessage.trim() === "" || !selectedTeacher) return;

    const newMsg: Message = {
      id: messages.length + 1,
      sender: "parent",
      content: newMessage.trim(),
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage("");
    setIsTyping(false);

    // محاكاة تلقي المعلم للرسالة بعد ثانيتين
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === newMsg.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 2000);

    // محاكاة قراءة المعلم للرسالة بعد 5 ثوانٍ
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === newMsg.id ? { ...msg, status: 'read' } : msg
        )
      );

      // محاكاة رد المعلم التلقائي بعد 7 ثوانٍ
      setTimeout(() => {
        const teacherReply: Message = {
          id: messages.length + 2,
          sender: "teacher",
          content: "شكراً لك على تواصلك. سأتابع مع عبد الملك هذا الموضوع وأبلغك بالتطورات.",
          timestamp: new Date(),
          status: 'sent'
        };
        setMessages(prev => [...prev, teacherReply]);
      }, 7000);
    }, 5000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-amber-900">
        <span className="text-2xl">💬</span>
        المحادثات مع المدرسين
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200">
          {messages.length}
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Teacher List */}
        <div className="lg:w-1/3">
          <div className="space-y-3">
            {teachers.map((teacher) => (
              <button
                key={teacher.email}
                onClick={() => setSelectedTeacher(teacher)}
                className={`flex items-center gap-4 p-4 rounded-xl border w-full text-right transition-all duration-300 ${
                  selectedTeacher?.email === teacher.email
                    ? "border-amber-400 bg-gradient-to-r from-amber-100 to-orange-100 shadow-md"
                    : "border-amber-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:shadow-sm"
                }`}
              >
                <div className="relative">
                  <img
                    src={teacher.avatar || "/api/placeholder/50/50"}
                    alt={teacher.name}
                    className="w-12 h-12 rounded-full border-2 border-amber-200 shadow-sm"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                    teacher.status === 'online' ? 'bg-green-500' : 
                    teacher.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{teacher.name}</h3>
                  <p className="text-sm text-amber-700 font-medium">{teacher.subject}</p>
                  <p className="text-xs text-gray-600 truncate">{teacher.email}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-gradient-to-b from-white to-amber-50 rounded-xl border border-amber-200 shadow-inner overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-4 border-b border-amber-300">
            <div className="flex items-center gap-4">
              {selectedTeacher && (
                <>
                  <img
                    src={selectedTeacher.avatar || "/api/placeholder/50/50"}
                    alt={selectedTeacher.name}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div className="flex-1 text-right">
                    <h3 className="font-bold text-gray-800">{selectedTeacher.name}</h3>
                    <p className="text-sm text-amber-800">{selectedTeacher.subject}</p>
                    <p className="text-xs text-gray-700">
                      {selectedTeacher.status === 'online' ? '🟢 متصل الآن' : 
                       selectedTeacher.status === 'away' ? '🟡 مشغول' : '⚫ غير متصل'}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
            {messages.filter(msg => 
              msg.sender === 'parent' || selectedTeacher?.name.includes('حمزة')
            ).map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "parent" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                  msg.sender === "parent" 
                    ? "bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 rounded-br-none" 
                    : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-bl-none"
                }`}>
                  <p className="text-sm leading-relaxed font-medium">{msg.content}</p>
                  <div className={`flex justify-between items-center text-xs mt-2 ${
                    msg.sender === "parent" ? "text-amber-700" : "text-gray-600"
                  }`}>
                    <span>{formatTimestamp(msg.timestamp)}</span>
                    {msg.sender === 'parent' && msg.status && (
                      <span className="flex items-center gap-1">
                        {msg.status === 'sent' && '⏳'}
                        {msg.status === 'delivered' && '✓'}
                        {msg.status === 'read' && '✓✓'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && selectedTeacher && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-3 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <div className="flex gap-3">
              <input
                type="text"
                className="flex-1 p-3 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-gray-800 placeholder-amber-600"
                placeholder="اكتب رسالتك هنا..."
                value={newMessage}
                onChange={(e) => {
                  setNewMessage(e.target.value);
                  setIsTyping(e.target.value.length > 0);
                }}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                إرسال
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- Main Parent Dashboard ----------
const ParentDashboard: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6 md:p-8 space-y-8">
    <ProfileHeader student={student} />
    <TeachersSection teachers={student.teachers} />
    <div className="grid lg:grid-cols-2 gap-8">
      <NotesSection title="الملاحظات الإيجابية والإنجازات" notes={student.notesPositive} type="positive" />
      <NotesSection title="نقاط التحسين والتطوير" notes={student.notesNegative} type="negative" />
    </div>
    <LinksSection links={student.links} />
    <ChatSection teachers={student.teachers} />
    
    {/* Quick Stats Footer */}
    <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-2xl shadow-lg border border-amber-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4">
          <div className="text-3xl font-bold text-amber-900 mb-2">7</div>
          <div className="text-amber-800 text-sm font-medium">رسائل غير مقروءة</div>
        </div>
        <div className="text-center p-4">
          <div className="text-3xl font-bold text-amber-900 mb-2">3</div>
          <div className="text-amber-800 text-sm font-medium">واجبات قادمة</div>
        </div>
        <div className="text-center p-4">
          <div className="text-3xl font-bold text-amber-900 mb-2">14</div>
          <div className="text-amber-800 text-sm font-medium">يوم في المدرسة</div>
        </div>
        <div className="text-center p-4">
          <div className="text-3xl font-bold text-amber-900 mb-2">2</div>
          <div className="text-amber-800 text-sm font-medium">اجتماعات مقبلة</div>
        </div>
      </div>
    </div>
  </div>
);

export default ParentDashboard;