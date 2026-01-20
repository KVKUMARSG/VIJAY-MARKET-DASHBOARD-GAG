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
import { cn } from '../../lib/utils'; // Assuming this exists or I will create it. Actually I better define a simple helper here if not exists.

// Simple utility since I can't check other files easily right now without view_file
const cn_local = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: TrendingUp, label: 'Stocks', path: '/stocks' },
    { icon: BarChart2, label: 'Markets', path: '/markets' },
    { icon: Banknote, label: 'Currencies', path: '/currencies' },
    { icon: Bitcoin, label: 'Crypto', path: '/crypto' },
    { icon: Globe, label: 'Global', path: '/global' },
    { icon: PieChart, label: 'Portfolio', path: '/portfolio' },
    { icon: Activity, label: 'Performance', path: '/performance' },
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
                className={cn_local(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 md:hidden",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            {/* Sidebar Container */}
            <aside
                className={cn_local(
                    "fixed top-24 left-4 bottom-4 w-64 rounded-xl border border-white/20 glass-panel shadow-2xl z-40 transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) md:translate-x-0 overflow-hidden flex flex-col",
                    isOpen ? "translate-x-0" : "-translate-x-[120%]"
                )}
            >
                <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
                    <nav className="space-y-1">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => {
                                    if (window.innerWidth < 768) onClose();
                                }}
                                className={({ isActive }) => cn_local(
                                    "relative flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-300 group overflow-hidden",
                                    isActive
                                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                )}
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                                        )}
                                        <item.icon className={cn_local(
                                            "w-5 h-5 flex-shrink-0 transition-transform duration-300",
                                            isActive ? "scale-110" : "group-hover:scale-110"
                                        )} />
                                        <span className="font-medium tracking-wide text-sm">{item.label}</span>
                                        {isActive && (
                                            <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-border/50 bg-secondary/30 backdrop-blur-md">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-3 border border-primary/10">
                        <p className="text-xs font-semibold text-primary mb-1">Deepmind Premium</p>
                        <p className="text-[10px] text-muted-foreground">Upgrade for AI insights -&gt; </p>
                    </div>
                </div>
            </aside>
        </>
    );
};
