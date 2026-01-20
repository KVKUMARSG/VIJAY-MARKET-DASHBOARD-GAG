import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, Search, Bell } from 'lucide-react';

interface NavbarProps {
    onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
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
        <nav className="fixed top-4 left-4 right-4 h-16 rounded-2xl flex items-center justify-between px-6 glass z-50 transition-all duration-300 border-white/20 dark:border-white/10 shadow-lg shadow-primary/5">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 hover:bg-primary/10 rounded-full md:hidden text-primary transition-colors"
                >
                    <Menu className="h-6 w-6" />
                </button>
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
                        M
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent tracking-tight">
                        Market<span className="font-light text-foreground/80">Dash</span>
                    </span>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center relative group">
                    <Search className="absolute left-3 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search markets..."
                        className="pl-9 pr-4 py-2 rounded-full bg-secondary/50 border border-transparent focus:bg-background focus:border-primary/20 focus:ring-2 focus:ring-primary/10 outline-none w-64 transition-all text-sm"
                    />
                </div>

                <div className="flex items-center gap-2 border-l border-border/50 pl-4">
                    <button className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                    >
                        {dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>

                    <button className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-accent p-[2px] cursor-pointer hover:scale-105 transition-transform">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};
