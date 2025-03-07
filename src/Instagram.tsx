import { useState } from "react";
import { User, Settings, PlusCircle, Grid, Bookmark, Tag } from "lucide-react";

const posts = [
  "/images/post1.jpg",
  "/images/post2.jpg",
  "/images/post3.jpg",
  "/images/post4.jpg",
  "/images/post5.jpg",
  "/images/post6.jpg",
];

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="flex bg-black text-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-black text-white flex flex-col p-4 border-r border-gray-800">
        <h1 className="text-xl font-bold mb-6">Instagram</h1>
        <nav className="flex flex-col gap-4">
          <NavItem icon={User} label="Главная" />
          <NavItem icon={User} label="Поиск" />
          <NavItem icon={User} label="Интересное" />
          <NavItem icon={User} label="Reels" />
          <NavItem icon={User} label="Сообщения" badge={1} />
          <NavItem icon={User} label="Уведомления" />
          <NavItem icon={User} label="Создать" />
          <NavItem icon={User} label="Профиль" active />
        </nav>
      </aside>

      {/* Profile Content */}
      <main className="flex-1 p-6">
        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <img
            src="/images/avatar.jpg"
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <div className="flex gap-4 items-center">
              <h2 className="text-xl">ismail_teem</h2>
              <button className="bg-gray-700 px-4 py-1 rounded-md">
                Редактировать профиль
              </button>
              <Settings size={20} />
            </div>
            <div className="flex gap-6 mt-2">
              <span>
                <strong>9</strong> публикаций
              </span>
              <span>
                <strong>139</strong> подписчиков
              </span>
              <span>
                <strong>171</strong> подписок
              </span>
            </div>
            <p className="mt-2">Software developer 👨‍💻</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-6 border-t border-gray-700 pt-3">
          <Tab
            icon={Grid}
            label="ПУБЛИКАЦИИ"
            active={activeTab === "posts"}
            onClick={() => setActiveTab("posts")}
          />
          <Tab
            icon={Bookmark}
            label="СОХРАНЕННОЕ"
            active={activeTab === "saved"}
            onClick={() => setActiveTab("saved")}
          />
          <Tab
            icon={Tag}
            label="ОТМЕТКИ"
            active={activeTab === "tagged"}
            onClick={() => setActiveTab("tagged")}
          />
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {posts.map((post, index) => (
            <img
              key={index}
              src={post}
              alt="Post"
              className="w-full h-48 object-cover"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

interface NavItemProps {
  icon: any;
  label: string;
  active?: boolean; // Сделать не обязательным
  badge?: number; // Сделать не обязательным
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  active = false,
  badge = 0,
}) => (
  <div
    className={`flex items-center gap-4 p-2 rounded-lg ${
      active ? "bg-gray-800" : "hover:bg-gray-800"
    } transition cursor-pointer`}
  >
    <Icon size={24} />
    <span>{label}</span>
    {badge && (
      <span className="ml-auto bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {badge}
      </span>
    )}
  </div>
);

const Tab = ({ icon: Icon, label, active, onClick }) => (
  <div
    className={`flex items-center gap-2 p-2 cursor-pointer ${
      active ? "border-b-2 border-white" : "text-gray-400"
    }`}
    onClick={onClick}
  >
    <Icon size={20} />
    <span>{label}</span>
  </div>
);
