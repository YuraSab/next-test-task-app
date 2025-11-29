'use client';

import { Separator } from '@/components/ui/separator';

import { SettingsForm } from '@/components/settings/SettingsForm';
import { MyProfilePanel } from '@/components/settings/MyProfilePanel';

export default function SettingsPage() {
    return (
        <div className="flex h-full w-full font-poppins">
            <SettingsForm />
            <Separator orientation="vertical" className="h-full bg-gray-100" />
            <MyProfilePanel />
        </div>
    );
}