import React from 'react';
import { Moon, Sun } from 'lucide-react';
import Sidebar from '../components/navigation/Sidebar';
import { useThemeStore } from '../store/themeStore';

export default function SettingsPage() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Theme</h2>
                <p className="text-sm text-gray-500">
                  Toggle between light and dark mode
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="h-6 w-6 text-gray-600" />
                ) : (
                  <Moon className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}