'use client';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface MobileHeaderProps {
  onMenuToggle: () => void;
}

const getPageTitle = (pathname: string) => {
  if (pathname === '/settings') return 'Settings';
  if (pathname === '/') return 'Dashboard';
  return 'TESTAPP';
}

export const MobileHeader = ({ onMenuToggle }: MobileHeaderProps) => {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <div className="flex justify-between items-center px-6 py-4 lg:hidden bg-white sticky top-0 z-20 shadow-sm border-b border-gray-100">
      <button onClick={onMenuToggle} className="p-1">
        <Menu className="w-7 h-7 text-gray-800" />
      </button>
      <h1 className="text-xl font-medium text-gray-900">{title}</h1>
      <div className="w-8 h-8"></div> 
    </div>
  );
};