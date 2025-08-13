import { useState } from 'react';
import NotificationDropdown from './NotificationDropdown';

const Header = ({ toggleSidebar, notifications, onNotificationClick }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        toggleSidebar();
    };

    return (
        <header className="dashboard-header">
            <button
                className="sidebar-toggle mobile-menu-btn"
                onClick={handleMobileMenu}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? '✕' : '☰'}
            </button>

            <div className="header-actions">
                <div
                    className="notification-icon"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-label="Notifications"
                >
                    🔔
                    {notifications.some(n => !n.read) && <span className="notification-badge"></span>}
                </div>

                {dropdownOpen && (
                    <NotificationDropdown
                        notifications={notifications}
                        onNotificationClick={onNotificationClick}
                        onClose={() => setDropdownOpen(false)}
                    />
                )}
            </div>
        </header>
    );
};

export default Header;