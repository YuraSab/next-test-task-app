'use client';

import { Button } from '@/components/ui/button';

export const MyProfilePanel = () => {
    const profileCompletion = 75; 

    return (
        <div className="w-[300px] bg-white h-full flex flex-col justify-between">
            <div className="p-8"> 
                <h3 className={"text-[20px] font-medium leading-[1] text-[var(--color-profile-text)] mb-8"}>My Profile</h3>
                <p className={"text-[14px] font-normal leading-[1] text-[var(--color-save-button)] mb-8"}>
                    {profileCompletion}% completed your profile
                </p>
                <div className="flex flex-col items-center mb-8">
                    <div className="relative w-28 h-28 mb-4">
                        <div className="w-full h-full rounded-full border-4 absolute top-0 left-0 border-[var(--color-progress-circle-bg)]" />
                        <div 
                            className="w-full h-full rounded-full absolute top-0 left-0 border-4 border-transparent"
                            style={{ 
                                borderTopColor: 'var(--color-accent-green)', 
                                borderRightColor: 'var(--color-accent-green)',
                                transform: 'rotate(45deg)' 
                            }}
                        />
                        <div className="w-24 h-24 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <p className={"text-[16px] font-medium leading-[1] text-[var(--color-profile-text)] mb-1"}>User R.</p>
                    <p className="text-sm text-gray-500">Developer at White Digital</p>
                </div>
            </div>
            <div className="p-8 pt-0"> 
                <Button 
                    className="w-full h-9 bg-[var(--color-logout-button)] hover:bg-[var(--color-logout-button)]/90 rounded text-xs font-bold leading-[1] text-white"
                    onClick={() => alert('Logging out...')}
                >
                    LOGOUT
                </Button>
            </div>
        </div>
    );
}