import React, { useState } from "react";

// ---------- Types ----------
type Announcement = {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  avatar?: string;
  profileLink?: string; // رابط الحساب الشخصي
};

// ---------- Sample data ----------
const announcementsSample: Announcement[] = [
  {
    id: 1,
    title:
      "تهدف هذه المنصة إلى توفير بوابة تعليمية متكاملة للطلبة وأولياء الأمور والمعلمين.",
    author: "",
    date: "",
    excerpt: `متابعة الإعلانات المدرسية والفيديوهات التعريفية للطلبة المستجدين.
الوصول إلى الدروس والمناهج بشكل مرتب ومنظم.
إدارة الواجبات والمهام الدراسية ومتابعة تسليمها.
التواصل المباشر مع المعلمين والاستفسار عن المواد.
تقديم حلول وإرشادات لمشاكل الطلبة اليومية داخل المدرسة.
تهدف المنصة إلى تسهيل تجربة التعليم الرقمي، وتحسين التواصل بين المدرسة، الطلبة، وأولياء الأمور، مع ضمان تنظيم المعلومات بشكل واضح وسهل الاستخدام.`,
    avatar:
      "",
    profileLink: "https://school.edu.jo/profile",
  },
];

// ---------- TopBar ----------
const TopBar: React.FC<{ onMenu: () => void; onNotify: () => void }> = ({
  onMenu,
  onNotify,
}) => {
  return (
    <header className="w-full bg-white py-3 px-3 border-b sticky top-0 z-20 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenu}
            aria-label="Open menu"
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            ☰
          </button>

          <div className="hidden sm:block">
            <div className="text-xl font-semibold text-gray-800">
              مرحبًا، إبراهيم! <span aria-hidden>👋</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNotify}
            aria-label="Notifications"
            className="p-2 rounded hover:bg-gray-100 transition"
          >
            🔔
          </button>

          <a
            href="https://school.edu.jo/profile"
            className="block w-9 h-9 rounded-full overflow-hidden border hover:scale-105 transition-transform"
          >
            <img
              src="https://i.pinimg.com/736x/60/a1/71/60a1719d559469dbb6bfa1b6d0890e5e.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

// ---------- AnnouncementsHeader ----------
const AnnouncementsHeader: React.FC = () => {
  return (
    <div className="container mx-auto mt-6 px-3">
      <h2 className="text-xl md:text-2xl font-bold">هدف هذه المنصة</h2>
    </div>
  );
};

// ---------- AnnouncementCard ----------
const AnnouncementCard: React.FC<{ item: Announcement }> = ({ item }) => {
  return (
    <article className="container mx-auto mt-4 px-3">
      <div className="bg-white rounded-lg border p-4 shadow-md hover:shadow-lg transition">
        <div className="flex gap-3 items-start">
          {item.avatar && (
            <a
              href={item.profileLink}
              className="block w-12 h-12 rounded-full overflow-hidden border hover:scale-105 transition-transform"
            >
              <img
                src={item.avatar}
                alt={`Avatar of ${item.author}`}
                className="w-full h-full object-cover"
              />
            </a>
          )}

          <div className="flex-1">
            <h3 className="font-semibold text-lg leading-snug">{item.title}</h3>
            <div className="text-sm text-gray-600 mt-1">
              تتيح المنصة لمستخدميها:{" "}
              <span className="font-medium text-blue-700">{item.author}</span> -{" "}
              {item.date}
            </div>
          </div>
        </div>

        <div className="mt-4 text-right leading-relaxed" dir="rtl">
          <p className="text-base text-gray-800 whitespace-pre-line">{item.excerpt}</p>
        </div>
      </div>
    </article>
  );
};

// ---------- SideMenu ----------
const SideMenu: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-0 bottom-0 w-72 bg-white shadow-lg transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b font-semibold text-lg">📚 القائمة</div>
        <nav className="p-4 flex flex-col gap-3 text-gray-700">
          <a href="/" className="hover:text-blue-600">
            🏠 الصفحة الرئيسية
          </a>
          <a href="/courses" className="hover:text-blue-600">
            📖 الدروس
          </a>
          <a href="/assignments" className="hover:text-blue-600">
            📝 الواجبات
          </a>
          <a href="/teachers" className="hover:text-blue-600">
            👩‍🏫 تواصل مع المعلمين
          </a>
          <a href="/problems" className="hover:text-blue-600">
            ⚠️ حلول مشاكل المدرسة
          </a>
          <a href="/settings" className="hover:text-blue-600">
            ⚙️ الإعدادات
          </a>
        </nav>
      </div>
    </div>
  );
};

// ---------- Notifications Drawer ----------
const NotificationsDrawer: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute left-0 top-0 bottom-0 w-72 bg-white shadow-lg transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b font-semibold text-lg">🔔 الإشعارات</div>
        <ul className="p-4 flex flex-col gap-3 text-gray-700 text-sm">
          <li>📌 تسليم واجب الرياضيات غداً</li>
          <li>📌 اجتماع أولياء الأمور يوم الخميس</li>
          <li>📌 تم نشر نتائج الامتحان الشهري</li>
        </ul>
      </div>
    </div>
  );
};

// ---------- Main Page ----------
export default function Page1(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <TopBar onMenu={() => setMenuOpen(true)} onNotify={() => setNotifOpen(true)} />

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <NotificationsDrawer open={notifOpen} onClose={() => setNotifOpen(false)} />

      <main className="flex-1 pb-20">
        <AnnouncementsHeader />

        <section>
          {announcementsSample.map((a) => (
            <AnnouncementCard key={a.id} item={a} />
          ))}
        </section>
      </main>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-3 flex items-center justify-between md:hidden">
        <button className="flex-1 text-left text-sm text-gray-700">school.edu.jo</button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.history.back()}
            aria-label="Back"
            className="p-2 rounded hover:bg-gray-100"
          >
            ◀
          </button>
          <button
            onClick={() => window.history.forward()}
            aria-label="Forward"
            className="p-2 rounded hover:bg-gray-100"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
