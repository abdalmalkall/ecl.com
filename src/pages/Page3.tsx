import { useState } from 'react';
import { 
  Users, GraduationCap, Building2, FileText, Settings, BarChart3,
  Bell, Menu, UserPlus, Upload, Download, Shield, Activity, Database
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const notifications = [
    { id: 1, message: 'طالب جديد تم تسجيله', time: 'منذ 5 دقائق', type: 'user' },
    { id: 2, message: 'تقرير جديد تم إضافته', time: 'منذ 15 دقيقة', type: 'report' },
    { id: 3, message: 'معلم جديد انضم للنظام', time: 'منذ ساعة', type: 'teacher' }
  ];

  const stats = { students: 1250, teachers: 85, departments: 12, reports: 340 };

  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: BarChart3 },
    { id: 'users', label: 'إدارة المستخدمين', icon: Users },
    { id: 'departments', label: 'إدارة الأقسام', icon: Building2 },
    { id: 'reports', label: 'التقارير', icon: FileText },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* الإحصائيات */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: 'عدد الطلاب', value: stats.students, color: 'from-blue-500 to-blue-600', icon: GraduationCap },
          { title: 'عدد المعلمين', value: stats.teachers, color: 'from-green-500 to-green-600', icon: Users },
          { title: 'عدد الأقسام', value: stats.departments, color: 'from-purple-500 to-purple-600', icon: Building2 },
          { title: 'عدد التقارير', value: stats.reports, color: 'from-orange-500 to-orange-600', icon: FileText }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 text-white shadow`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">{stat.title}</h3>
                  <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
                </div>
                <Icon size={28} className="opacity-80" />
              </div>
            </div>
          );
        })}
      </div>

      {/* إجراءات + إشعارات */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* إجراءات */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">إجراءات سريعة</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { text: 'إضافة مستخدم', color: 'blue', icon: UserPlus },
              { text: 'إنشاء قسم', color: 'green', icon: Building2 },
              { text: 'رفع ملف', color: 'purple', icon: Upload },
              { text: 'تصدير تقرير', color: 'orange', icon: Download }
            ].map((action, i) => {
              const Icon = action.icon;
              return (
                <button key={i} className={`flex items-center gap-2 p-3 bg-${action.color}-50 rounded-lg hover:bg-${action.color}-100 transition text-sm`}>
                  <Icon className={`text-${action.color}-600`} size={18} />
                  <span className={`text-${action.color}-800 font-medium`}>{action.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* إشعارات */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800">الإشعارات</h3>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {notifications.length}
            </span>
          </div>
          <div className="space-y-2">
            {notifications.map(n => (
              <div key={n.id} className="flex items-start gap-3 p-2 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-full ${
                  n.type === 'user' ? 'bg-blue-100' :
                  n.type === 'report' ? 'bg-green-100' :
                  'bg-purple-100'
                }`}>
                  {n.type === 'user' ? <Users size={14} className="text-blue-600" /> :
                   n.type === 'report' ? <FileText size={14} className="text-green-600" /> :
                   <GraduationCap size={14} className="text-purple-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{n.message}</p>
                  <p className="text-xs text-gray-500">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b fixed w-full top-0 z-40">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu size={22} className="text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">لوحة التحكم</h1>
                <p className="text-xs text-gray-500">مرحباً بك محمود درويش</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-600 hover:text-gray-800">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              م
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed lg:static top-0 right-0 h-full w-56 bg-white shadow-lg transform transition-transform duration-300 z-50 
          ${sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
          <div className="p-6 space-y-2">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-right transition ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="absolute bottom-0 w-full p-4 border-t bg-gray-50 text-xs">
            <div className="flex items-center gap-2 text-gray-600">
              <Activity size={14} className="text-green-500" />
              <span>النظام يعمل بشكل طبيعي</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 mt-2">
              <Database size={14} />
              <span>آخر نسخة احتياطية: اليوم 3:00 ص</span>
            </div>
          </div>
        </aside>

        {/* المحتوى */}
        <main className="flex-1 p-4 md:p-6">
          {activeSection === 'dashboard' ? renderDashboard() : (
            <p className="p-4 text-gray-700">القسم قيد التطوير</p>
          )}
        </main>
      </div>
    </div>
  );
}
