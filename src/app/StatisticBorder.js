import React from 'react';
import './StatisticBorder.css'; // Make sure to create and import this CSS file for styles

const StatisticBorder = ({ stats }) => {
    return (
        <div className="statistic-border">
            <h2 className="statistic-title">Statistics</h2>
            <div className="statistic-content">
                {stats.map((stat, index) => (
                    <div key={index} className="statistic-item">
                        <p className="statistic-value">{stat.value}</p>
                        <p className="statistic-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatisticBorder;