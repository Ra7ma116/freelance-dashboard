const ProjectCard = ({ project, onStatusChange }) => {
    const statusColors = {
        'pending': '#FFC107',
        'in-progress': '#2196F3',
        'completed': '#4CAF50'
    };

    const handleStatusChange = (e) => {
        onStatusChange(project.id, e.target.value);
    };

    return (
        <div className="project-card">
            <h3>{project.name}</h3>
            <p className="client-name">{project.client}</p>

            <div className="progress-container">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${project.progress}%`, backgroundColor: statusColors[project.status] }}
                    ></div>
                </div>
                <span className="progress-text">{project.progress}% complete</span>
            </div>

            <div className="project-details">
                <div className="detail-item">
                    <span>Status:</span>
                    <select
                        value={project.status}
                        onChange={handleStatusChange}
                        style={{ color: statusColors[project.status] }}
                        aria-label={`Change status for ${project.name}`}
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div className="detail-item">
                    <span>Deadline:</span>
                    <span>{new Date(project.deadline).toLocaleDateString()}</span>
                </div>
            </div>

            <button className="view-project-btn" aria-label={`View details for ${project.name}`}>
                View Details
            </button>
        </div>
    );
};

export default ProjectCard;