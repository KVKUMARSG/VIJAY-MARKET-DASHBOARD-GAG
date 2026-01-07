import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { SEO } from './SEO';
import { Sidebar } from './Sidebar';

export const PageLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
            <SEO title="Dashboard" />
            <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className={`
                pt-20 px-4 md:px-8 pb-8 transition-all duration-300 ease-in-out
                md:ml-64 
                max-w-[1920px] mx-auto w-full
            `}>
                <Outlet />
            </main>
        </div>
    );
};
