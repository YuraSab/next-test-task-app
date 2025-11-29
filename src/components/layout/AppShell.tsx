'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { MobileHeader } from '@/components/layout/MobileHeader';

interface AppShellProps {
    children: React.ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const bodyScrollClass = isSidebarOpen ? 'overflow-hidden' : '';

    return (
        <>
            <MobileHeader onMenuToggle={() => setIsSidebarOpen(true)} />
            <div className={`flex ${bodyScrollClass}`}>
                <div className="hidden lg:flex w-[250px] fixed h-full border-r border-gray-100 z-10">
                    <Sidebar />
                </div>
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}
                <div
                    className={`fixed top-0 left-0 w-[250px] z-40 shadow-xl transition-transform transform lg:hidden 
                        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                        
                        /* ВИПРАВЛЕННЯ: Використовуємо h-screen для фіксованої повної висоти вікна */
                        h-screen 
                    `}
                >
                    <Sidebar isMobile={true} onClose={() => setIsSidebarOpen(false)} />
                </div>
                <main className="flex-1 lg:ml-[250px] transition-all duration-300 bg-[#F7F9FD] mt-[60px] lg:mt-0">
                    {children}
                </main>
            </div>
        </>
    );
};