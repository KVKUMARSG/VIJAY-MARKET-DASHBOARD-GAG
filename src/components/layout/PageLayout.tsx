import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { SEO } from './SEO';

export const PageLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans antialiased">
            <SEO title="Dashboard" />
            <Navbar />
            <main className="pt-20 px-4 md:px-8 pb-8 max-w-7xl mx-auto">
                <Outlet />
            </main>
        </div>
    );
};
