const NotificationDropdown = ({ notifications, onNotificationClick, onClose }) => {
    return (
        <div className="notification-dropdown">
            <div className="dropdown-header">
                <h4>Notifications</h4>
                <button onClick={onClose}>×</button>
            </div>

            <div className="notification-list">
                {notifications.slice(0, 5).map(notification => (
                    <div
                        key={notification.id}
                        className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                        onClick={() => onNotificationClick(notification.id)}
                    >
                        <p>{notification.message}</p>
                        <small>{notification.time}</small>
                    </div>
                ))}
            </div>

            {notifications.length === 0 && (
                <div className="empty-notifications">No new notifications</div>
            )}
        </div>
    );
};

export default NotificationDropdown;