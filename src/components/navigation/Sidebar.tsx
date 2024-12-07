import React from 'react';
import { Home, Calendar, User, Settings, MessageCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Calendar, label: 'Add Event', path: '/add-event' },
    { icon: MessageCircle, label: 'Chat', path: '/chat' },
    { icon: Users, label: 'Meet People', path: '/meet-people' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r fixed left-0 top-0 p-4">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-indigo-600">Community Hub</h1>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pb-4">
          <div className="flex items-center space-x-3 px-4 py-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">@johndoe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}