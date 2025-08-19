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
    avatar?: string;
    grade?: string;
    gpa?: number;
    attendanceRate?: number;
    }

    // ---------- Sample Data ----------
    const student: Student = {
    nationalId: "200512345678",
    username: "ibrahim123",
    fullName: "إبراهيم يوسف ",
    specialization: "إدارة أعمال",
    subjects: ["دين", "عربي", "رياضيات", "فيزياء"],
    grade: "الصف الثاني عشر",
    gpa: 3.8,
    attendanceRate: 92,
    avatar: "https://i.pinimg.com/736x/60/a1/71/60a1719d559469dbb6bfa1b6d0890e5e.jpg",
    teacher: { 
        name: "حمزة المناصير", 
        email: "hamzeh@school.edu.jo",
        avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
        status: 'online'
    },
    notesPositive: [
        { id: 1, text: "متفوق في الرياضيات والعلوم", date: "2024-03-15", category: 'academic' },
        { id: 2, text: "ملتزم بالحضور اليومي بنسبة عالية", date: "2024-03-14", category: 'behavior' },
        { id: 3, text: "يشارك بفعالية في الأنشطة المدرسية", date: "2024-03-13", category: 'participation' },
        { id: 4, text: "يساعد زملاءه في فهم الدروس", date: "2024-03-12", category: 'behavior' },
    ],
    notesNegative: [
        { id: 1, text: "يحتاج لتحسين إدارة الوقت في الامتحانات", date: "2024-03-10", category: 'academic' },
        { id: 2, text: "تأخر في تسليم مشروع الفيزياء", date: "2024-03-08", category: 'academic' },
    ],
    links: [
        { id: 1, title: "دليل الطالب الأكاديمي", url: "https://example.com/guide", type: 'document', size: "2.5 MB" },
        { id: 2, title: "مشروع العلوم - العرض التقديمي", url: "https://example.com/presentation", type: 'document', size: "1.8 MB" },
        { id: 3, title: "فيديو شرح الرياضيات", url: "https://example.com/video", type: 'video', size: "45 MB" },
        { id: 4, title: "صور رحلة المدرسة", url: "https://example.com/photos", type: 'image', size: "12 MB" },
    ],
    };

    // ---------- Initial Messages ----------
    const initialMessages: Message[] = [
    { 
        id: 1, 
        sender: "teacher", 
        content: "مرحباً إبراهيم! أود أن أهنئك على أدائك المتميز في امتحان الرياضيات الأخير. استمر في التفوق! 👏", 
        timestamp: new Date(Date.now() - 3600000),
        status: 'read'
    },
    { 
        id: 2, 
        sender: "student", 
        content: "شكراً لك أستاذ حمزة! سأبذل قصارى جهدي للحفاظ على هذا المستوى.", 
        timestamp: new Date(Date.now() - 3000000),
        status: 'read'
    },
    { 
        id: 3, 
        sender: "teacher", 
        content: "ممتاز! لا تنس أن مشروع الفيزياء مطلوب تسليمه الأسبوع القادم. هل تحتاج أي مساعدة؟", 
        timestamp: new Date(Date.now() - 1800000),
        status: 'read'
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
    <div className="p-6 rounded-2xl bg-beige-50 border border-beige-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
        <div className="flex items-center justify-between">
        <div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
            <div className="text-gray-600 text-sm">{title}</div>
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
        <div className="bg-beige-50 p-8 rounded-3xl shadow-md mb-8 text-gray-800">
        <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
            <img
                src={student.avatar || "/api/placeholder/120/120"}
                alt={student.fullName}
                className="w-32 h-32 rounded-full border-2 border-beige-100 shadow-lg object-cover"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
            </div>
            </div>
            
            <div className="text-center md:text-right flex-1">
            <h1 className="text-4xl font-bold mb-2">{student.fullName}</h1>
            <div className="space-y-1 text-gray-700">
                <p className="text-lg">🎓 {student.specialization} - {student.grade}</p>
                <p>👤 {student.username} | 🆔 {student.nationalId}</p>
                <p>📧 البريد الإلكتروني: student@school.edu.jo</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
                {student.subjects.map((subject, index) => (
                <span 
                    key={index} 
                    className="px-3 py-1 bg-beige-100 rounded-full text-sm border border-beige-200"
                >
                    {subject}
                </span>
                ))}
            </div>
            </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
            ))}
        </div>
        </div>
    );
    };

    // Notes Component
    const NotesSection: React.FC<{ 
    title: string; 
    notes: Note[]; 
    type: 'positive' | 'negative';
    }> = ({ title, notes, type }) => {
    const colorClasses = type === 'positive' 
        ? 'bg-beige-50 border-beige-200 text-gray-800'
        : 'bg-beige-50 border-beige-200 text-gray-800';
        
    const headerColor = 'text-gray-800';
    const icon = type === 'positive' ? '✅' : '⚠️';

    return (
        <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        <h2 className={`font-bold text-xl mb-6 flex items-center gap-3 ${headerColor}`}>
            <span className="text-2xl">{icon}</span>
            {title}
            <span className={`px-2 py-1 rounded-full text-sm ${colorClasses}`}>
            {notes.length}
            </span>
        </h2>
        
        <div className="space-y-4">
            {notes.map((note) => (
            <div key={note.id} className={`p-4 rounded-xl border-l-4 ${colorClasses}`}>
                <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">{getCategoryIcon(note.category)}</span>
                <div className="flex-1">
                    <p className="font-medium mb-2">{note.text}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>📅 {note.date}</span>
                    {note.category && (
                        <>
                        <span>•</span>
                        <span className="capitalize">{note.category}</span>
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
        <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
            <span className="text-2xl">📁</span>
            الملفات والروابط
        </h2>
        
        {/* Upload Section */}
        <div className="mb-8">
            <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-gray-500 hover:bg-beige-50 transition-all duration-300 cursor-pointer"
            >
            <div className="text-4xl mb-4">☁️</div>
            <p className="text-gray-600 font-medium mb-2">اضغط هنا لرفع الملفات</p>
            <p className="text-sm text-gray-500">أو اسحب الملفات وأفلتها هنا</p>
            </div>
            <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            />
        </div>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
            <div className="mb-6">
            <h3 className="font-semibold mb-4 text-gray-700">الملفات المرفوعة:</h3>
            <div className="space-y-2">
                {uploadedFiles.map((file, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-beige-50 rounded-xl border border-beige-100">
                    <span className="text-xl">📎</span>
                    <div className="flex-1">
                    <div className="font-medium text-gray-800">{file.name}</div>
                    <div className="text-sm text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
                    </div>
                    <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                    🗑️
                    </button>
                </div>
                ))}
            </div>
            </div>
        )}

        {/* Links */}
        <div>
            <h3 className="font-semibold mb-4 text-gray-700">الروابط المهمة:</h3>
            <div className="grid gap-3">
            {links.map((link) => (
                <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-beige-50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                <span className="text-2xl">{getFileIcon(link.type)}</span>
                <div className="flex-1">
                    <div className="font-medium text-gray-800">{link.title}</div>
                    <div className="text-sm text-gray-500">{link.size}</div>
                </div>
                <span className="text-gray-700">↗️</span>
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

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSendMessage();
        }
    };

    return (
        <div className="rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        {/* Chat Header */}
        <div className="p-6 bg-beige-100 text-gray-800">
            <div className="flex items-center gap-4">
            <div className="relative">
                <img
                src={teacher.avatar || "/api/placeholder/50/50"}
                alt={teacher.name}
                className="w-12 h-12 rounded-full border-2 border-beige-200"
                />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                teacher.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
            </div>
            <div>
                <h2 className="text-xl font-bold">{teacher.name}</h2>
                <p className="text-gray-600 text-sm">{teacher.email}</p>
                <p className="text-gray-500 text-xs">
                {teacher.status === 'online' ? '🟢 متاح الآن' : '⚪ غير متاح'}
                </p>
            </div>
            </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-6 bg-beige-50">
            <div className="space-y-4">
            {messages.map((msg) => (
                <div
                key={msg.id}
                className={`flex ${msg.sender === "student" ? "justify-end" : "justify-start"}`}
                >
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                    msg.sender === "student"
                    ? "bg-beige-100 text-gray-800 rounded-br-sm"
                    : "bg-white border border-beige-100 rounded-bl-sm"
                }`}>
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <div className={`text-xs mt-2 text-gray-500`}>
                    {formatTimestamp(msg.timestamp)}
                    {msg.sender === "student" && (
                        <span className="ml-1">{msg.status === 'read' ? '✔✔' : '✔'}</span>
                    )}
                    </div>
                </div>
                </div>
            ))}
            <div ref={messagesEndRef}></div>
            </div>
        </div>

        {/* Input */}
        <div className="p-4 bg-beige-100 flex items-center gap-3">
            <input
            type="text"
            placeholder="اكتب رسالة..."
            value={newMessage}
            onChange={(e) => onMessageChange(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 px-4 py-2 rounded-full border border-beige-200 focus:outline-none focus:ring-2 focus:ring-beige-300 bg-white text-gray-800"
            />
            <button
            onClick={onSendMessage}
            className="bg-beige-200 hover:bg-beige-300 transition-all duration-300 px-4 py-2 rounded-full text-gray-800 font-semibold"
            >
            إرسال
            </button>
        </div>
        </div>
    );
    };

    // ---------- Main Component ----------
    const StudentProfile: React.FC = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [newMessage, setNewMessage] = useState("");

    const handleFileUpload = (files: File[]) => {
        setUploadedFiles((prev) => [...prev, ...files]);
    };

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;
        const msg: Message = {
        id: Date.now(),
        sender: "student",
        content: newMessage,
        timestamp: new Date(),
        status: 'sent'
        };
        setMessages((prev) => [...prev, msg]);
        setNewMessage("");
    };

    return (
        <div className="min-h-screen bg-white p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <button 
            onClick={() => window.history.back()}
            className="mb-6 flex items-center gap-2 px-4 py-2 bg-beige-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-800"
            >
            ← العودة للرئيسية
            </button>

            {/* Profile Header */}
            <ProfileHeader student={student} />

            {/* Notes Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <NotesSection 
                title="الملاحظات الإيجابية" 
                notes={student.notesPositive} 
                type="positive" 
            />
            <NotesSection 
                title="الملاحظات التطويرية" 
                notes={student.notesNegative} 
                type="negative" 
            />
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
        </div>
        </div>
    );
    };

    export default StudentProfile;
