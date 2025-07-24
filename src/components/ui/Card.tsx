import React from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode; // 선택적 children 속성
};

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
      <h3 className='text-xl font-semibold text-slate-800'>
          {title}
      </h3>
      <p className='text-slate-600'>
          {description}
      </p>
      {children}
    </div>
  );
};

export default Card;
