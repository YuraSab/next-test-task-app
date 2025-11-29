import React from 'react';
import Sidebar from './Sidebar';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden" 
          onClick={onClose} 
        />
      )}
      <div 
        className={`fixed top-0 left-0 h-full w-[250px] z-40 bg-white shadow-xl transition-transform transform lg:hidden 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <Sidebar isMobile={true} /> 
      </div>
    </>
  );
};