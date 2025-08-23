import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { 
  Home, 
  BarChart3, 
  FileText, 
  School, 
  Bell, 
  Users, 
  GraduationCap,
  BookOpen,
  TrendingUp,
  Eye,
  Calendar,
  Menu,
  X
} from 'lucide-react';

const SupervisorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // === بيانات تجريبية ===
  const stats = { totalStudents: 1250, totalTeachers: 85, totalDepartments: 8, monthlyReports: 24 };
  const performanceData = [
    { month: 'يناير', students: 85, teachers: 92, departments: 88 },
    { month: 'فبراير', students: 88, teachers: 89, departments: 91 },
    { month: 'أبريل', students: 87, teachers: 91, departments: 94 },
    { month: 'مايو', students: 93, teachers: 88, departments: 92 }
  ];
  const attendanceData = [
    { name: 'حاضر', value: 78, color: '#22c55e' },
    { name: 'غائب', value: 15, color: '#ef4444' },
    { name: 'متأخر', value: 7, color: '#f59e0b' }
  ];
  const notifications = [
    { id: '1', message: 'تم رفع تقرير جديد من قسم الهندسة', time: '10 دقائق', type: 'report' },
    { id: '2', message: 'ملاحظة من المعلم أحمد بخصوص الجدول', time: '30 دقيقة', type: 'note' },
    { id: '3', message: 'تحديث الخطة الدراسية لقسم العلوم', time: '1 ساعة', type: 'update' }
  ];
  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: Home },
    { id: 'performance', label: 'متابعة الأداء', icon: BarChart3 },
    { id: 'reports', label: 'التقارير', icon: FileText },
    { id: 'departments', label: 'الأقسام', icon: School },
    { id: 'notifications', label: 'الإشعارات', icon: Bell }
  ];

  const StatCard: React.FC<{ title: string; value: number; icon: React.ReactNode; color: string }> = 
    ({ title, value, icon, color }) => (
    <div className="bg-white rounded-xl shadow-md p-5 border-r-4 transition hover:shadow-lg" style={{ borderRightColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
        </div>
        <div className="text-3xl opacity-80" style={{ color }}>
          {icon}
        </div>
      </div>
    </div>
  );

  // === المحتويات (Dashboard, Reports, إلخ) ===
  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">لوحة المشرف</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          الأربعاء، 20 أغسطس 2025
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="👨‍🎓 عدد الطلاب الكلي" value={stats.totalStudents} icon={<GraduationCap />} color="#3b82f6" />
        <StatCard title="👨‍🏫 عدد المعلمين" value={stats.totalTeachers} icon={<Users />} color="#10b981" />
        <StatCard title="🏫 عدد الأقسام" value={stats.totalDepartments} icon={<School />} color="#f59e0b" />
        <StatCard title="📑 التقارير الشهرية" value={stats.monthlyReports} icon={<FileText />} color="#ef4444" />
      </div>

      {/* إشعارات + حضور */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 ml-2" /> آخر التحديثات
          </h3>
          <div className="space-y-3">
            {notifications.map((n) => (
              <div key={n.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                <div>
                  <p className="text-sm text-gray-800">{n.message}</p>
                  <p className="text-xs text-gray-500">منذ {n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-lg font-semibold mb-4">نظرة عامة على الحضور</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={attendanceData} cx="50%" cy="50%" outerRadius={70} dataKey="value">
                {attendanceData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      default: return <p className="text-gray-500">القسم قيد التطوير 🚧</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex" dir="rtl">
      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:static lg:translate-x-0 
        ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">لوحة المشرف</h2>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="mt-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center px-6 py-3 text-right rounded-lg transition 
                  ${activeTab === item.id 
                    ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <Icon className="w-5 h-5 ml-2" /> {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 md:p-6">
        {/* زر القائمة للموبايل */}
        <div className="lg:hidden mb-4">
          <button onClick={() => setSidebarOpen(true)} className="p-2 bg-white rounded-lg shadow-md">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

export default SupervisorDashboard;
