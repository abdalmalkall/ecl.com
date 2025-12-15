    import React, { useState, useRef, useEffect } from "react";
 
    // ---------- Types ----------
    interface Note {
    id: number;
    text: string;
    date?: string;
    category?: 'academic' | 'behavior' | 'participation';
    studentName?: string;
    }

    interface Message {
    id: number;
    sender: "student" | "teacher";
    content: string;
    timestamp: Date;
    status?: 'sent' | 'delivered' | 'read';
    studentName?: string;
    }

    interface Student {
    id: string;
    name: string;
    avatar?: string;
    grade: string;
    status?: 'online' | 'offline' | 'away';
    }

    interface FileLink {
    id: number;
    title: string;
    url: string;
    type?: 'document' | 'video' | 'image' | 'link';
    size?: string;
    uploadedBy?: 'teacher' | 'student';
    studentName?: string;
    }

    interface Teacher {
    nationalId: string;
    username: string;
    fullName: string;
    subject: string;
    classes: string[];
    email: string;
    avatar?: string;
    experience?: number;
    studentsCount?: number;
    classesCount?: number;
    }

    // ---------- Sample Data ----------
    const teacher: Teacher = {
    nationalId: "198512345678",
    username: "hamzeh.teacher",
    fullName: "حمزة  المناصير",
    subject: "إدارة اعمال",
    classes: ["الصف العاشر ", "الصف الحادي عشر ", "الصف الثاني عشر "],
    email: "hamzeh@school.edu.jo",
    avatar: "",
    experience: 12,
    studentsCount: 85,
    classesCount: 3,
    };

    const students: Student[] = [
    { id: "1", name: "عبد الملك", avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg", grade: "الثاني عشر ج", status: 'online' },
    { id: "2", name: " فهد", grade: "ثاني عشر", status: 'offline' },
    { id: "3", name: "صهيب", grade: "ثاني عشر", status: 'away' },
    { id: "4", name: " امير", grade: "الثاني عشر ", status: 'online' },
    ];

    const teacherNotes: Note[] = [
    { id: 1, text: "حققت نتائج ممتازة في تدريس وحدة الجبر المتقدم", date: "2024-03-15", category: 'academic' },
    { id: 2, text: "تم تطوير طرق تدريس تفاعلية جديدة لمادة إدارة الاعمال    ", date: "2024-03-14", category: 'academic' },
    { id: 3, text: "المشاركة الفعالة في اجتماعات أولياء الأمور", date: "2024-03-13", category: 'participation' },
    { id: 4, text: "إنجاز مشروع تطوير المناهج بنجاح", date: "2025-03-12", category: 'academic' },
    { id: 5, text: "تقدير من الإدارة لالتزام بالمواعيد والانضباط", date: "2024-03-11", category: 'behavior' },
    ];

    const studentNotes: Note[] = [
    { id: 1, text: "متفوق في الرياضيات والعلوم بشكل استثنائي", date: "2024-03-15", category: 'academic', studentName: "عبد الملك" },
    { id: 2, text: "تحسن ملحوظ في مشاركة الطالبة في النقاشات الصفية", date: "2024-03-14", category: 'participation', studentName: "فهد" },
    { id: 3, text: "يحتاج لتحسين إدارة الوقت في الامتحانات", date: "2024-03-13", category: 'academic', studentName: "صهيب" },
    { id: 4, text: "أداء ممتاز في مشروع الفيزياء التطبيقية", date: "2024-03-12", category: 'academic', studentName: "امير" },
    ];

    const initialMessages: Message[] = [
    { 
        id: 1, 
        sender: "student", 
        content: "أستاذ حمزة، شكراً لك على الشرح الرائع لدرس اليوم!", 
        timestamp: new Date(Date.now() - 3600000),
        status: 'read',
        studentName: "عبد الملك"
    },
    { 
        id: 2, 
        sender: "teacher", 
        content: "العفو يا عبد الملك، أسعدني تفاعلكم الإيجابي. هل هناك أي نقطة تحتاج توضيح إضافي؟", 
        timestamp: new Date(Date.now() - 3000000),
        status: 'read'
    },
    { 
        id: 3, 
        sender: "student", 
        content: "أستاذ، هل يمكنك إرسال ملف التمارين الإضافية؟", 
        timestamp: new Date(Date.now() - 1800000),
        status: 'read',
        studentName: "صهيب"
    },
    { 
        id: 4, 
        sender: "teacher", 
        content: "بالطبع صهيب، سأقوم برفع الملف الآن في قسم الملفات.", 
        timestamp: new Date(Date.now() - 1200000),
        status: 'delivered'
    },
    ];

    const teacherLinks: FileLink[] = [
    { id: 1, title: "خطة التدريس السنوية - الرياضيات", url: "https://example.com/plan", type: 'document', size: "3.2 MB", uploadedBy: 'teacher' },
    { id: 2, title: "عرض تقديمي - الجبر المتقدم", url: "https://example.com/algebra", type: 'document', size: "2.1 MB", uploadedBy: 'teacher' },
    { id: 3, title: "فيديو تعليمي - قوانين نيوتن", url: "https://example.com/newton", type: 'video', size: "68 MB", uploadedBy: 'teacher' },
    { id: 4, title: "تمارين إضافية - الهندسة", url: "https://example.com/geometry", type: 'document', size: "1.5 MB", uploadedBy: 'teacher' },
    { id: 5, title: "مشروع الطالب عبد الملك - الفيزياء", url: "https://example.com/ibrahim-project", type: 'document', size: "4.8 MB", uploadedBy: 'student', studentName: "عبدالملك" },
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
    const StatsCard: React.FC<{ title: string; value: string | number; icon: string; gradient: string }> = 
    ({ title, value, icon, gradient }) => (
    <div className={`${gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200/30`}>
        <div className="flex items-center justify-between">
        <div>
            <div className="text-3xl font-bold text-blue-900 mb-1">{value}</div>
            <div className="text-blue-800 text-sm font-medium">{title}</div>
        </div>
        <div className="text-4xl opacity-80 filter drop-shadow-sm">{icon}</div>
        </div>
    </div>
    );

    // Profile Header Component
    const ProfileHeader: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
    const stats = [
    
        { title: "عدد الطلاب", value: teacher.studentsCount, icon: "👥", gradient: "bg-gradient-to-br from-indigo-100 to-blue-200" },
        { title: "عدد الصفوف", value: teacher.classesCount, icon: "🏫", gradient: "bg-gradient-to-br from-blue-200 to-cyan-100" },
        { title: "التقييم العام", value: "ممتاز", icon: "⭐", gradient: "bg-gradient-to-br from-cyan-100 to-blue-200" },
    ];

    return (
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 p-8 rounded-3xl shadow-xl mb-8 border border-blue-200/50">
        <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
            <div className="p-1 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full">
                <img
                src={teacher.avatar || "/api/placeholder/120/120"}
                alt={teacher.fullName}
                className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
            
            </div>
            </div>
            
            <div className="text-center md:text-right flex-1">
            <h1 className="text-4xl font-bold mb-3 text-blue-900 drop-shadow-sm">{teacher.fullName}</h1>
            <div className="space-y-2 text-blue-800">
                <p className="text-lg font-medium">📚 معلم {teacher.subject}</p>
                <p className="text-base">👤 {teacher.username} | 🆔 {teacher.nationalId}</p>
                <p className="text-base">📧 {teacher.email}</p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                {teacher.classes.map((className, index) => (
                <span 
                    key={index} 
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-800 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                    {className}
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

    // Notes Section Component for Teacher Performance
    const TeacherNotesSection: React.FC<{ 
    title: string; 
    notes: Note[]; 
    }> = ({ title, notes }) => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200/50">
        <h2 className="font-bold text-xl mb-6 flex items-center gap-3 text-blue-700">
            <span className="text-2xl">🎯</span>
            {title}
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
            {notes.length}
            </span>
        </h2>
        
        <div className="space-y-4">
            {notes.map((note) => (
            <div key={note.id} className="p-4 rounded-xl border-r-4 bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300 text-blue-800 shadow-sm hover:shadow-md transition-all duration-300">
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

    // Student Notes Management Component
    const StudentNotesManagement: React.FC<{ 
    notes: Note[];
    students: Student[];
    onAddNote: (note: Omit<Note, 'id'>) => void;
    }> = ({ notes, students, onAddNote }) => {
    const [showAddNote, setShowAddNote] = useState(false);
    const [newNote, setNewNote] = useState({
        text: '',
        category: 'academic' as 'academic' | 'behavior' | 'participation',
        studentName: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newNote.text.trim() && newNote.studentName) {
        onAddNote({
            text: newNote.text,
            category: newNote.category,
            studentName: newNote.studentName,
            date: new Date().toISOString().split('T')[0]
        });
        setNewNote({ text: '', category: 'academic', studentName: '' });
        setShowAddNote(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200/50">
        <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-xl flex items-center gap-3 text-green-700">
            <span className="text-2xl">📝</span>
            ملاحظات الطلاب
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                {notes.length}
            </span>
            </h2>
            <button
            onClick={() => setShowAddNote(!showAddNote)}
            className="px-4 py-2 bg-gradient-to-r from-green-200 to-emerald-200 text-green-800 rounded-xl hover:shadow-md transition-all duration-300 border border-green-300 font-medium"
            >
            ➕ إضافة ملاحظة
            </button>
        </div>

        {showAddNote && (
            <div className="mb-6 p-4 bg-white rounded-xl border border-green-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <select
                    value={newNote.studentName}
                    onChange={(e) => setNewNote({...newNote, studentName: e.target.value})}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                    required
                >
                    <option value="">اختر الطالب</option>
                    {students.map((student) => (
                    <option key={student.id} value={student.name}>{student.name}</option>
                    ))}
                </select>
                </div>
                <div>
                <select
                    value={newNote.category}
                    onChange={(e) => setNewNote({...newNote, category: e.target.value as any})}
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                    <option value="academic">أكاديمي</option>
                    <option value="behavior">سلوكي</option>
                    <option value="participation">مشاركة</option>
                </select>
                </div>
                <div>
                <textarea
                    value={newNote.text}
                    onChange={(e) => setNewNote({...newNote, text: e.target.value})}
                    placeholder="اكتب الملاحظة..."
                    className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 min-h-[100px]"
                    required
                />
                </div>
                <div className="flex gap-2">
                <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                    حفظ
                </button>
                <button
                    type="button"
                    onClick={() => setShowAddNote(false)}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                    إلغاء
                </button>
                </div>
            </form>
            </div>
        )}
        
        <div className="space-y-4 max-h-96 overflow-y-auto">
            {notes.map((note) => (
            <div key={note.id} className="p-4 rounded-xl border-r-4 bg-gradient-to-r from-green-100 to-emerald-100 border-green-300 text-green-800 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">{getCategoryIcon(note.category)}</span>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-green-900">{note.studentName}</span>
                    <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">{note.category}</span>
                    </div>
                    <p className="font-medium mb-2 leading-relaxed">{note.text}</p>
                    <div className="text-sm opacity-75">
                    <span>📅 {note.date}</span>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    // Students List Component
    const StudentsSection: React.FC<{ students: Student[] }> = ({ students }) => {
    return (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200/50">
        <h2 className="font-bold text-xl mb-6 flex items-center gap-3 text-purple-700">
            <span className="text-2xl">👥</span>
            قائمة الطلاب
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
            {students.length}
            </span>
        </h2>
        
        <div className="grid gap-4">
            {students.map((student) => (
            <div key={student.id} className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 border border-purple-200">
                <div className="relative">
                <img
                    src={student.avatar || "/api/placeholder/50/50"}
                    alt={student.name}
                    className="w-12 h-12 rounded-full border-2 border-purple-200"
                />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    student.status === 'online' ? 'bg-green-500' : 
                    student.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                }`}></div>
                </div>
                <div className="flex-1">
                <div className="font-medium text-purple-900">{student.name}</div>
                <div className="text-sm text-purple-700">{student.grade}</div>
                </div>
                <div className="text-sm text-purple-600">
                {student.status === 'online' ? '🟢 متصل' : 
                student.status === 'away' ? '🟡 بعيد' : '⚪ غير متصل'}
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    // Files Section Component with Teacher Permissions
    const TeacherFilesSection: React.FC<{
    uploadedFiles: File[];
    links: FileLink[];
    onFileUpload: (files: File[]) => void;
    onDeleteFile: (id: number) => void;
    }> = ({ uploadedFiles, links, onFileUpload, onDeleteFile }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        onFileUpload(Array.from(e.target.files));
        }
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200/50">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-blue-900">
            <span className="text-2xl">📁</span>
            إدارة الملفات التعليمية
        </h2>
        
        {/* Upload Section */}
        <div className="mb-8">
            <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-blue-300 rounded-2xl p-8 text-center hover:border-blue-400 hover:bg-blue-100/50 transition-all duration-300 cursor-pointer group"
            >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">☁️</div>
            <p className="text-blue-800 font-medium mb-2">رفع ملفات تعليمية جديدة</p>
            <p className="text-sm text-blue-700">اسحب الملفات وأفلتها هنا أو اضغط للاختيار</p>
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
            <h3 className="font-semibold mb-4 text-blue-800 flex items-center gap-2">
                <span>📤</span>
                الملفات المرفوعة حديثاً:
            </h3>
            <div className="space-y-3">
                {uploadedFiles.map((file, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                    <span className="text-xl">📎</span>
                    <div className="flex-1">
                    <div className="font-medium text-blue-900">{file.name}</div>
                    <div className="text-sm text-blue-700">{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
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
            <h3 className="font-semibold mb-4 text-blue-800 flex items-center gap-2">
            <span>🔗</span>
            المحتوى التعليمي والملفات:
            </h3>
            <div className="grid gap-3">
            {links.map((link) => (
                <div
                key={link.id}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl hover:shadow-md transition-all duration-300 border border-cyan-200 group"
                >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{getFileIcon(link.type)}</span>
                <div className="flex-1">
                    <div className="font-medium text-blue-900 group-hover:text-cyan-700">{link.title}</div>
                    <div className="text-sm text-blue-700">
                    {link.size} • {link.type}
                    {link.uploadedBy === 'student' && (
                        <span className="ml-2 px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">
                        من الطالب: {link.studentName}
                        </span>
                    )}
                    </div>
                </div>
                <div className="flex gap-2">
                    <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-cyan-600 transition-colors p-2 rounded-lg hover:bg-blue-100"
                    >
                    ↗️
                    </a>
                    <button 
                    onClick={() => onDeleteFile(link.id)}
                    className="text-red-600 hover:bg-red-100 p-2 rounded-lg transition-colors"
                    >
                    🗑️
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    // Chat Component for Teacher
    const TeacherChatSection: React.FC<{
    students: Student[];
    messages: Message[];
    newMessage: string;
    selectedStudent: string;
    onMessageChange: (message: string) => void;
    onStudentChange: (studentName: string) => void;
    onSendMessage: () => void;
    }> = ({ students, messages, newMessage, selectedStudent, onMessageChange, onStudentChange, onSendMessage }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isTyping, setIsTyping] = useState(false);

  

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSendMessage();
        setIsTyping(false);
        }
    };

    // Filter messages for selected student or show all if no student selected
    const filteredMessages = selectedStudent 
        ? messages.filter(msg => 
            msg.sender === 'teacher' || 
            (msg.sender === 'student' && msg.studentName === selectedStudent)
        )
        : messages;

    return (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-200/50">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-200 to-cyan-300 p-6 border-b border-blue-300">
            <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-blue-900">💬 محادثات الطلاب</h2>
            <select
                value={selectedStudent}
                onChange={(e) => onStudentChange(e.target.value)}
                className="px-4 py-2 bg-white rounded-lg border border-blue-200 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value="">جميع الطلاب</option>
                {students.map((student) => (
                <option key={student.id} value={student.name}>{student.name}</option>
                ))}
            </select>
            </div>
            {selectedStudent && (
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                👤
                </div>
                <div>
                <div className="font-semibold text-blue-900">{selectedStudent}</div>
                <div className="text-blue-700 text-sm">الطالب المحدد للمحادثة</div>
                </div>
            </div>
            )}
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-6 bg-gradient-to-b from-cyan-50/50 to-blue-50/50">
            <div className="space-y-4">
            {filteredMessages.map((msg) => (
                <div
                key={msg.id}
                className={`flex ${msg.sender === "teacher" ? "justify-end" : "justify-start"}`}
                >
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm border ${
                    msg.sender === "teacher"
                    ? "bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-900 rounded-br-sm border-blue-300"
                    : "bg-white border-blue-200 rounded-bl-sm text-gray-800"
                }`}>
                    {msg.sender === 'student' && msg.studentName && (
                    <div className="text-xs font-medium text-blue-600 mb-1">
                        {msg.studentName}
                    </div>
                    )}
                    <p className="text-sm leading-relaxed font-medium">{msg.content}</p>
                    <div className={`text-xs mt-2 ${
                    msg.sender === "teacher" ? "text-blue-700" : "text-gray-500"
                    }`}>
                    {formatTimestamp(msg.timestamp)}
                    {msg.sender === "teacher" && (
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
                <div className="bg-white border border-blue-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                </div>
                </div>
            )}
            
            <div ref={messagesEndRef} />
            </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-blue-200 bg-gradient-to-r from-blue-100/50 to-cyan-100/50">
            {!selectedStudent && (
            <div className="mb-3 text-sm text-blue-600 bg-blue-100 p-2 rounded-lg">
                💡 اختر طالباً محدداً للمحادثة المباشرة معه
            </div>
            )}
            <div className="flex gap-3">
            <input
                type="text"
                value={newMessage}
                onChange={(e) => {
                onMessageChange(e.target.value);
                setIsTyping(e.target.value.length > 0);
                }}
                onKeyPress={handleKeyPress}
                placeholder={selectedStudent ? `رسالة إلى ${selectedStudent}...` : "اكتب رسالتك هنا... 💭"}
                className="flex-1 p-3 border border-blue-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-800 placeholder-blue-600"
                disabled={!selectedStudent}
            />
            <button
                onClick={onSendMessage}
                disabled={!newMessage.trim() || !selectedStudent}
                className="px-6 py-3 bg-gradient-to-r from-blue-300 to-cyan-400 text-blue-900 font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 border border-blue-400"
            >
                📤
            </button>
            </div>
        </div>
        </div>
    );
    };

    // ---------- Main Component ----------
    export default function TeacherProfile(): JSX.Element {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [newMessage, setNewMessage] = useState<string>("");
    const [selectedStudent, setSelectedStudent] = useState<string>("");
    const [studentNotesList, setStudentNotesList] = useState<Note[]>(studentNotes);
    const [teacherFilesList, setTeacherFilesList] = useState<FileLink[]>(teacherLinks);

    const handleFileUpload = (files: File[]): void => {
        setUploadedFiles(prev => [...prev, ...files]);
    };

    const handleDeleteFile = (id: number): void => {
        setTeacherFilesList(prev => prev.filter(file => file.id !== id));
    };

    const handleSendMessage = (): void => {
        if (newMessage.trim() === "" || !selectedStudent) return;
        
        const newMsg: Message = {
        id: messages.length + 1,
        sender: "teacher",
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

    const handleAddStudentNote = (note: Omit<Note, 'id'>): void => {
        const newNote: Note = {
        id: studentNotesList.length + 1,
        ...note
        };
        setStudentNotesList(prev => [...prev, newNote]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Back Button */}
            <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-200 text-blue-900 font-medium"
            >
            <span className="text-lg">←</span>
            <span>العودة للصفحة الرئيسية</span>
            </button>

            {/* Profile Header */}
            <ProfileHeader teacher={teacher} />

            {/* Teacher Performance Section */}
            <TeacherNotesSection 
            title="إنجازات وتقييمات الأداء التدريسي" 
            notes={teacherNotes} 
            />

            {/* Students Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <StudentsSection students={students} />
            <StudentNotesManagement 
                notes={studentNotesList}
                students={students}
                onAddNote={handleAddStudentNote}
            />
            </div>

            {/* Files and Chat Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TeacherFilesSection
                uploadedFiles={uploadedFiles}
                links={teacherFilesList}
                onFileUpload={handleFileUpload}
                onDeleteFile={handleDeleteFile}
            />
            
            <TeacherChatSection
                students={students}
                messages={messages}
                newMessage={newMessage}
                selectedStudent={selectedStudent}
                onMessageChange={setNewMessage}
                onStudentChange={setSelectedStudent}
                onSendMessage={handleSendMessage}
            />
            </div>
        </div>
        </div>
    );
    }