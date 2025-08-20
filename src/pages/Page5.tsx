import React, { useState } from 'react';
import { 
  Home, 
  FileText, 
  BarChart3, 
  Building2, 
  Download, 
  Users, 
  GraduationCap, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  BookOpen,
  Award,
  AlertCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

interface KPIData {
  totalStudents: number;
  totalSpecializations: number;
  successRate: number;
  absenceRate: number;
  teacherCount: number;
  schoolRating: number;
}

interface SpecializationData {
  name: string;
  students: number;
  successRate: number;
}

interface AttendanceData {
  month: string;
  attendance: number;
  absence: number;
}

interface SubjectPerformance {
  subject: string;
  successRate: number;
  averageScore: number;
}

const MinistryDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // بيانات وهمية للعرض
  const kpiData: KPIData = {
    totalStudents: 850,
    totalSpecializations: 8,
    successRate: 87.5,
    absenceRate: 12.3,
    teacherCount: 45,
    schoolRating: 4.2
  };

  const specializationData: SpecializationData[] = [
    { name: 'العلوم', students: 180, successRate: 89 },
    { name: 'الأدبي', students: 165, successRate: 85 },
    { name: 'التجاري', students: 140, successRate: 82 },
    { name: 'الصناعي', students: 120, successRate: 88 },
    { name: 'الزراعي', students: 95, successRate: 84 },
    { name: 'الفندقي', students: 85, successRate: 86 },
    { name: 'المعلوماتية', students: 65, successRate: 92 }
  ];

  const attendanceData: AttendanceData[] = [
    { month: 'سبتمبر', attendance: 88, absence: 12 },
    { month: 'أكتوبر', attendance: 85, absence: 15 },
    { month: 'نوفمبر', attendance: 90, absence: 10 },
    { month: 'ديسمبر', attendance: 87, absence: 13 },
    { month: 'يناير', attendance: 89, absence: 11 },
    { month: 'فبراير', attendance: 86, absence: 14 }
  ];

  const subjectPerformance: SubjectPerformance[] = [
    { subject: 'الرياضيات', successRate: 82, averageScore: 74 },
    { subject: 'العربي', successRate: 89, averageScore: 78 },
    { subject: 'الإنجليزي', successRate: 85, averageScore: 76 },
    { subject: 'العلوم', successRate: 87, averageScore: 79 },
    { subject: 'التاريخ', successRate: 91, averageScore: 81 },
    { subject: 'الجغرافيا', successRate: 88, averageScore: 77 }
  ];

  const pieChartColors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];

  const handleExportReport = (type: 'pdf' | 'excel') => {
    alert(`تم تصدير التقرير بصيغة ${type.toUpperCase()}`);
  };

  const renderDashboard = () => (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🏠 لوحة التحكم الرئيسية</h2>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-800">👨‍🎓 عدد الطلاب</h3>
              <p className="text-3xl font-bold text-blue-600">{kpiData.totalStudents}</p>
            </div>
            <Users className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-800">🏫 التخصصات</h3>
              <p className="text-3xl font-bold text-green-600">{kpiData.totalSpecializations}</p>
            </div>
            <Building2 className="w-12 h-12 text-green-500" />
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-purple-800">📊 نسبة النجاح</h3>
              <p className="text-3xl font-bold text-purple-600">{kpiData.successRate}%</p>
            </div>
            <TrendingUp className="w-12 h-12 text-purple-500" />
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-red-800">📉 نسبة الغياب</h3>
              <p className="text-3xl font-bold text-red-600">{kpiData.absenceRate}%</p>
            </div>
            <TrendingDown className="w-12 h-12 text-red-500" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">توزيع الطلاب حسب التخصص</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={specializationData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="students"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {specializationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieChartColors[index % pieChartColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">نسب الحضور والغياب الشهرية</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attendance" fill="#10b981" name="الحضور" />
              <Bar dataKey="absence" fill="#ef4444" name="الغياب" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <GraduationCap className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-yellow-800">عدد المعلمين</h3>
          <p className="text-2xl font-bold text-yellow-600">{kpiData.teacherCount}</p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 text-center">
          <Award className="w-16 h-16 text-indigo-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-indigo-800">تقييم المدرسة</h3>
          <p className="text-2xl font-bold text-indigo-600">{kpiData.schoolRating}/5</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <Calendar className="w-16 h-16 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">العام الدراسي</h3>
          <p className="text-xl font-bold text-gray-600">2024-2025</p>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">📑 التقارير العامة</h2>
        <div className="flex gap-3">
          <button 
            onClick={() => handleExportReport('pdf')}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            <Download className="w-4 h-4" />
            تصدير PDF
          </button>
          <button 
            onClick={() => handleExportReport('excel')}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            <Download className="w-4 h-4" />
            تصدير Excel
          </button>
        </div>
      </div>

      {/* Reports Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">تقرير النجاح حسب التخصص</h3>
          <div className="space-y-3">
            {specializationData.map((spec, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">{spec.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{spec.students} طالب</span>
                  <span className={`font-bold ${spec.successRate >= 85 ? 'text-green-600' : spec.successRate >= 75 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {spec.successRate}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">أداء المواد الأساسية</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="successRate" fill="#3b82f6" name="نسبة النجاح %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Report */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">ملخص الأداء العام</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded">
            <p className="text-sm text-blue-600">إجمالي الطلاب</p>
            <p className="text-2xl font-bold text-blue-800">{kpiData.totalStudents}</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded">
            <p className="text-sm text-green-600">المعدل العام للنجاح</p>
            <p className="text-2xl font-bold text-green-800">{kpiData.successRate}%</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded">
            <p className="text-sm text-yellow-600">معدل الحضور</p>
            <p className="text-2xl font-bold text-yellow-800">{(100 - kpiData.absenceRate).toFixed(1)}%</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded">
            <p className="text-sm text-purple-600">التقييم العام</p>
            <p className="text-2xl font-bold text-purple-800">{kpiData.schoolRating}/5</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatistics = () => (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">📊 الإحصائيات والرسوم البيانية</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">نسب النجاح حسب التخصص</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={specializationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="successRate" fill="#10b981" name="نسبة النجاح %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">اتجاه الحضور الشهري</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={3} name="نسبة الحضور" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Statistics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">إحصائيات تفصيلية</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-right">التخصص</th>
                <th className="p-3 text-center">عدد الطلاب</th>
                <th className="p-3 text-center">نسبة النجاح</th>
                <th className="p-3 text-center">التقييم</th>
              </tr>
            </thead>
            <tbody>
              {specializationData.map((spec, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 font-medium">{spec.name}</td>
                  <td className="p-3 text-center">{spec.students}</td>
                  <td className="p-3 text-center">
                    <span className={`font-bold ${spec.successRate >= 85 ? 'text-green-600' : spec.successRate >= 75 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {spec.successRate}%
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    {spec.successRate >= 90 ? '🏆 ممتاز' : 
                     spec.successRate >= 85 ? '✅ جيد جداً' : 
                     spec.successRate >= 75 ? '⚠️ جيد' : '❌ يحتاج تحسين'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderComparison = () => (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">🏫 مقارنة الأداء</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">مقارنة مع المعايير الوطنية</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 border-2 border-blue-200 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">نسبة النجاح</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>مدرستنا:</span>
                <span className="font-bold text-blue-600">{kpiData.successRate}%</span>
              </div>
              <div className="flex justify-between">
                <span>المعدل الوطني:</span>
                <span className="font-bold text-gray-600">82.3%</span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                +{(kpiData.successRate - 82.3).toFixed(1)}% أعلى من المعدل
              </div>
            </div>
          </div>

          <div className="text-center p-6 border-2 border-green-200 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">نسبة الحضور</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>مدرستنا:</span>
                <span className="font-bold text-green-600">{(100 - kpiData.absenceRate).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>المعدل الوطني:</span>
                <span className="font-bold text-gray-600">85.7%</span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                +{((100 - kpiData.absenceRate) - 85.7).toFixed(1)}% أعلى من المعدل
              </div>
            </div>
          </div>

          <div className="text-center p-6 border-2 border-purple-200 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">التقييم العام</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>مدرستنا:</span>
                <span className="font-bold text-purple-600">{kpiData.schoolRating}/5</span>
              </div>
              <div className="flex justify-between">
                <span>المعدل الوطني:</span>
                <span className="font-bold text-gray-600">3.8/5</span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                +{(kpiData.schoolRating - 3.8).toFixed(1)} أعلى من المعدل
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School Ranking */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">ترتيب المدرسة</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">على مستوى المحافظة</h4>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="font-bold text-lg">المرتبة الثالثة</p>
                  <p className="text-sm text-gray-600">من أصل 45 مدرسة</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">على مستوى المملكة</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-green-500" />
                <div>
                  <p className="font-bold text-lg">ضمن أفضل 15%</p>
                  <p className="text-sm text-gray-600">المرتبة 127 من أصل 850</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">التوصيات والملاحظات</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-green-800">نقاط القوة</p>
              <p className="text-green-700">نسبة نجاح عالية في تخصص المعلوماتية (92%)</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium text-yellow-800">نقاط تحتاج تحسين</p>
              <p className="text-yellow-700">نسبة النجاح في التخصص التجاري أقل من المعدل المطلوب</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: Home },
    { id: 'reports', label: 'التقارير العامة', icon: FileText },
    { id: 'statistics', label: 'الإحصائيات', icon: BarChart3 },
    { id: 'comparison', label: 'مقارنة الأداء', icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">🎯 لوحة تحكم موظف الوزارة</h1>
              <p className="text-blue-100">مراقبة أداء المدرسة والتقييم العام</p>
            </div>
            <div className="text-left">
              <p className="font-medium">مدرسة مرج الحمام المهنيه  الثانوية</p>
              <p className="text-sm text-blue-200">صلاحية القراءة فقط</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${
                        activeTab === item.id 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-x-auto">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'reports' && renderReports()}
          {activeTab === 'statistics' && renderStatistics()}
          {activeTab === 'comparison' && renderComparison()}
        </main>
      </div>
    </div>
  );
};

export default MinistryDashboard;