export const summaryData = [
    {
        title: 'Total Projects',
        value: '24',
        change: '+3 from last month',
        icon: '📁'
    },
    {
        title: 'Earnings',
        value: '$8,420',
        change: '+12% from last month',
        icon: '💰'
    },
    {
        title: 'Tasks Due',
        value: '5',
        change: '-2 from last week',
        icon: '⏰'
    },
    {
        title: 'Client Satisfaction',
        value: '94%',
        change: '+2% from last quarter',
        icon: '⭐'
    }
];

export const activities = [
    {
        message: 'Completed project "Website Redesign"',
        time: '2 hours ago',
        type: 'completed'
    },
    {
        message: 'Received payment for "Mobile App Development"',
        time: '1 day ago',
        type: 'payment'
    },
    {
        message: 'New message from client "Acme Corp"',
        time: '2 days ago',
        type: 'message'
    },
    {
        message: 'Started work on "E-commerce Platform"',
        time: '3 days ago',
        type: 'started'
    },
    {
        message: 'Project "Brand Identity" approved',
        time: '1 week ago',
        type: 'approved'
    },
    {
        message: 'Submitted proposal for "Marketing Campaign"',
        time: '1 week ago',
        type: 'proposal'
    }
];

export const projects = [
    {
        name: 'Website Redesign',
        status: 'completed',
        deadline: '2023-05-15',
        progress: 100,
        client: 'Acme Corp'
    },
    {
        name: 'Mobile App Development',
        status: 'active',
        deadline: '2023-06-20',
        progress: 75,
        client: 'TechStart Inc'
    },
    {
        name: 'E-commerce Platform',
        status: 'active',
        deadline: '2023-07-10',
        progress: 30,
        client: 'ShopEasy'
    },
    {
        name: 'Brand Identity',
        status: 'completed',
        deadline: '2023-04-28',
        progress: 100,
        client: 'New Ventures'
    },
    {
        name: 'Marketing Campaign',
        status: 'pending',
        deadline: '2023-08-01',
        progress: 0,
        client: 'Global Solutions'
    },
    {
        name: 'UI/UX Overhaul',
        status: 'active',
        deadline: '2023-06-05',
        progress: 45,
        client: 'Digital Creations'
    }
];

export const chartData = {
    barChart: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Earnings ($)',
                data: [1200, 1900, 1500, 2000, 2200, 1800],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    },
    pieChart: {
        labels: ['Web Development', 'Mobile Apps', 'Graphic Design', 'Consulting'],
        datasets: [
            {
                data: [35, 25, 20, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }
        ]
    }
  };