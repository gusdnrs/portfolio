import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;  // 선택적 속성
  color?: string; // 버튼 색상
};

const Button: React.FC<ButtonProps> = ({ children, onClick, color = "blue" }) => {
  const getButtonClass = (color: string) => {
    const baseClasses = "text-white px-8 py-3 rounded-lg font-medium transition-colors";

    const colorClasses = {
      primary: "bg-primary hover:bg-blue-800 text-white",
      secondary: "bg-secondary hover:bg-cyan-600 text-white",
      blue: "bg-blue-600 hover:bg-blue-700",
      red: "bg-red-600 hover:bg-red-700",
      green: "bg-green-600 hover:bg-green-700",
      gray: "bg-gray-600 hover:bg-gray-700",
      purple: "bg-purple-600 hover:bg-purple-700",
    } as { [key: string]: string };

    return `${baseClasses} ${colorClasses[color] || colorClasses.blue}`; // 기본값은 blue
  };

  return (
    <button 
      className={getButtonClass(color)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
