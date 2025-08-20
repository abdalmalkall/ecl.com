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
  Calendar
} from 'lucide-react';

interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  totalDepartments: number;
  monthlyReports: number;
}

interface Report {
  id: string;
  title: string;
  type: 'student' | 'teacher' | 'department';
  department: string;
  date: string;
  status: 'جديد' | 'مراجع' | 'مكتمل';
}

interface Department {
  id: string;
  name: string;
  headOfDepartment: string;
  studentsCount: number;
  teachersCount: number;
  status: 'نشط' | 'قيد المراجعة';
}

const SupervisorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock data
  const stats: DashboardStats = {
    totalStudents: 1250,
    totalTeachers: 85,
    totalDepartments: 8,
    monthlyReports: 24
  };

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

  const reports: Report[] = [
    {
      id: '1',
      title: 'تقرير أداء الطلاب - الفصل الثاني',
      type: 'student',
      department: 'قسم الهندسة',
      date: '2025-08-15',
      status: 'جديد'
    },
    {
      id: '2',
      title: 'تقرير حضور المعلمين',
      type: 'teacher',
      department: 'قسم الآداب',
      date: '2025-08-14',
      status: 'مراجع'
    },
    {
      id: '3',
      title: 'تقرير الخطة الدراسية',
      type: 'department',
      department: 'قسم العلوم',
      date: '2025-08-13',
      status: 'مكتمل'
    }
  ];

  const departments: Department[] = [
    {
      id: '1',
      name: 'قسم الهندسة',
      headOfDepartment: 'د. أحمد محمد',
      studentsCount: 320,
      teachersCount: 18,
      status: 'نشط'
    },
    {
      id: '2',
      name: 'قسم الآداب',
      headOfDepartment: 'د. فاطمة علي',
      studentsCount: 280,
      teachersCount: 15,
      status: 'نشط'
    },
    {
      id: '3',
      name: 'قسم العلوم',
      headOfDepartment: 'د. محمد سالم',
      studentsCount: 250,
      teachersCount: 12,
      status: 'قيد المراجعة'
    }
  ];

  const notifications = [
    {
      id: '1',
      message: 'تم رفع تقرير جديد من قسم الهندسة',
      time: '10 دقائق',
      type: 'report'
    },
    {
      id: '2',
      message: 'ملاحظة من المعلم أحمد بخصوص الجدول',
      time: '30 دقيقة',
      type: 'note'
    },
    {
      id: '3',
      message: 'تحديث الخطة الدراسية لقسم العلوم',
      time: '1 ساعة',
      type: 'update'
    }
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
    <div className="bg-white rounded-lg shadow-md p-6 border-r-4" style={{ borderRightColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
        </div>
        <div className="text-3xl" style={{ color }}>
          {icon}
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">لوحة المشرف</h1>
        <div className="flex items-center space-x-2 space-x-reverse">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-600">الأربعاء، 20 أغسطس 2025</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="👨‍🎓 عدد الطلاب الكلي" 
          value={stats.totalStudents} 
          icon={<GraduationCap />}
          color="#3b82f6"
        />
        <StatCard 
          title="👨‍🏫 عدد المعلمين" 
          value={stats.totalTeachers} 
          icon={<Users />}
          color="#10b981"
        />
        <StatCard 
          title="🏫 عدد الأقسام" 
          value={stats.totalDepartments} 
          icon={<School />}
          color="#f59e0b"
        />
        <StatCard 
          title="📑 التقارير الشهرية" 
          value={stats.monthlyReports} 
          icon={<FileText />}
          color="#ef4444"
        />
      </div>

      {/* Recent Updates */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 ml-2" />
          آخر التحديثات
        </h3>
        <div className="space-y-3">
          {notifications.slice(0, 3).map((notification) => (
            <div key={notification.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{notification.message}</p>
                <p className="text-xs text-gray-500">منذ {notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">الإجراءات السريعة</h3>
          <div className="space-y-3">
            <button 
              onClick={() => setActiveTab('reports')}
              className="w-full flex items-center p-3 text-right bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <FileText className="w-5 h-5 ml-2 text-blue-600" />
              <span className="text-blue-800">عرض التقارير الجديدة</span>
            </button>
            <button 
              onClick={() => setActiveTab('performance')}
              className="w-full flex items-center p-3 text-right bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <BarChart3 className="w-5 h-5 ml-2 text-green-600" />
              <span className="text-green-800">تحليل الأداء</span>
            </button>
            <button 
              onClick={() => setActiveTab('departments')}
              className="w-full flex items-center p-3 text-right bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
            >
              <School className="w-5 h-5 ml-2 text-orange-600" />
              <span className="text-orange-800">مراجعة الأقسام</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">نظرة عامة على الحضور</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">متابعة الأداء 📊</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">مؤشرات الأداء الشهرية</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={2} name="الطلاب" />
            <Line type="monotone" dataKey="teachers" stroke="#10b981" strokeWidth={2} name="المعلمون" />
            <Line type="monotone" dataKey="departments" stroke="#f59e0b" strokeWidth={2} name="الأقسام" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">نسب الحضور والغياب</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">مستوى المشاركة</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">مشاركة المعلمين</span>
              <span className="text-sm text-gray-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">نشاط الطلاب</span>
              <span className="text-sm text-gray-600">78%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">كفاءة الأقسام</span>
              <span className="text-sm text-gray-600">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">التقارير 📑</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">جميع التقارير</h3>
          <p className="text-sm text-gray-600 mt-1">يمكنك عرض جميع التقارير، لكن لا يمكن التعديل أو الحذف</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  عنوان التقرير
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  النوع
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  القسم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  التاريخ
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الحالة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الإجراء
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {report.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      report.type === 'student' ? 'bg-blue-100 text-blue-800' :
                      report.type === 'teacher' ? 'bg-green-100 text-green-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {report.type === 'student' ? 'طلاب' : 
                       report.type === 'teacher' ? 'معلمون' : 'قسم'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {report.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(report.date).toLocaleDateString('ar-SA')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      report.status === 'جديد' ? 'bg-red-100 text-red-800' :
                      report.status === 'مراجع' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4 ml-1" />
                      عرض
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderDepartments = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">الأقسام 🏫</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                <p className="text-sm text-gray-600">رئيس القسم: {dept.headOfDepartment}</p>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                dept.status === 'نشط' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {dept.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">عدد الطلاب:</span>
                <span className="font-medium">{dept.studentsCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">عدد المعلمين:</span>
                <span className="font-medium">{dept.teachersCount}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full flex items-center justify-center text-blue-600 hover:text-blue-800 text-sm">
                <Eye className="w-4 h-4 ml-1" />
                عرض التفاصيل
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">الإشعارات 🔔</h1>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">الإشعارات الحديثة</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div key={notification.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-start">
                <div className={`w-3 h-3 rounded-full mt-2 ml-3 ${
                  notification.type === 'report' ? 'bg-blue-500' :
                  notification.type === 'note' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">منذ {notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'performance':
        return renderPerformance();
      case 'reports':
        return renderReports();
      case 'departments':
        return renderDepartments();
      case 'notifications':
        return renderNotifications();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">لوحة المشرف</h2>
            <p className="text-sm text-gray-600 mt-1">الإشراف والمتابعة</p>
          </div>
          
          <nav className="mt-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-6 py-3 text-right hover:bg-gray-50 transition-colors ${
                    activeTab === item.id 
                      ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700' 
                      : 'text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 ml-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;