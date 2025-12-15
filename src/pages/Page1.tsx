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
  sender: "student" | "teacher";
  content: string;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

interface Teacher {
  name: string;
  email: string;
  avatar?: string;
  status?: 'online' | 'offline' | 'away';
}

interface FileLink {
  id: number;
  title: string;
  url: string;
  type?: 'document' | 'video' | 'image' | 'link';
  size?: string;
}

interface Meeting {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  platform: 'zoom' | 'google-meet' | 'microsoft-teams' | 'other';
  link: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  participants: string[];
}

interface Student {
  nationalId: string;
  username: string;
  fullName: string;
  specialization: string;
  subjects: string[];
  teacher: Teacher;
  notesPositive: Note[];
  notesNegative: Note[];
  links: FileLink[];
  meetings: Meeting[];
  avatar?: string;
  grade?: string;
  gpa?: number;
  attendanceRate?: number;
}

// ---------- Sample Data ----------
const student: Student = {
  nationalId: "200512345678",
  username: "abdalmalk123",
  fullName: "عبد الملك",
  specialization: "إدارة أعمال",
  subjects: ["دين", "عربي", "إدارة اعمال", "التربيه الاسلامية", "تاريخ"],
  grade: "الصف الثاني عشر",
  gpa: 3.8,
  attendanceRate: 92,
  avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
  teacher: {
    name: "حمزة المناصير",
    email: "hamzeh@school.edu.jo",
    avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    status: 'online'
  },
  notesPositive: [
    { id: 1, text: "متفوق في الرياضيات والعلوم بشكل استثنائي", date: "2024-03-15", category: 'academic' },
    { id: 2, text: "ملتزم بالحضور اليومي بنسبة عالية جداً", date: "2024-03-14", category: 'behavior' },
    { id: 3, text: "يشارك بفعالية في الأنشطة المدرسية والثقافية", date: "2024-03-13", category: 'participation' },
    { id: 4, text: "يساعد زملاءه في فهم الدروس الصعبة", date: "2024-03-12", category: 'behavior' },
    { id: 5, text: "أظهر تحسناً ملحوظاً في مادة إدارة الاعمال ", date: "2024-03-11", category: 'academic' },
  ],
  notesNegative: [
    { id: 1, text: "يحتاج لتحسين إدارة الوقت", date: "2024-03-10", category: 'academic' },
    { id: 2, text: "تأخر في تسليم الواجب ", date: "2024-03-08", category: 'academic' },
    { id: 3, text: "يحتاج للتركيز أكثر أثناء الحصص", date: "2024-03-05", category: 'behavior' },
  ],
  links: [
    { id: 1, title: "دليل الطالب الأكاديمي الشامل", url: "https://example.com/guide", type: 'document', size: "2.5 MB" },
    { id: 2, title: "مشروع العلوم - العرض التقديمي", url: "https://example.com/presentation", type: 'document', size: "1.8 MB" },
    { id: 3, title: "فيديو شرح الرياضيات المتقدمة", url: "https://example.com/video", type: 'video', size: "45 MB" },
    { id: 4, title: "معرض صور الرحلة العلمية", url: "https://example.com/photos", type: 'image', size: "12 MB" },
  ],
  meetings: [
    {
      id: 1,
      title: "مشروع التخرج - مناقشة الأفكار",
      description: "مناقشة أفكار مشروع التخرج النهائية وتوزيع المهام",
      date: "2024-03-20",
      time: "14:00",
      duration: "ساعة ونصف",
      platform: "zoom",
      link: "https://zoom.us/j/123456789",
      status: "upcoming",
      participants: ["د. أحمد", "د. محمد", "مشرف المشروع"]
    },
    {
      id: 2,
      title: "مراجعة مادة الرياضيات",
      description: "مراجعة شاملة للفصل الدراسي الثاني وحل نماذج الامتحانات",
      date: "2024-03-18",
      time: "10:00",
      duration: "ساعتين",
      platform: "google-meet",
      link: "https://meet.google.com/abc-defg-hij",
      status: "upcoming",
      participants: ["أ. خالد", "طالبان آخران"]
    },
    {
      id: 3,
      title: "اجتماع أولياء الأمور",
      description: "مناقشة مستوى الطالب وتقارير التقدم",
      date: "2024-03-15",
      time: "16:00",
      duration: "ساعة",
      platform: "microsoft-teams",
      link: "https://teams.microsoft.com/l/meetup-join",
      status: "completed",
      participants: ["الأب", "الأم", "المعلم", "مدير القسم"]
    },
    {
      id: 4,
      title: "ورشة مهارات البحث العلمي",
      description: "ورشة تدريبية حول منهجية البحث العلمي وكيفية كتابة الأوراق البحثية",
      date: "2024-03-22",
      time: "11:00",
      duration: "3 ساعات",
      platform: "zoom",
      link: "https://zoom.us/j/987654321",
      status: "upcoming",
      participants: ["د. سارة", "مجموعة البحث", "طلاب السنة الأخيرة"]
    }
  ]
};

