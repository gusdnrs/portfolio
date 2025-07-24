import React from 'react';

interface SectionProps {
  id: string; // 섹션 ID
  title: string; // 섹션 제목
  children?: React.ReactNode;
  className?: string;
  backgroundColor?: 'white' | 'gray';
};

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children,
  className = {},
  backgroundColor = "white" }) => {
    const bgClasses ={
      white: 'bg-white',
      gray: 'bg-slate-50',
    };

    return (
      <section id={id} className={`py-20 px-4 ${bgClasses[backgroundColor]} ${className}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
            {title}
          </h2>
          {children}
        </div>
      </section>
    );
};

export default Section;