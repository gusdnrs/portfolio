// src/components/ui/Card.tsx
import React from 'react';
import type { Project } from '../../data/Projects';

interface CardProps extends Project {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  skills = [],
  liveUrl,
  githubUrl,
  date,
  className = ""
}) => {
  return (
    <div className={`group bg-white bg-cover h-160 flex items-end z-1 rounded-lg shadow-md border border-slate-200 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${className}`} style={{
      backgroundImage: `url(${imageUrl})`
    }}>
      <div className='h-40 group-hover:h-84 overflow-hidden bg-white/90 p-4 w-9/10 mx-auto mb-4 rounded-lg shadow-md border border-slate-200 transition-all duration-300'>
        {/* 제목 */}
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          {title}
        </h3>
        
        {/* 설명 */}
        <p className="text-slate-600 mb-4">
          {description}
        </p>
        
        {/* 기술 스택 태그 */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        {/* 날짜 */}
        {date && (
          <p className="text-sm text-slate-500 mb-4">
            {date}
          </p>
        )}
        
        {/* 링크 버튼들 */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
