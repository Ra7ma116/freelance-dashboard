const ActivityItem = ({ project, action, time }) => {
    return (
        <div className="activity-item">
            <div className="activity-icon">•</div>
            <div className="activity-content">
                <p><strong>{project}</strong> - {action}</p>
                <small>{time}</small>
            </div>
        </div>
    );
};

export default ActivityItem;