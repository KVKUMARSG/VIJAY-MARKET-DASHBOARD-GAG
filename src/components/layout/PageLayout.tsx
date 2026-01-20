import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

interface PageLayoutProps {
    children?: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-sans">
            {/* Ambient Background Mesh */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] mix-blend-screen animate-pulse delay-1000" />
                <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-secondary/30 blur-[100px] animate-pulse delay-2000" />
            </div>

            <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main className="relative z-10 pt-24 pb-8 px-4 md:pl-72 md:pr-8 transition-all duration-300 min-h-screen flex flex-col">
                <div className="flex-1 animate-fade-in-up">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
