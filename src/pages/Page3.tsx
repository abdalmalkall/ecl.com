import { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  Building2, 
  FileText, 
  Settings, 
  BarChart3,
  Bell,
  Search,
  Plus,
  Download,
  Eye,
  Edit,
  Trash2,
  UserPlus,
  Shield,
  Activity,
  Database,
  Upload
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'طالب جديد تم تسجيله', time: 'منذ 5 دقائق', type: 'user' },
    { id: 2, message: 'تقرير جديد تم إضافته', time: 'منذ 15 دقيقة', type: 'report' },
    { id: 3, message: 'معلم جديد انضم للنظام', time: 'منذ ساعة', type: 'teacher' }
  ]);

  // بيانات وهمية للإحصائيات
  const stats = {
    students: 1250,
    teachers: 85,
    departments: 12,
    reports: 340
  };

  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: BarChart3 },
    { id: 'users', label: 'إدارة المستخدمين', icon: Users },
    { id: 'departments', label: 'إدارة الأقسام', icon: Building2 },
    { id: 'reports', label: 'التقارير', icon: FileText },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* الإحصائيات السريعة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">عدد الطلاب</h3>
              <p className="text-3xl font-bold">{stats.students}</p>
            </div>
            <GraduationCap size={40} className="opacity-80" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">عدد المعلمين</h3>
              <p className="text-3xl font-bold">{stats.teachers}</p>
            </div>
            <Users size={40} className="opacity-80" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">عدد الأقسام</h3>
              <p className="text-3xl font-bold">{stats.departments}</p>
            </div>
            <Building2 size={40} className="opacity-80" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">عدد التقارير</h3>
              <p className="text-3xl font-bold">{stats.reports}</p>
            </div>
            <FileText size={40} className="opacity-80" />
          </div>
        </div>
      </div>

      {/* الأنشطة السريعة */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">إجراءات سريعة</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <UserPlus className="text-blue-600" size={20} />
              <span className="text-blue-800 font-medium">إضافة مستخدم</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Building2 className="text-green-600" size={20} />
              <span className="text-green-800 font-medium">إنشاء قسم</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <Upload className="text-purple-600" size={20} />
              <span className="text-purple-800 font-medium">رفع ملف</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <Download className="text-orange-600" size={20} />
              <span className="text-orange-800 font-medium">تصدير تقرير</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">الإشعارات</h3>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {notifications.length}
            </span>
          </div>
          <div className="space-y-3">
            {notifications.map(notification => (
              <div key={notification.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`p-1 rounded-full ${
                  notification.type === 'user' ? 'bg-blue-100' :
                  notification.type === 'report' ? 'bg-green-100' :
                  'bg-purple-100'
                }`}>
                  {notification.type === 'user' ? 
                    <Users size={12} className="text-blue-600" /> :
                    notification.type === 'report' ?
                    <FileText size={12} className="text-green-600" /> :
                    <GraduationCap size={12} className="text-purple-600" />
                  }
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">إدارة المستخدمين</h2>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="البحث عن مستخدم..."
              className="pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            إضافة مستخدم
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">الطلاب</h3>
          <p className="text-2xl font-bold text-blue-600">1,250</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">المعلمين</h3>
          <p className="text-2xl font-bold text-green-600">85</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800">رؤساء الأقسام</h3>
          <p className="text-2xl font-bold text-purple-600">12</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold text-orange-800">موظفي الوزارة</h3>
          <p className="text-2xl font-bold text-orange-600">8</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">النوع</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">البريد الإلكتروني</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1,2,3,4,5].map(i => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    محمد أحمد {i}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {i % 2 === 0 ? 'طالب' : 'معلم'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    user{i}@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      نشط
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye size={16} />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard': return renderDashboard();
      case 'users': return renderUsers();
      case 'departments':
        return (
          <div className="text-center py-12">
            <Building2 size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600">إدارة الأقسام</h3>
            <p className="text-gray-500">قريباً سيتم إضافة هذا القسم</p>
          </div>
        );
      case 'reports':
        return (
          <div className="text-center py-12">
            <FileText size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600">التقارير</h3>
            <p className="text-gray-500">قريباً سيتم إضافة هذا القسم</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <Settings size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600">الإعدادات</h3>
            <p className="text-gray-500">قريباً سيتم إضافة هذا القسم</p>
          </div>
        );
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">لوحة تحكم المدير</h1>
                  <p className="text-sm text-gray-500">مرحباً بك محمود درويش </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-800">
                <Bell size={24} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  أ
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <nav className="space-y-2">
              {menuItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* System Info */}
          <div className="absolute bottom-0 w-64 p-6 border-t bg-gray-50">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Activity size={16} className="text-green-500" />
              <span>النظام يعمل بشكل طبيعي</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
              <Database size={16} />
              <span>آخر نسخة احتياطية: اليوم 3:00 ص</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}