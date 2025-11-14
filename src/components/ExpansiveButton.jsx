import { PlusIcon } from 'lucide-react';
import React, { Children } from 'react';

// Você pode usar um ícone de uma biblioteca (como react-icons) ou um simples "+"
// import { FaPlus } from 'react-icons/fa';

export default function ExpandButton({children,className, onClick}) {
  return (
    <div className={`flex items-center justify-center p-10 ${className}`}>
      <button
      onClick={onClick}
        className="
          flex items-center justify-center
          p-3 h-12 
          font-orbitron
          bg-transparent
          text-gray
          hover:text-white 
          rounded-xl 
          border
          transition-all duration-600 ease-in-out
          hover:bg-pink 
          group
        "
      >
        <PlusIcon/>
        <span
          className="
            opacity-0 max-w-0 
            ml-0 
            group-hover:opacity-100 
            group-hover:max-w-xs 
            group-hover:ml-2
            transition-all duration-300 ease-in-out
            overflow-hidden whitespace-nowrap
          "
        >
          {children}
        </span>
      </button>
    </div>
  );
}