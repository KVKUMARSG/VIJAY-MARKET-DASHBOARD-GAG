import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [dark, setDark] = React.useState(true);
    const toggleTheme = () => setDark(!dark);

    React.useEffect(() => {
        const html = document.documentElement;
        if (dark) {
            html.classList.remove('light');
        } else {
            html.classList.add('light');
        }
    }, [dark]);

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 glass transition-smooth z-50">
            <div className="flex items-center space-x-2">
                <Menu className="h-5 w-5 text-primary" />
                <span className="text-xl font-bold text-primary">Market Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-1 rounded bg-muted text-foreground focus:outline-none"
                />
                <button onClick={toggleTheme} className="p-2 rounded hover:bg-muted transition-smooth">
                    {dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </button>
                <div className="w-8 h-8 bg-muted rounded-full" /> {/* placeholder for user avatar */}
            </div>
        </nav>
    );
};
