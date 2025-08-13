const SummaryCard = ({ title, value, icon, color }) => {
    const colorMap = {
        'blue': '#2196F3',
        'green': '#4CAF50',
        'orange': '#FF9800',
        'purple': '#9C27B0'
    };

    return (
        <div
            className="summary-card"
            style={{ borderLeft: `4px solid ${colorMap[color]}` }}
        >
            <div className="card-content">
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
            <div className="card-icon" style={{ color: colorMap[color] }}>
                {icon}
            </div>
        </div>
    );
};

export default SummaryCard;