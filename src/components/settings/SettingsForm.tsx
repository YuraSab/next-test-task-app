'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const SettingsForm = () => {
    const currentDate = new Date('2025-05-29'); 
    const formattedDate = format(currentDate, 'EEEE, d MMM yyyy', { locale: enUS });
    
    const LABEL_CLASSES = 'block text-xs font-semibold leading-[18px] text-[var(--color-label-grey)] mb-2';
    const INPUT_CLASSES = 'h-12 border-gray-300 focus:border-gray-500 text-base font-normal leading-[24px] bg-white text-gray-900 placeholder:text-[var(--color-label-grey)]';

    return (
        <div className="flex-1 p-12"> 
            <h1 className="text-xl font-medium mb-1">Settings</h1>
            <p className="text-sm font-normal text-gray-400 mb-8">{formattedDate}</p>
            
            <div className="mb-6 w-full"> 
                <label className={LABEL_CLASSES} htmlFor="name">
                    Name
                </label>
                <Input 
                    id="name" 
                    defaultValue="User Random" 
                    className={INPUT_CLASSES} 
                />
            </div>
            <div className="mb-8 w-full">
                <label className={LABEL_CLASSES} htmlFor="password">
                    Password
                </label>
                <Input 
                    id="password" 
                    type="password"
                    placeholder="Enter password" 
                    className={INPUT_CLASSES} 
                />
                <p className={"text-xs font-normal leading-[18px] text-[var(--color-label-grey)] mt-2"}>
                    Your password is between 4 and 12 characters
                </p>
            </div>
            <div className="w-full flex justify-end">
                <Button 
                    className={"h-[36px] w-[112px] rounded-lg text-xs font-bold bg-[var(--color-save-button)] hover:bg-[var(--color-save-button)]/90"}
                    onClick={() => alert('Settings saved!')}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}