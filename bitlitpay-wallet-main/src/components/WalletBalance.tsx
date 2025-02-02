import React from 'react';
import { useWallet } from '../context/WalletContext';
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Repeat } from "lucide-react";
import { useState } from "react";

export const WalletBalance = () => {
  const { balance, error } = useWallet();
  const [showBalance, setShowBalance] = useState(true);
  const [showSats, setShowSats] = useState(false);
  const fiatCurrency = "USD"; // This should be fetched based on user's location

  const toggleUnit = () => {
    setShowSats(!showSats);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-wallet-primary to-wallet-primary/90 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Total Balance</h2>
        <div className="flex gap-2">
          <button
            onClick={toggleUnit}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Repeat size={20} />
          </button>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {showBalance ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>
      </div>
      <div className="space-y-1">
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p className="text-3xl font-bold">
            {showBalance ? (showSats ? `${balance} Sats` : `${balance} BTC`) : "••••••"}
          </p>
        )}
        <p className="text-white/70">
          {showBalance ? `$0.00 ${fiatCurrency}` : "••••••"}
        </p>
      </div>
    </Card>
  );
};

export default WalletBalance;