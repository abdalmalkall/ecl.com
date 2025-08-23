import React, { useState } from 'react';
import { 
  Home, FileText, BarChart3, Building2, Download, Users, GraduationCap, 
  TrendingUp, TrendingDown, Calendar, Award, AlertCircle, Menu, X 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';

const MinistryDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // === بيانات وهمية ===
  const kpiData = { 
    totalStudents: 850, 
    totalSpecializations: 8, 
    successRate: 87.5, 
    absenceRate: 12.3, 
    teacherCount: 45, 
    schoolRating: 4.2 
  };

  const specializationData = [
    { name: 'العلوم' },
    { name: 'الأدبي', students: 165, successRate: 85 },
    { name: 'التجاري', students: 140, successRate: 82 },
    { name: 'الصناعي', students: 120, successRate: 88 },
    { name: 'الزراعي', students: 95, successRate: 84 },
    { name: 'الفندقي', students: 85, successRate: 86 },
    { name: 'المعلوماتية', students: 65, successRate: 92 }
  ];

  const attendanceData = [
    { month: 'سبتمبر', attendance: 88, absence: 12 },
    { month: 'أكتوبر', attendance: 85, absence: 15 },
    { month: 'نوفمبر', attendance: 90, absence: 10 },
    { month: 'ديسمبر', attendance: 87, absence: 13 },
    { month: 'يناير', attendance: 89, absence: 11 },
    { month: 'فبراير', attendance: 86, absence: 14 }
  ];

  const subjectPerformance = [
    { subject: 'الرياضيات', successRate: 82, averageScore: 74 },
    { subject: 'العربي', successRate: 89, averageScore: 78 },
    { subject: 'الإنجليزي', successRate: 85, averageScore: 76 },
    { subject: 'العلوم', successRate: 87, averageScore: 79 },
    { subject: 'التاريخ', successRate: 91, averageScore: 81 },
    { subject: 'الجغرافيا', successRate: 88, averageScore: 77 }
  ];

  const schoolsComparison = [
    { name: 'مدرسة مرج الحمام', performance: 87.5, students: 850 },
    { name: 'مدرسة الجبيهة', performance: 82.1, students: 720 },
    { name: 'مدرسة طبربور', performance: 89.3, students: 950 },
    { name: 'مدرسة ضاحية الرشيد', performance: 84.7, students: 680 },
    { name: 'مدرسة وادي السير', performance: 91.2, students: 780 }
  ];

  const pieChartColors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];

  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: Home },
    { id: 'reports', label: 'التقارير العامة', icon: FileText },
    { id: 'statistics', label: 'الإحصائيات', icon: BarChart3 },
    { id: 'comparison', label: 'مقارنة الأداء', icon: Building2 }
  ];

  const handleExportReport = (format: string) => {
    console.log(`Exporting report in ${format} format`);
    // هنا سيتم تنفيذ عملية التصدير
  };

  const renderDashboard = () => (
    <div className="space-y-4 lg:space-y-6">
      {/* مؤشرات الأداء الرئيسية */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 lg:p-4 rounded-lg text-white">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 lg:w-6 lg:h-6" />
            <div>
              <p className="text-xs lg:text-sm opacity-90">إجمالي الطلاب</p>
              <p className="text-lg lg:text-xl font-bold">{kpiData.totalStudents}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 lg:p-4 rounded-lg text-white">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6" />
            <div>
              <p className="text-xs lg:text-sm opacity-90">التخصصات</p>
              <p className="text-lg lg:text-xl font-bold">{kpiData.totalSpecializations}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 lg:p-4 rounded-lg text-white">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />
            <div>
              <p className="text-xs lg:text-sm opacity-90">معدل النجاح</p>
              <p className="text-lg lg:text-xl font-bold">{kpiData.successRate}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 lg:p-4 rounded-lg text-white">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 lg:w-6 lg:h-6" />
            <div>
              <p className="text-xs lg:text-sm opacity-90">معدل الغياب</p>
              <p className="text-lg lg:text-xl font-bold">{kpiData.absenceRate}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 lg:p-4 rounded-lg text-white">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 lg:w-6 lg:h-6" />
            <div>
              <p className="text-xs lg:text-sm opacity-90">المعلمين</p>
              <p className="text-lg lg:text-xl font-bold">{kpiData.teacherCount}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 lg:p-4 rounded-lg text-white">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 lg:w-6 lg:h-6" />
            <div>
              <p className="text-xs lg:text-sm opacity-90">تقييم المدرسة</p>
              <p className="text-lg lg:text-xl font-bold">{kpiData.schoolRating}/5</p>
            </div>
          </div>
        </div>
      </div>

      {/* الرسوم البيانية */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* توزيع الطلاب حسب التخصص */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
          <h3 className="text-lg lg:text-xl font-bold mb-4 text-gray-800">توزيع الطلاب حسب التخصص</h3>
          <div className="h-64 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={specializationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="students"
                >
                  {specializationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieChartColors[index % pieChartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* معدلات الحضور */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
          <h3 className="text-lg lg:text-xl font-bold mb-4 text-gray-800">معدلات الحضور الشهرية</h3>
          <div className="h-64 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
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
      </div>

      {/* أداء المواد */}
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <h3 className="text-lg lg:text-xl font-bold mb-4 text-gray-800">أداء المواد الدراسية</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm lg:text-base">
            <thead>
              <tr className="border-b">
                <th className="text-right p-2 lg:p-3">المادة</th>
                <th className="text-center p-2 lg:p-3">معدل النجاح</th>
                <th className="text-center p-2 lg:p-3">المتوسط العام</th>
                <th className="text-center p-2 lg:p-3">التقييم</th>
              </tr>
            </thead>
            <tbody>
              {subjectPerformance.map((subject, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-2 lg:p-3 font-medium">{subject.subject}</td>
                  <td className="text-center p-2 lg:p-3">
                    <span className={`px-2 py-1 rounded text-xs lg:text-sm ${
                      subject.successRate >= 85 ? 'bg-green-100 text-green-800' : 
                      subject.successRate >= 75 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {subject.successRate}%
                    </span>
                  </td>
                  <td className="text-center p-2 lg:p-3">{subject.averageScore}</td>
                  <td className="text-center p-2 lg:p-3">
                    {subject.successRate >= 85 ? '🟢 ممتاز' : 
                     subject.successRate >= 75 ? '🟡 جيد' : '🔴 يحتاج تحسين'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-4 lg:space-y-6">
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800">التقارير العامة</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => handleExportReport('pdf')}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              تصدير PDF
            </button>
            <button 
              onClick={() => handleExportReport('excel')}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              تصدير Excel
            </button>
          </div>
        </div>

        {/* تقرير الأداء العام */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 lg:p-6 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-3">الأداء الأكاديمي</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li>• معدل النجاح العام: 87.5%</li>
              <li>• أعلى تخصص أداءً: المعلوماتية (92%)</li>
              <li>• أقل تخصص أداءً: التجاري (82%)</li>
              <li>• متوسط الدرجات: 77.2</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 lg:p-6 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-3">الحضور والانضباط</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li>• معدل الحضور العام: 87.7%</li>
              <li>• أفضل شهر: نوفمبر (90%)</li>
              <li>• أسوأ شهر: أكتوبر (85%)</li>
              <li>• حالات الغياب المبرر: 78%</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 lg:p-6 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-3">الكادر التعليمي</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li>• عدد المعلمين: 45</li>
              <li>• نسبة الطلاب للمعلمين: 19:1</li>
              <li>• المعلمين المؤهلين: 91%</li>
              <li>• دورات التطوير: 23 دورة</li>
            </ul>
          </div>
        </div>

        {/* التقارير التفصيلية */}
        <div className="space-y-4">
          <h3 className="text-lg lg:text-xl font-bold text-gray-800">التقارير التفصيلية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'تقرير شهري مفصل', desc: 'تحليل شامل لأداء الطلاب والحضور' },
              { title: 'تقرير التخصصات', desc: 'مقارنة أداء التخصصات المختلفة' },
              { title: 'تقرير المعلمين', desc: 'تقييم أداء الكادر التعليمي' },
              { title: 'تقرير المرافق', desc: 'حالة المرافق والتجهيزات' }
            ].map((report, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-800 mb-2">{report.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{report.desc}</p>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  عرض التقرير ←
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatistics = () => (
    <div className="space-y-4 lg:space-y-6">
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">الإحصائيات التفصيلية</h2>

        {/* اتجاهات الأداء */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">اتجاهات الأداء السنوية</h3>
          <div className="h-64 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={3} name="الحضور" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* إحصائيات التخصصات */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">مقارنة التخصصات</h3>
          <div className="h-64 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={specializationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="successRate" fill="#10b981" name="معدل النجاح" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* احصائيات مفصلة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'معدل التخرج', value: '94.2%', trend: '+2.1%', color: 'green' },
            { title: 'معدل الرسوب', value: '5.8%', trend: '-1.3%', color: 'red' },
            { title: 'التحاق بالجامعات', value: '67%', trend: '+4.2%', color: 'blue' },
            { title: 'التحاق بسوق العمل', value: '28%', trend: '+1.8%', color: 'purple' }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-medium text-gray-600 text-sm">{stat.title}</h4>
              <p className="text-2xl font-bold text-gray-800 my-2">{stat.value}</p>
              <p className={`text-sm ${stat.color === 'green' ? 'text-green-600' : 
                stat.color === 'red' ? 'text-red-600' : 
                stat.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}`}>
                {stat.trend} من العام الماضي
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderComparison = () => (
    <div className="space-y-4 lg:space-y-6">
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">مقارنة الأداء مع المدارس الأخرى</h2>

        {/* مقارنة المدارس */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">ترتيب المدارس حسب الأداء</h3>
          <div className="h-64 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={schoolsComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="performance" fill="#3b82f6" name="معدل الأداء" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* جدول المقارنة */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm lg:text-base">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-right p-3">المدرسة</th>
                <th className="text-center p-3">معدل الأداء</th>
                <th className="text-center p-3">عدد الطلاب</th>
                <th className="text-center p-3">الترتيب</th>
                <th className="text-center p-3">التقييم</th>
              </tr>
            </thead>
            <tbody>
              {schoolsComparison
                .sort((a, b) => b.performance - a.performance)
                .map((school, index) => (
                <tr key={index} className={`border-b hover:bg-gray-50 ${
                  school.name === 'مدرسة مرج الحمام' ? 'bg-blue-50 border-blue-200' : ''
                }`}>
                  <td className="p-3 font-medium">
                    {school.name}
                    {school.name === 'مدرسة مرج الحمام' && <span className="text-blue-600 mr-2">📍</span>}
                  </td>
                  <td className="text-center p-3">
                    <span className={`px-2 py-1 rounded text-sm ${
                      school.performance >= 90 ? 'bg-green-100 text-green-800' : 
                      school.performance >= 85 ? 'bg-blue-100 text-blue-800' : 
                      school.performance >= 80 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {school.performance}%
                    </span>
                  </td>
                  <td className="text-center p-3">{school.students}</td>
                  <td className="text-center p-3">#{index + 1}</td>
                  <td className="text-center p-3">
                    {school.performance >= 90 ? '🏆 متفوق' : 
                     school.performance >= 85 ? '🥈 جيد جداً' : 
                     school.performance >= 80 ? '🥉 جيد' : '📈 يحتاج تحسين'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* نقاط القوة والضعف */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-green-50 p-4 lg:p-6 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-4">نقاط القوة</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li>✅ أداء متميز في تخصص المعلوماتية</li>
              <li>✅ استقرار في معدلات الحضور</li>
              <li>✅ تنوع في التخصصات المقدمة</li>
              <li>✅ كادر تعليمي مؤهل</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 lg:p-6 rounded-lg border border-red-200">
            <h3 className="font-bold text-red-800 mb-4">نقاط تحتاج تحسين</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li>⚠️ تحسين أداء التخصص التجاري</li>
              <li>⚠️ زيادة معدلات الحضور في أكتوبر</li>
              <li>⚠️ تطوير برامج الدعم الإضافي</li>
              <li>⚠️ تحديث المرافق التعليمية</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg relative">
        <div className="px-4 lg:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">🎯 لوحة تحكم موظف الوزارة</h1>
            <p className="text-blue-100 text-sm lg:text-base">مراقبة أداء المدرسة والتقييم العام</p>
          </div>
          <div className="hidden md:block text-left">
            <p className="font-medium text-sm lg:text-base">مدرسة مرج الحمام المهنية الثانوية</p>
            <p className="text-xs lg:text-sm text-blue-200">صلاحية القراءة فقط</p>
          </div>
          {/* زر فتح القائمة للموبايل */}
          <button 
            className="md:hidden p-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Overlay لما تفتح القائمة على الموبايل */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`fixed md:static top-0 right-0 w-64 bg-white shadow-lg min-h-screen z-50 transform transition-transform duration-300 
          ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
          <div className="flex items-center justify-between p-4 border-b md:hidden">
            <h2 className="font-bold text-gray-700">القائمة</h2>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
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
        <main className="flex-1 p-4 lg:p-6 overflow-x-auto">
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