// ---------- Initial Messages ----------
const initialMessages: Message[] = [
  {
    id: 1,
    sender: "teacher",
    content: "مرحباً عبدالملك! أود أن أهنئك على أدائك المتميز في امتحان الرياضيات الأخير. استمر في التفوق! 👏",
    timestamp: new Date(Date.now() - 3600000),
    status: 'read'
  },
  {
    id: 2,
    sender: "student",
    content: "شكراً لك أستاذ حمزة! سأبذل قصارى جهدي للحفاظ على هذا المستوى المتميز.",
    timestamp: new Date(Date.now() - 3000000),
    status: 'read'
  },
  {
    id: 3,
    sender: "teacher",
    content: "ممتاز! لا تنس أن مشروع الفيزياء مطلوب تسليمه الأسبوع القادم. هل تحتاج أي مساعدة أو توضيح؟",
    timestamp: new Date(Date.now() - 1800000),
    status: 'read'
  },
  {
    id: 4,
    sender: "student",
    content: "نعم أستاذ، أحتاج للمساعدة في الجزء المتعلق بالتجارب العملية. هل يمكن توضيحه أكثر؟",
    timestamp: new Date(Date.now() - 1200000),
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

const getPlatformIcon = (platform: string): string => {
  switch (platform) {
    case 'zoom': return '🎥';
    case 'google-meet': return '📹';
    case 'microsoft-teams': return '💼';
    default: return '🎤';
  }
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'ongoing': return 'bg-green-100 text-green-800 border-green-300';
    case 'completed': return 'bg-gray-100 text-gray-800 border-gray-300';
    case 'cancelled': return 'bg-red-100 text-red-800 border-red-300';
    default: return 'bg-gray-100 text-gray-800';
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

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ar-SA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// ---------- Components ----------

// Stats Card Component
const StatsCard: React.FC<{ title: string; value: string | number; icon: string; gradient: string }> =
  ({ title, value, icon, gradient }) => (
    <div className={`${gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200/30`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold text-amber-900 mb-1">{value}</div>
          <div className="text-amber-800 text-sm font-medium">{title}</div>
        </div>
        <div className="text-4xl opacity-80 filter drop-shadow-sm">{icon}</div>
      </div>
    </div>
  );

// Profile Header Component
const ProfileHeader: React.FC<{ student: Student }> = ({ student }) => {
  const stats = [
    { title: "تقيم الطالب ", value: "9.5", icon: "🎯", gradient: "bg-gradient-to-br from-amber-100 to-orange-200" },
    { title: "نسبة الحضور", value: `${student.attendanceRate}%`, icon: "📅", gradient: "bg-gradient-to-br from-yellow-100 to-amber-200" },
    { title: "عدد المواد", value: student.subjects.length, icon: "📚", gradient: "bg-gradient-to-br from-orange-100 to-yellow-200" },
    { title: "الاجتماعات القادمة", value: student.meetings.filter(m => m.status === 'upcoming').length, icon: "🎤", gradient: "bg-gradient-to-br from-amber-200 to-orange-100" },
  ];

  return (
    <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 p-8 rounded-3xl shadow-xl mb-8 border border-amber-200/50">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <div className="p-1 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full">
            <img
              src={student.avatar || "/api/placeholder/120/120"}
              alt={student.fullName}
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
            <span className="text-white text-xs">✓</span>
          </div>
        </div>

        <div className="text-center md:text-right flex-1">
          <h1 className="text-4xl font-bold mb-3 text-amber-900 drop-shadow-sm">{student.fullName}</h1>
          <div className="space-y-2 text-amber-800">
            <p className="text-lg font-medium">🎓 {student.specialization} - {student.grade}</p>
            <p className="text-base">👤 {student.username} | 🆔 {student.nationalId}</p>
            <p className="text-base">📧 البريد الإلكتروني: student@school.edu.jo</p>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {student.subjects.map((subject, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full text-sm font-medium text-amber-800 border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

// Notes Section Component
const NotesSection: React.FC<{
  title: string;
  notes: Note[];
  type: 'positive' | 'negative';
}> = ({ title, notes, type }) => {
  const colorClasses = type === 'positive'
    ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-300 text-green-800'
    : 'bg-gradient-to-r from-red-100 to-rose-100 border-red-300 text-red-800';

  const headerColor = type === 'positive' ? 'text-green-700' : 'text-red-700';
  const icon = type === 'positive' ? '✅' : '⚠️';

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50">
      <h2 className={`font-bold text-xl mb-6 flex items-center gap-3 ${headerColor}`}>
        <span className="text-2xl">{icon}</span>
        {title}
        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200`}>
          {notes.length}
        </span>
      </h2>

      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className={`p-4 rounded-xl border-r-4 ${colorClasses} shadow-sm hover:shadow-md transition-all duration-300`}>
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">{getCategoryIcon(note.category)}</span>
              <div className="flex-1">
                <p className="font-medium mb-2 leading-relaxed">{note.text}</p>
                <div className="flex items-center gap-2 text-sm opacity-75">
                  <span>📅 {note.date}</span>
                  {note.category && (
                    <>
                      <span>•</span>
                      <span className="capitalize font-medium">{note.category}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Meetings Section Component
const MeetingsSection: React.FC<{ meetings: Meeting[] }> = ({ meetings }) => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  
  const filteredMeetings = meetings.filter(meeting => {
    if (filter === 'all') return true;
    return meeting.status === filter;
  });

  const upcomingCount = meetings.filter(m => m.status === 'upcoming').length;
  const completedCount = meetings.filter(m => m.status === 'completed').length;

  const joinMeeting = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const addToCalendar = (meeting: Meeting) => {
    const event = {
      title: meeting.title,
      description: meeting.description,
      start: `${meeting.date}T${meeting.time}`,
      duration: meeting.duration
    };
    // In a real app, this would integrate with calendar APIs
    alert(`سيتم إضافة الاجتماع "${meeting.title}" إلى التقويم\nالتاريخ: ${meeting.date}\nالوقت: ${meeting.time}`);
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl font-bold flex items-center gap-3 text-amber-900">
          <span className="text-2xl">🎤</span>
          الاجتماعات الإلكترونية
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200">
            {meetings.length}
          </span>
        </h2>
        
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'all' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
          >
            الكل ({meetings.length})
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
          >
            القادمة ({upcomingCount})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'completed' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            المنتهية ({completedCount})
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredMeetings.length === 0 ? (
          <div className="text-center py-8 text-amber-700">
            <div className="text-4xl mb-4">📅</div>
            <p className="text-lg font-medium">لا توجد اجتماعات حالياً</p>
          </div>
        ) : (
          filteredMeetings.map((meeting) => (
            <div key={meeting.id} className={`p-4 rounded-xl border-l-4 ${getStatusColor(meeting.status)} shadow-sm hover:shadow-md transition-all duration-300`}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{getPlatformIcon(meeting.platform)}</span>
                    <h3 className="font-bold text-lg text-gray-900">{meeting.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(meeting.status)}`}>
                      {meeting.status === 'upcoming' ? 'قادم' : 
                       meeting.status === 'completed' ? 'منتهي' : 
                       meeting.status === 'ongoing' ? 'جاري الآن' : 'ملغي'}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{meeting.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{formatDate(meeting.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>⏰</span>
                      <span>{meeting.time} ({meeting.duration})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>👥</span>
                      <span>{meeting.participants.join('، ')}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  {meeting.status === 'upcoming' && (
                    <>
                      <button
                        onClick={() => addToCalendar(meeting)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-300 flex items-center justify-center gap-2"
                      >
                        <span>📅</span>
                        <span>إضافة للتقويم</span>
                      </button>
                      <button
                        onClick={() => joinMeeting(meeting.link)}
                        className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 border border-green-300 flex items-center justify-center gap-2"
                      >
                        <span>🎯</span>
                        <span>انضم الآن</span>
                      </button>
                    </>
                  )}
                  <a
                    href={meeting.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 border border-amber-300 flex items-center justify-center gap-2"
                  >
                    <span>🔗</span>
                    <span>رابط الاجتماع</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-amber-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl text-center border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">{upcomingCount}</div>
            <div className="text-sm text-blue-600">اجتماعات قادمة</div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl text-center border border-green-200">
            <div className="text-2xl font-bold text-green-700">{completedCount}</div>
            <div className="text-sm text-green-600">اجتماعات منتهية</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl text-center border border-purple-200">
            <div className="text-2xl font-bold text-purple-700">4</div>
            <div className="text-sm text-purple-600">منصات مختلفة</div>
          </div>
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-xl text-center border border-amber-200">
            <div className="text-2xl font-bold text-amber-700">12</div>
            <div className="text-sm text-amber-600">ساعة هذا الشهر</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Files Section Component
const FilesSection: React.FC<{
  uploadedFiles: File[];
  links: FileLink[];
  onFileUpload: (files: File[]) => void;
}> = ({ uploadedFiles, links, onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileUpload(Array.from(e.target.files));
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-amber-900">
        <span className="text-2xl">📁</span>
        الملفات والروابط التعليمية
      </h2>

      {/* Upload Section */}
      <div className="mb-8">
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-amber-300 rounded-2xl p-8 text-center hover:border-amber-400 hover:bg-amber-100/50 transition-all duration-300 cursor-pointer group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">☁️</div>
          <p className="text-amber-800 font-medium mb-2">اضغط هنا لرفع الملفات</p>
          <p className="text-sm text-amber-700">أو اسحب الملفات وأفلتها هنا (PDF, DOC, PPT, IMG)</p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileUpload}
          className="hidden"
          accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,.gif"
        />
      </div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold mb-4 text-amber-800 flex items-center gap-2">
            <span>📤</span>
            الملفات المرفوعة حديثاً:
          </h3>
          <div className="space-y-3">
            {uploadedFiles.map((file, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl border border-amber-200 hover:shadow-md transition-all duration-300">
                <span className="text-xl">📎</span>
                <div className="flex-1">
                  <div className="font-medium text-amber-900">{file.name}</div>
                  <div className="text-sm text-amber-700">{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
                </div>
                <button className="text-red-600 hover:bg-red-100 p-2 rounded-lg transition-colors hover:scale-110">
                  🗑️
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div>
        <h3 className="font-semibold mb-4 text-amber-800 flex items-center gap-2">
          <span>🔗</span>
          الروابط والمراجع المهمة:
        </h3>
        <div className="grid gap-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 border border-orange-200 group"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{getFileIcon(link.type)}</span>
              <div className="flex-1">
                <div className="font-medium text-amber-900 group-hover:text-orange-700">{link.title}</div>
                <div className="text-sm text-amber-700">{link.size} • {link.type}</div>
              </div>
              <span className="text-amber-700 group-hover:text-orange-600 transition-colors">↗️</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Chat Component
const ChatSection: React.FC<{
  teacher: Teacher;
  messages: Message[];
  newMessage: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
}> = ({ teacher, messages, newMessage, onMessageChange, onSendMessage }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-200/50">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-amber-200 to-orange-300 p-6 border-b border-amber-300">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="p-1 bg-white rounded-full">
              <img
                src={teacher.avatar || "/api/placeholder/50/50"}
                alt={teacher.name}
                className="w-12 h-12 rounded-full border-2 border-amber-200"
              />
            </div>
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              teacher.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
              }`}></div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-amber-900">{teacher.name}</h2>
            <p className="text-amber-800 text-sm font-medium">{teacher.email}</p>
            <p className="text-amber-700 text-xs">
              {teacher.status === 'online' ? '🟢 متاح للدردشة الآن' : '⚪ غير متاح حالياً'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-6 bg-gradient-to-b from-orange-50/50 to-amber-50/50">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "student" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm border ${
                msg.sender === "student"
                  ? "bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 rounded-br-sm border-amber-300"
                  : "bg-white border-amber-200 rounded-bl-sm text-gray-800"
                }`}>
                <p className="text-sm leading-relaxed font-medium">{msg.content}</p>
                <div className={`text-xs mt-2 ${msg.sender === "student" ? "text-amber-700" : "text-gray-500"}`}>
                  {formatTimestamp(msg.timestamp)}
                  {msg.sender === "student" && (
                    <span className="ml-2">
                      {msg.status === 'read' ? '✓✓' : msg.status === 'delivered' ? '✓' : '⏳'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-amber-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-amber-200 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
        <div className="flex gap-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => {
              onMessageChange(e.target.value);
              setIsTyping(e.target.value.length > 0);
            }}
            onKeyPress={handleKeyPress}
            placeholder="اكتب رسالتك هنا... 💭"
            className="flex-1 p-3 border border-amber-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-800 placeholder-amber-600"
          />
          <button
            onClick={onSendMessage}
            disabled={!newMessage.trim()}
            className="px-6 py-3 bg-gradient-to-r from-amber-300 to-orange-400 text-amber-900 font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 border border-amber-400"
          >
            📤
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------- Main Component ----------
export default function StudentProfile(): JSX.Element {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>("");
  const [activeTab, setActiveTab] = useState<'notes' | 'meetings' | 'files'>('notes');

  const handleFileUpload = (files: File[]): void => {
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleSendMessage = (): void => {
    if (newMessage.trim() === "") return;

    const newMsg: Message = {
      id: messages.length + 1,
      sender: "student",
      content: newMessage.trim(),
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage("");

    // Simulate message delivery and read status
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === newMsg.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 1000);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === newMsg.id ? { ...msg, status: 'read' } : msg
        )
      );
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-amber-200 text-amber-900 font-medium"
        >
          <span className="text-lg">←</span>
          <span>العودة للصفحة الرئيسية</span>
        </button>

        {/* Profile Header */}
        <ProfileHeader student={student} />

        {/* Tabs for Notes and Meetings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-amber-200/50 overflow-hidden">
          <div className="flex border-b border-amber-200">
            <button
              onClick={() => setActiveTab('notes')}
              className={`flex-1 py-4 text-lg font-medium transition-all duration-300 ${activeTab === 'notes' ? 'bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900' : 'text-amber-700 hover:bg-amber-100'}`}
            >
              📝 الملاحظات والتقارير
            </button>
            <button
              onClick={() => setActiveTab('meetings')}
              className={`flex-1 py-4 text-lg font-medium transition-all duration-300 ${activeTab === 'meetings' ? 'bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900' : 'text-amber-700 hover:bg-amber-100'}`}
            >
              🎤 الاجتماعات الإلكترونية
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'notes' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <NotesSection
                  title="الملاحظات الإيجابية والإنجازات"
                  notes={student.notesPositive}
                  type="positive"
                />
                <NotesSection
                  title="نقاط التحسين والتطوير"
                  notes={student.notesNegative}
                  type="negative"
                />
              </div>
            ) : (
              <MeetingsSection meetings={student.meetings} />
            )}
          </div>
        </div>

        {/* Files and Chat Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FilesSection
            uploadedFiles={uploadedFiles}
            links={student.links}
            onFileUpload={handleFileUpload}
          />

          <ChatSection
            teacher={student.teacher}
            messages={messages}
            newMessage={newMessage}
            onMessageChange={setNewMessage}
            onSendMessage={handleSendMessage}
          />
        </div>

        {/* Quick Actions Footer */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-200/50">
          <h3 className="text-xl font-bold mb-6 text-amber-900 flex items-center gap-3">
            <span>⚡</span>
            إجراءات سريعة
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-300 flex flex-col items-center gap-2">
              <span className="text-2xl">📅</span>
              <span className="font-medium text-green-800">جدولة اجتماع</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-300 flex flex-col items-center gap-2">
              <span className="text-2xl">📤</span>
              <span className="font-medium text-blue-800">رفع واجب</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-purple-300 flex flex-col items-center gap-2">
              <span className="text-2xl">📊</span>
              <span className="font-medium text-purple-800">تقرير أداء</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-amber-300 flex flex-col items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-medium text-amber-800">أهداف تعليمية</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}