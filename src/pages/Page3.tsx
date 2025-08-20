import React, { useState, useRef, useEffect } from "react";

// ---------- Types ----------
interface Note {
  id: number;
  text: string;
  date?: string;
  category?: 'user_management' | 'department_management' | 'platform_control' | 'reports' | 'activity_logs' | 'content_management';
}

interface Message {
  id: number;
  sender: "admin" | "staff";
  content: string;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
  staffName?: string;
}

interface Staff {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
  status?: 'online' | 'offline' | 'away';
}

// ---------- Sample Data ----------
const adminProfile = {
  fullName: "أحمد المدير",
  username: "admin.ahmed",
  email: "admin@school.edu.jo",
  avatar: "https://i.pinimg.com/736x/0f/1a/8a/0f1a8a23456abcdef7890.jpg",
  managedUsersCount: 150,
  managedDepartmentsCount: 8,
};

const staffList: Staff[] = [
  { id: "1", name: "سارة الزهراني", role: "Teacher", email: "sara@school.edu.jo", status: 'online' },
  { id: "2", name: "محمد الحسن", role: "Department Manager", email: "mohammad@school.edu.jo", status: 'offline' },
  { id: "3", name: "ليلى علي", role: "Supervisor", email: "leila@school.edu.jo", status: 'away' },
];

const adminNotes: Note[] = [
  { id: 1, text: "تم إنشاء حسابات جديدة لجميع المدرسين الجدد.", date: "2025-08-19", category: 'user_management' },
  { id: 2, text: "تم تعديل بيانات الأقسام وتحديث أسماء المسؤولين.", date: "2025-08-18", category: 'department_management' },
  { id: 3, text: "تحديث إعدادات المنصة وإعادة تعيين صلاحيات الأدوار.", date: "2025-08-17", category: 'platform_control' },
  { id: 4, text: "عرض كامل للتقارير الشهرية لجميع الأقسام.", date: "2025-08-16", category: 'reports' },
  { id: 5, text: "مراجعة سجلات النشاط لجميع المستخدمين.", date: "2025-08-15", category: 'activity_logs' },
  { id: 6, text: "إضافة مواد تعليمية جديدة على المنصة.", date: "2025-08-14", category: 'content_management' },
];

const initialMessages: Message[] = [
  { id: 1, sender: "staff", content: "مرحبا أستاذ أحمد، تم تحديث إعدادات القسم.", timestamp: new Date(Date.now() - 3600000), status: 'read', staffName: "محمد الحسن" },
  { id: 2, sender: "admin", content: "شكراً محمد، سأراجع التحديث الآن.", timestamp: new Date(Date.now() - 1800000), status: 'read' },
];

// ---------- Utility Functions ----------
const getCategoryIcon = (category?: string): string => {
  switch (category) {
    case 'user_management': return '👤';
    case 'department_management': return '🏢';
    case 'platform_control': return '⚙️';
    case 'reports': return '📊';
    case 'activity_logs': return '📜';
    case 'content_management': return '📚';
    default: return '📝';
  }
};

const formatTimestamp = (timestamp: Date): string => {
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  
  if (hours > 24) return timestamp.toLocaleDateString('ar-SA');
  if (hours > 0) return `منذ ${hours} ساعة`;
  if (minutes > 0) return `منذ ${minutes} دقيقة`;
  return 'الآن';
};

// ---------- Components ----------
const StatsCard: React.FC<{ title: string; value: string | number; icon: string; gradient: string }> = 
({ title, value, icon, gradient }) => (
  <div className={`${gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/30`}>
    <div className="flex items-center justify-between">
      <div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-gray-700 text-sm font-medium">{title}</div>
      </div>
      <div className="text-4xl opacity-80 filter drop-shadow-sm">{icon}</div>
    </div>
  </div>
);

