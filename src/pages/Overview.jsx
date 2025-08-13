import { useState, useEffect } from 'react';
import SummaryCard from '../components/SummaryCard';
import ActivityItem from '../components/ActivityItem';
import ChartContainer from '../components/ChartContainer';

const Overview = () => {
    const [stats, setStats] = useState({
        totalProjects: 0,
        totalEarnings: 0,
        tasksDue: 0,
        activeClients: 0
    });

    const [recentActivity, setRecentActivity] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API fetch
        setTimeout(() => {
            setStats({
                totalProjects: 12,
                totalEarnings: 8450,
                tasksDue: 3,
                activeClients: 5
            });

            setRecentActivity([
                { id: 1, project: 'Website Redesign', action: 'Submitted final design', time: '2 hours ago' },
                { id: 2, project: 'Mobile App', action: 'Client approved wireframes', time: '1 day ago' },
                { id: 3, project: 'Logo Design', action: 'Received payment', time: '2 days ago' },
                { id: 4, project: 'Content Writing', action: 'Submitted first draft', time: '3 days ago' },
            ]);

            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="overview-page">
            <h1>Dashboard Overview</h1>

            <div className="summary-grid">
                <SummaryCard
                    title="Total Projects"
                    value={stats.totalProjects}
                    icon="📋"
                    color="blue"
                />
                <SummaryCard
                    title="Total Earnings"
                    value={`$${stats.totalEarnings.toLocaleString()}`}
                    icon="💰"
                    color="green"
                />
                <SummaryCard
                    title="Tasks Due"
                    value={stats.tasksDue}
                    icon="⏰"
                    color="orange"
                />
                <SummaryCard
                    title="Active Clients"
                    value={stats.activeClients}
                    icon="👥"
                    color="purple"
                />
            </div>

            <div className="chart-section">
                <ChartContainer
                    title="Monthly Earnings"
                    type="bar"
                    data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                            label: 'Earnings ($)',
                            data: [1200, 1900, 800, 1500, 2000, 1050],
                            backgroundColor: '#4CAF50'
                        }]
                    }}
                />

                <ChartContainer
                    title="Task Distribution"
                    type="pie"
                    data={{
                        labels: ['Design', 'Development', 'Content', 'Testing'],
                        datasets: [{
                            data: [30, 40, 20, 10],
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#4BC0C0'
                            ]
                        }]
                    }}
                />
            </div>

            <div className="activity-section">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                    {recentActivity.map(activity => (
                        <ActivityItem
                            key={activity.id}
                            project={activity.project}
                            action={activity.action}
                            time={activity.time}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Overview;