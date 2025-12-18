import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/layout/PageLayout";

// Page placeholders – they will be fleshed out later
import Index from "./pages/Index";
import Stocks from "./pages/Stocks";
import Markets from "./pages/Markets";
import Currencies from "./pages/Currencies";
import Crypto from "./pages/Crypto";
import Global from "./pages/Global";
import Portfolio from "./pages/Portfolio";
import Performance from "./pages/Performance";
import Analysis from "./pages/Analysis";
import News from "./pages/News";
import Heatmap from "./pages/Heatmap";
import Documentation from "./pages/Documentation";
import Settings from "./pages/Settings";

const App: React.FC = () => {
    return (
        <BrowserRouter basename="/VIJAY-MARKET-DASHBOARD-GAG">
            <Routes>
                <Route element={<PageLayout />}> {/* layout wrapper */}
                    <Route index element={<Index />} />
                    <Route path="/stocks" element={<Stocks />} />
                    <Route path="/markets" element={<Markets />} />
                    <Route path="/currencies" element={<Currencies />} />
                    <Route path="/crypto" element={<Crypto />} />
                    <Route path="/global" element={<Global />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/performance" element={<Performance />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/heatmap" element={<Heatmap />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
