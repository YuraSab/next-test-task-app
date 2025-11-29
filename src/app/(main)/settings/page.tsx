'use client';

import { Separator } from '@/components/ui/separator';

import { SettingsForm } from '@/components/settings/SettingsForm';
import { MyProfilePanel } from '@/components/settings/MyProfilePanel';
import { MobileProfileOverlay } from '@/components/settings/MobileProfileOverlay';

export default function SettingsPage() {
    return (
<div className="flex h-full min-h-screen w-full font-poppins">
            <SettingsForm />
            <Separator orientation="vertical" className="hidden md:block h-full bg-gray-100" />
            <div className="hidden md:block">
                <MyProfilePanel />
            </div>
            <MobileProfileOverlay />
        </div>
    );
}