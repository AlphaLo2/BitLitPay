import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { WalletProvider } from './context/WalletContext';
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TierBenefits from './pages/TierBenefits';

const queryClient = new QueryClient();

const App = () => {
  return (
    <WalletProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Index />} />
              <Route path="/wallet" element={<Index />} />
              <Route path="/wallet/send" element={<Index />} />
              <Route path="/wallet/receive" element={<Index />} />
              <Route path="/shop" element={<Index />} />
              <Route path="/earn" element={<Index />} />
              <Route path="/me" element={<Index />} />
              <Route path="/services/airtime" element={<Index />} />
              <Route path="/services/data" element={<Index />} />
              <Route path="/services/topup" element={<Index />} />
              <Route path="/services/crypto" element={<Index />} />
              <Route path="/rewards/tiers" element={<TierBenefits />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </WalletProvider>
  );
};

export default App;