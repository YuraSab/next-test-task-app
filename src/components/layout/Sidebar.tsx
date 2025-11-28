'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Settings } from 'lucide-react'; 

const NavLinks = [
  { name: 'Dashboard', href: '/', icon: LayoutGrid }, 
  { name: 'Setting', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const ACCENT_GREEN_CLASS = 'text-[var(--color-accent-green)]'; 
  const INACTIVE_COLOR = 'text-gray-400'; 

  return (
    <div className="w-[250px] fixed h-full bg-white border-r border-gray-100 flex-col justify-between z-10 hidden lg:flex font-poppins">
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center space-x-2 mb-10 mt-6 pl-2">
          <div className="w-8 h-8 rounded-full bg-[var(--color-brand-orange)] text-white flex items-center justify-center font-medium text-lg">
            C
          </div>
          <span className="font-semibold text-xl text-gray-900">TESTAPP</span>
        </div>
        <nav className="space-y-4 flex-1 mt-6"> 
          {NavLinks.map((link) => {
            const isActive = pathname === link.href; 
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-3 p-2 text-[14px] transition-colors rounded-lg hover:bg-gray-50 
                  ${isActive
                    ? `${ACCENT_GREEN_CLASS} font-normal` 
                    : `${INACTIVE_COLOR} font-normal` 
                  }
                `}
              >
                <Icon className={`w-6 h-6 ${isActive ? ACCENT_GREEN_CLASS : INACTIVE_COLOR}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto pt-6 pb-2 pl-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200" /> 
            <div className="flex flex-col">
              <span className="font-medium text-xs text-gray-800">User R.</span>
              <span className="font-normal text-[10px] text-gray-500">test-mail@email.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}