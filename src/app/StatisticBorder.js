import React from 'react';
import './StatisticBorder.css';

const StatisticBorder = () => {
  const stats = [
    { value: 100, text: 'Users' },
    { value: 200, text: 'Projects' },
    { value: 300, text: 'Contributors' }
  ];

  return (
    <div className='statistic-border'>
      {stats.map((stat, index) => (
        <div key={index} className='statistic'>
          <span className='number'>{stat.value}</span>
          <span className='text'>{stat.text}</span>
        </div>
      ))}  
    </div>
  );
};

export default StatisticBorder;