import React from 'react'
interface HeaderProps {
  title?: string;
  showNavigation?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  showNavigation = true
}) => {
  return (
    <header className="sticky top-0 z-100 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="max-w-20">
            <img src="/logo.png" alt="" />
          </h1>
          {showNavigation && (
            <nav className="nav-list hidden md:flex">
              <div className="text-slate-600">
                <a href="#home" data-hover="Home">
                  Home
                </a>
              </div>
              <div className="text-slate-600">
                <a href="#about" data-hover="About">
                  About
                </a>
              </div>
              <div className="text-slate-600">
                <a href="#projects" data-hover="Projects">
                  Projects
                </a>
              </div>
              <div className="text-slate-600">
                <a href="#contact" data-hover="Contact">
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>

  )
}

export default Header