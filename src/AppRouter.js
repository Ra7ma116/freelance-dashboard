import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import ProfileSettings from './pages/ProfileSettings';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Overview />} />
                    <Route path="overview" element={<Overview />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="profile" element={<ProfileSettings />} />
                    {/* Add a catch-all route for 404 pages */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </Router>
    );
};

// A simple component for a 404 page
const NoMatch = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <p className="mt-2 text-xl text-gray-600">Page not found.</p>
            </div>
        </div>
    );
};

export default AppRouter;