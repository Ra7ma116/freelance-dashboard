import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import ProfileSettings from './pages/ProfileSettings';
import './styles/main.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New project assigned', time: '2 hours ago', read: false },
    { id: 2, message: 'Payment received for Project X', time: '1 day ago', read: false },
    { id: 3, message: 'Client feedback on Design Draft', time: '2 days ago', read: true },
  ]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth < 768 && sidebarOpen) {
        const sidebar = document.querySelector('.sidebar');
        const header = document.querySelector('.dashboard-header');

        if (sidebar && !sidebar.contains(e.target) && !header.contains(e.target)) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarOpen]);

  // Auto-open sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header
          toggleSidebar={toggleSidebar}
          notifications={notifications}
          onNotificationClick={markNotificationAsRead}
        />
        <Sidebar isOpen={sidebarOpen} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<ProfileSettings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;