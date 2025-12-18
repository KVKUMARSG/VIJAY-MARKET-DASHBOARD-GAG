import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title} | VJ Market Analysis</title>
            <meta name="description" content={description || "Financial Market Intelligence Dashboard"} />
        </Helmet>
    );
};
