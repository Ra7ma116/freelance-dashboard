import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Simulate API fetch
        setTimeout(() => {
            setProjects([
                {
                    id: 1,
                    name: 'Website Redesign',
                    client: 'Acme Corp',
                    status: 'in-progress',
                    deadline: '2023-12-15',
                    progress: 75
                },
                {
                    id: 2,
                    name: 'Mobile App Development',
                    client: 'TechStart',
                    status: 'in-progress',
                    deadline: '2023-11-30',
                    progress: 40
                },
                {
                    id: 3,
                    name: 'Logo Design',
                    client: 'BrandNew',
                    status: 'completed',
                    deadline: '2023-10-20',
                    progress: 100
                },
                {
                    id: 4,
                    name: 'Content Writing',
                    client: 'MediaPlus',
                    status: 'pending',
                    deadline: '2024-01-10',
                    progress: 10
                },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.status === filter);

    const handleStatusChange = (projectId, newStatus) => {
        setProjects(projects.map(project =>
            project.id === projectId ? { ...project, status: newStatus } : project
        ));
    };

    if (loading) return <div className="loading">Loading projects...</div>;

    return (
        <div className="projects-page">
            <h1>My Projects</h1>

            <div className="project-filters">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                    aria-label="Show all projects"
                >
                    All
                </button>
                <button
                    className={filter === 'pending' ? 'active' : ''}
                    onClick={() => setFilter('pending')}
                    aria-label="Filter pending projects"
                >
                    Pending
                </button>
                <button
                    className={filter === 'in-progress' ? 'active' : ''}
                    onClick={() => setFilter('in-progress')}
                    aria-label="Filter in-progress projects"
                >
                    In Progress
                </button>
                <button
                    className={filter === 'completed' ? 'active' : ''}
                    onClick={() => setFilter('completed')}
                    aria-label="Filter completed projects"
                >
                    Completed
                </button>
            </div>

            {/* Mobile view - Cards */}
            <div className="projects-grid mobile-view">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onStatusChange={handleStatusChange}
                    />
                ))}
            </div>

            {/* Desktop view - Table */}
            <table className="projects-table desktop-view">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Status</th>
                        <th>Progress</th>
                        <th>Deadline</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProjects.map(project => (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{project.client}</td>
                            <td>
                                <select
                                    value={project.status}
                                    onChange={(e) => handleStatusChange(project.id, e.target.value)}
                                    className={`status-select ${project.status}`}
                                    aria-label={`Change status for ${project.name}`}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </td>
                            <td>
                                <div className="progress-container">
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${project.progress}%`,
                                                backgroundColor: {
                                                    'pending': '#FFC107',
                                                    'in-progress': '#2196F3',
                                                    'completed': '#4CAF50'
                                                }[project.status]
                                            }}
                                        ></div>
                                    </div>
                                    <span>{project.progress}%</span>
                                </div>
                            </td>
                            <td>{new Date(project.deadline).toLocaleDateString()}</td>
                            <td>
                                <button className="table-action-btn" aria-label={`View details for ${project.name}`}>
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {filteredProjects.length === 0 && (
                <div className="no-projects">No projects found with the selected filter</div>
            )}
        </div>
    );
};

export default Projects;