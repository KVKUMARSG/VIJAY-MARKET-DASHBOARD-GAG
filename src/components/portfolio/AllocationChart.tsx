import React from 'react';
import { usePortfolio } from '../../hooks/usePortfolio';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#4f46e5', '#10b981', '#ef4444']; // primary, success, danger

export const AllocationChart: React.FC = () => {
    const { allocation } = usePortfolio();
    const data = Object.entries(allocation).map(([key, value]) => ({ name: key, value }));

    return (
        <div className="p-4 glass rounded-xl animate-fade-in">
            <h2 className="text-xl font-bold mb-2 text-primary">Asset Allocation</h2>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
