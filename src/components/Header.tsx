import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold hover:text-blue-400 transition-all duration-300">
          Ahmad Akrom Kamaluddin
        </h1>
        <nav>
          <ul className="flex space-x-6">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
