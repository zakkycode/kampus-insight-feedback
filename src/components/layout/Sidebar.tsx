
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getMenuItems = () => {
    if (user?.role === 'akademik') {
      return [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/akademik' },
        { icon: Users, label: 'Dosen', path: '/akademik/dosen' },
        { icon: GraduationCap, label: 'Mahasiswa', path: '/akademik/mahasiswa' },
        { icon: BookOpen, label: 'Mata Kuliah', path: '/akademik/mata-kuliah' },
        { icon: BarChart3, label: 'Laporan Evaluasi', path: '/akademik/reports' },
        { icon: Settings, label: 'Pengaturan', path: '/akademik/settings' },
      ];
    } else if (user?.role === 'dosen') {
      return [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dosen' },
        { icon: BarChart3, label: 'Evaluasi Saya', path: '/dosen/evaluations' },
        { icon: BookOpen, label: 'Mata Kuliah', path: '/dosen/courses' },
        { icon: Settings, label: 'Profil', path: '/dosen/profile' },
      ];
    }
    return [];
  };

  const menuItems = getMenuItems();

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold text-blue-900">EvalDosen</h1>
                <p className="text-sm text-gray-500">Sistem Evaluasi</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="p-2"
            >
              {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </Button>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">
                {user?.name.charAt(0).toUpperCase()}
              </span>
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`
                  }
                >
                  <item.icon size={20} />
                  {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut size={20} />
            {!collapsed && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
