'use client'; 

import { useState } from 'react';
import { User, X } from 'lucide-react'; 
import { MyProfilePanel } from './MyProfilePanel';

export const MobileProfileOverlay = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsProfileOpen(true)}
                className="p-3 md:hidden fixed bottom-6 right-6 bg-[var(--color-save-button)] text-white rounded-xl shadow-lg z-20"
            >
                <User className="w-6 h-6" />
            </button>

            {isProfileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsProfileOpen(false)}
                />
            )}
            <div
                className={`fixed top-0 right-0 h-screen w-[300px] z-40 bg-white shadow-xl transition-transform transform md:hidden 
                    ${isProfileOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <MyProfilePanel />
                <button
                    onClick={() => setIsProfileOpen(false)}
                    className="absolute top-4 right-4 p-2 text-gray-800 z-50"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>
        </>
    );
};