const AdminProfileHeader: React.FC = () => {
  const stats = [
    { title: "عدد المستخدمين", value: adminProfile.managedUsersCount, icon: "👤", gradient: "bg-gradient-to-br from-gray-100 to-gray-200" },
    { title: "عدد الأقسام", value: adminProfile.managedDepartmentsCount, icon: "🏢", gradient: "bg-gradient-to-br from-gray-200 to-gray-300" },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-8 rounded-3xl shadow-xl mb-8 border border-gray-200/50">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <div className="p-1 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full">
            <img src={adminProfile.avatar} alt={adminProfile.fullName} className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"/>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
            <span className="text-white text-xs">👑</span>
          </div>
        </div>
        <div className="text-center md:text-right flex-1">
          <h1 className="text-4xl font-bold mb-3 text-gray-900 drop-shadow-sm">{adminProfile.fullName}</h1>
          <div className="space-y-2 text-gray-700">
            <p className="text-lg font-medium">🔑 مسؤول المنصة الأعلى</p>
            <p className="text-base">👤 {adminProfile.username}</p>
            <p className="text-base">📧 {adminProfile.email}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((stat, index) => <StatsCard key={index} {...stat} />)}
      </div>
    </div>
  );
};

const AdminNotesSection: React.FC<{ notes: Note[] }> = ({ notes }) => (
  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200/50">
    <h2 className="font-bold text-xl mb-6 flex items-center gap-3 text-gray-700">
      <span className="text-2xl">📝</span> صلاحيات المدير
      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-900 border border-gray-300">{notes.length}</span>
    </h2>
    <div className="space-y-4">
      {notes.map(note => (
        <div key={note.id} className="p-4 rounded-xl border-l-4 bg-gray-100 border-gray-300 text-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5">{getCategoryIcon(note.category)}</span>
            <div className="flex-1">
              <p className="font-medium mb-2 leading-relaxed">{note.text}</p>
              <div className="text-sm opacity-75">📅 {note.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StaffListSection: React.FC<{ staff: Staff[] }> = ({ staff }) => (
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg border border-purple-200/50">
    <h2 className="font-bold text-xl mb-6 flex items-center gap-3 text-purple-700">
      <span className="text-2xl">👥</span> قائمة الموظفين
      <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">{staff.length}</span>
    </h2>
    <div className="grid gap-4">
      {staff.map(member => (
        <div key={member.id} className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 border border-purple-200">
          <img src={member.avatar || "/api/placeholder/50/50"} alt={member.name} className="w-12 h-12 rounded-full border-2 border-purple-200"/>
          <div className="flex-1">
            <div className="font-medium text-purple-900">{member.name}</div>
            <div className="text-sm text-purple-700">{member.role}</div>
            <div className="text-xs text-purple-600">{member.email}</div>
          </div>
          <div className="text-sm">
            {member.status === 'online' ? '🟢 متصل' : member.status === 'away' ? '🟡 بعيد' : '⚪ غير متصل'}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AdminChatSection: React.FC<{ messages: Message[] }> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);


  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg overflow-hidden border border-blue-200/50">
      <div className="h-80 overflow-y-auto p-6">
        <div className="space-y-4">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm border ${msg.sender === "admin" ? "bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-900" : "bg-white border-blue-200 text-gray-800"}`}>
                {msg.sender === 'staff' && msg.staffName && <div className="text-xs font-medium text-blue-600 mb-1">{msg.staffName}</div>}
                <p className="text-sm leading-relaxed font-medium">{msg.content}</p>
                <div className={`text-xs mt-2 ${msg.sender === "admin" ? "text-blue-700" : "text-gray-500"}`}>
                  {formatTimestamp(msg.timestamp)}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

// ---------- Main Component ----------
export default function AdminDashboard(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <button onClick={() => window.history.back()} className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 text-gray-900 font-medium">
          <span className="text-lg">←</span>
          العودة للصفحة الرئيسية
        </button>

        <AdminProfileHeader />
        <AdminNotesSection notes={adminNotes} />
        <StaffListSection staff={staffList} />
        <AdminChatSection messages={initialMessages} />
      </div>
    </div>
  );
}
