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
  fullName: "أحمد  أحمد يوسف المناصير", // تم تغيير الاسم إلى أحمد
  specialization: "تكنولوجيا المعلومات", // تم تغيير التخصص إلى IT
  subjects: ["التربية الإسلامي", "اللغة العربية", "تكنولوجيا المعلومات", "التاريخ"], // عدل المادة بدل إدارة أعمال
  grade: "الصف الثاني عشر",
  gpa: 3.8,
  attendanceRate: 92,
  parentName: "أحمد يوسف المناصير",
  parentPhone: "+962795123456",
  parentEmail: "ahmed.almanaseer@gmail.com",
  avatar: "https://i.pinimg.com/736x/60/a1/71/60a1719d559469dbb6bfa1b6d0890e5e.jpg",
  teachers: [
    { 
      name: "حمزة المناصير", 
      email: "hamzeh@school.edu.jo",
      avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      status: 'online',
      subject: "إدارة اعمال "
    },
    { 
      name: "نسيم", 
      email: "nsem@school.edu.jo",
      avatar: "https://i.pinimg.com/736x/c6/f7/c8/c6f7c8f7e8d9b8c6f7c8d9e8f7c6d9e8.jpg",
      status: 'away',
      subject: "التاريخ"
    },
    { 
      name: "محمود الخواجه ", 
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
    { id: 2, text: "تأخر في تسليم  الواجب ", date: "2024-03-08", category: 'academic' },
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
    content: "السلام عليكم أستاذ أحمد، أود إعلامكم أن ابنكم إبراهيم يُظهر تقدماً ممتازاً في مادة الرياضيات. حصل على 98% في الامتحان الأخير.", 
    timestamp: new Date(Date.now() - 7200000),
    status: 'read'
  },
  { 
    id: 2, 
    sender: "parent", 
    content: "وعليكم السلام أستاذ حمزة، الحمد لله هذا يسعدني كثيراً. شكراً لجهودكم معه.", 
    timestamp: new Date(Date.now() - 6000000),
    status: 'read'
  },
  { 
    id: 3, 
    sender: "teacher", 
    content: "أود أيضاً أن أنبهكم إلى أن هناك مشروع فيزياء مطلوب تسليمه الأسبوع القادم، وقد لاحظت أن إبراهيم يحتاج بعض المساعدة فيه.", 
    timestamp: new Date(Date.now() - 3600000),
    status: 'read'
  },
  { 
    id: 4, 
    sender: "parent", 
    content: "شكراً على التنبيه. سأتابع معه هذا الموضوع في المنزل وأتأكد من إنجازه في الوقت المحدد.", 
    timestamp: new Date(Date.now() - 1800000),
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
const StatsCard: React.FC<{ title: string; value: string | number; icon: string }> = 
({ title, value, icon }) => (
  <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-3xl font-bold text-amber-900 mb-1">{value}</div>
        <div className="text-amber-800 text-sm font-medium">{title}</div>
      </div>
      <div className="text-4xl opacity-80">{icon}</div>
    </div>
  </div>
);

// Profile Header Component
const ProfileHeader: React.FC<{ student: Student }> = ({ student }) => {
  const stats = [
    { title: "المعدل التراكمي", value: student.gpa?.toFixed(2) || "N/A", icon: "🎯" },
    { title: "نسبة الحضور", value: `${student.attendanceRate}%`, icon: "📅" },
    { title: "عدد المواد", value: student.subjects.length, icon: "📚" },
    { title: "الملاحظات الإيجابية", value: student.notesPositive.length, icon: "⭐" },
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl mb-8 border border-amber-100">
      {/* Parent Info Section */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8 border border-amber-200">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-amber-900 mb-2">مرحباً بك في لوحة تحكم ولي الأمر</h1>
          <div className="text-amber-800">
            <p className="text-lg font-medium mb-1">👨‍💼 {student.parentName}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span>📱 {student.parentPhone}</span>
              <span>📧 {student.parentEmail}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Student Info */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="relative">
          <img
            src={student.avatar || "/api/placeholder/120/120"}
            alt={student.fullName}
            className="w-32 h-32 rounded-full border-4 border-amber-200 shadow-xl object-cover"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
            <span className="text-white text-xs">✓</span>
          </div>
        </div>
        
        <div className="text-center md:text-right flex-1">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">👦 {student.fullName}</h2>
          <div className="space-y-2 text-gray-700">
            <p className="text-lg">🎓 {student.specialization} - {student.grade}</p>
            <p className="text-base">🆔 الرقم الوطني: {student.nationalId}</p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {student.subjects.map((subject, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-800 border border-amber-200"
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
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
    <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
      <span className="text-2xl">👩‍🏫</span>
      المدرسون
    </h2>
    
    <div className="grid gap-4">
      {teachers.map((teacher, index) => (
        <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 hover:shadow-md transition-all duration-300">
          <div className="relative">
            <img
              src={teacher.avatar || "/api/placeholder/50/50"}
              alt={teacher.name}
              className="w-12 h-12 rounded-full border-2 border-amber-200"
            />
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              teacher.status === 'online' ? 'bg-green-500' : 
              teacher.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
            }`}></div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{teacher.name}</h3>
            <p className="text-sm text-amber-800">{teacher.subject}</p>
            <p className="text-xs text-gray-600">{teacher.email}</p>
          </div>
          <div className="text-right">
            <span className={`text-xs px-2 py-1 rounded-full ${
              teacher.status === 'online' ? 'bg-green-100 text-green-800' :
              teacher.status === 'away' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-600'
            }`}>
              {teacher.status === 'online' ? 'متاح' : 
               teacher.status === 'away' ? 'مشغول' : 'غير متاح'}
            </span>
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
    ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-200 text-green-800'
    : 'bg-gradient-to-r from-red-100 to-rose-100 border-red-200 text-red-800';
    
  const headerColor = type === 'positive' ? 'text-green-700' : 'text-red-700';
  const icon = type === 'positive' ? '✅' : '⚠️';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
      <h2 className={`font-bold text-xl mb-6 flex items-center gap-3 ${headerColor}`}>
        <span className="text-2xl">{icon}</span>
        {title}
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200">
          {notes.length}
        </span>
      </h2>
      
      <div className="space-y-4">
        {displayNotes.map((note) => (
          <div key={note.id} className={`p-4 rounded-xl border-r-4 ${colorClasses} shadow-sm`}>
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">{getCategoryIcon(note.category)}</span>
              <div className="flex-1">
                <p className="font-medium mb-2 leading-relaxed">{note.text}</p>
                <div className="flex items-center gap-2 text-sm opacity-75">
                  <span>📅 {note.date}</span>
                  {note.category && (
                    <>
                      <span>•</span>
                      <span className="capitalize font-medium">
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
            className="w-full mt-4 py-2 text-amber-800 border border-amber-300 rounded-lg hover:bg-amber-50 transition-colors font-medium"
          >
            {showAll ? 'إخفاء التفاصيل' : `عرض جميع الملاحظات (${notes.length - 3} أخرى)`}
          </button>
        )}
      </div>
    </div>
  );
};

// Links Section Component
const LinksSection: React.FC<{ links: FileLink[] }> = ({ links }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
    <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
      <span className="text-2xl">📂</span>
      الملفات والروابط
    </h2>
    <div className="space-y-3">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 hover:shadow-md transition-all"
        >
          <span className="text-xl">{getFileIcon(link.type)}</span>
          <div className="flex-1">
            <p className="font-medium text-gray-800">{link.title}</p>
            {link.size && <p className="text-sm text-gray-600">{link.size}</p>}
          </div>
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
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };



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

    // بعد ثانية واحدة تصبح "delivered"
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === newMsg.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 1000);

    // بعد 3 ثوانٍ تصبح "read"
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === newMsg.id ? { ...msg, status: 'read' } : msg
        )
      );
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
        <span className="text-2xl">💬</span>
        المحادثات مع المدرسين
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Teacher List */}
        <div className="w-full md:w-1/3 space-y-3">
          {teachers.map((teacher) => (
            <button
              key={teacher.email}
              onClick={() => setSelectedTeacher(teacher)}
              className={`flex items-center gap-3 p-3 rounded-xl border ${
                selectedTeacher?.email === teacher.email
                  ? "border-amber-400 bg-amber-50"
                  : "border-amber-200 hover:bg-amber-50"
              } transition-all w-full`}
            >
              <img
                src={teacher.avatar || "/api/placeholder/50/50"}
                alt={teacher.name}
                className="w-10 h-10 rounded-full border-2 border-amber-200"
              />
              <div className="text-right flex-1">
                <p className="font-semibold">{teacher.name}</p>
                <p className="text-sm text-gray-600">{teacher.subject}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-amber-50 rounded-xl border border-amber-200 p-4">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "parent" ? "justify-end" : "justify-start"}`}
              >
                <div className={`p-3 rounded-xl max-w-xs ${msg.sender === "parent" ? "bg-amber-100 text-amber-900" : "bg-white text-gray-800 border border-amber-200"}`}>
                  <p>{msg.content}</p>
                  <div className="text-xs mt-1 text-right opacity-70">
                    {formatTimestamp(msg.timestamp)} {msg.sender === 'parent' && msg.status ? `• ${msg.status}` : ''}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="اكتب رسالة..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSendMessage(); }}
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white rounded-xl transition-colors font-semibold"
            >
              إرسال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- Main Parent Dashboard ----------
const ParentDashboard: React.FC = () => (
  <div className="min-h-screen bg-gray-50 p-6 md:p-12 space-y-8">
    <ProfileHeader student={student} />
    <TeachersSection teachers={student.teachers} />
    <div className="grid lg:grid-cols-2 gap-6">
      <NotesSection title="الملاحظات الإيجابية" notes={student.notesPositive} type="positive" />
      <NotesSection title="الملاحظات السلبية" notes={student.notesNegative} type="negative" />
    </div>
    <LinksSection links={student.links} />
    <ChatSection teachers={student.teachers} />
  </div>
);

export default ParentDashboard;
