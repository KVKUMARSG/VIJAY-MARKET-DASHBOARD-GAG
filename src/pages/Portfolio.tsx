import React from 'react';
import { PortfolioHeader } from '../components/portfolio/PortfolioHeader';
import { SummaryStats } from '../components/portfolio/SummaryStats';
import { AllocationChart } from '../components/portfolio/AllocationChart';
import { HoldingsTable } from '../components/portfolio/HoldingsTable';

const Portfolio = () => (
    <div className="p-8 space-y-8 animate-slide-up">
        <PortfolioHeader />
        <SummaryStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AllocationChart />
            <HoldingsTable />
        </div>
    </div>
);

export default Portfolio;
