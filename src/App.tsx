import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import AuthPage from './components/auth/AuthPage';
import HomePage from './pages/HomePage';
import AddEventPage from './pages/AddEventPage';
import EventDetailsPage from './pages/EventDetailsPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import MeetPeoplePage from './pages/MeetPeoplePage';

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-event" element={<AddEventPage />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/meet-people" element={<MeetPeoplePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;