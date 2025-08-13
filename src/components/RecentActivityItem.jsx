import React from 'react';

const RecentActivityItem = ({ text, time }) => {
    return (
        <li className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
            <p className="text-gray-700 text-sm">{text}</p>
            <span className="text-xs text-gray-400">{time}</span>
        </li>
    );
};

export default RecentActivityItem;