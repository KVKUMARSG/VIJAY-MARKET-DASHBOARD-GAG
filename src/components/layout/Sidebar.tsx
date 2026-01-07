import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    TrendingUp,
    Globe,
    Banknote,
    Bitcoin,
    PieChart,
    Activity,
    Newspaper,
    Settings,
    BookOpen,
    BarChart2,
    Flame
} from 'lucide-react';


// Since I don't know if 'cn' exists, I'll use template literals or check first.
// I'll stick to template literals for safety for now, or create the utility.
// Standard vite/shadcn setups often have it.

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: TrendingUp, label: 'Stocks', path: '/stocks' },
    { icon: BarChart2, label: 'Markets', path: '/markets' },
    { icon: Banknote, label: 'Currencies', path: '/currencies' },
    { icon: Bitcoin, label: 'Crypto', path: '/crypto' },
    { icon: Globe, label: 'Global', path: '/global' },
    { icon: PieChart, label: 'Portfolio', path: '/portfolio' },
    { icon: Activity, label: 'Performance', path: '/performance' },
    // { icon: BarChart2, label: 'Analysis', path: '/analysis' },
    { icon: Newspaper, label: 'News', path: '/news' },
    { icon: Flame, label: 'Heatmap', path: '/heatmap' },
    { icon: BookOpen, label: 'Docs', path: '/documentation' },
    { icon: Settings, label: 'Settings', path: '/settings' },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar Container */}
            <aside
                className={`fixed top-16 left-0 bottom-0 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out z-40 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-full overflow-y-auto py-4">
                    <nav className="space-y-1 px-2">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => {
                                    if (window.innerWidth < 768) onClose();
                                }}
                                className={({ isActive }) => `
                                    flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors group
                                    ${isActive
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                    }
                                `}
                            >
                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                <span className="font-medium">{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
};
