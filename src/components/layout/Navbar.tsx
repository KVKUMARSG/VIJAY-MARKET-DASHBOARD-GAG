import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';

interface NavbarProps {
    onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
    // Default to false (Light mode) matching new :root defaults
    const [dark, setDark] = React.useState(false);
    const toggleTheme = () => setDark(!dark);

    React.useEffect(() => {
        const html = document.documentElement;
        if (dark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [dark]);

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 glass transition-smooth z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="flex items-center space-x-4">
                <button
                    onClick={onMenuClick}
                    className="p-1 hover:bg-muted rounded-md md:hidden"
                >
                    <Menu className="h-6 w-6 text-primary" />
                </button>
                <Link to="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Market Dashboard
                    </span>
                </Link>
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
