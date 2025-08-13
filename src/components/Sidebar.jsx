import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <h2>Freelance Dashboard</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                            <span>📊</span> <span className="nav-text">Overview</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                            <span>📋</span> <span className="nav-text">Projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
                            <span>👤</span> <span className="nav-text">Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;