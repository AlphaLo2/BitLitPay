import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getWalletBalance } from '../services/lnbitsService';

interface WalletContextType {
  walletType: string | null;
  switchWalletType: (type: string) => void;
  balance: number | null;
  fetchBalance: () => void;
  error: string | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [walletType, setWalletType] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const switchWalletType = (type: string) => {
    setWalletType(type);
  };

  const fetchBalance = async () => {
    try {
      const balance = await getWalletBalance();
      setBalance(balance);
    } catch (error) {
      setError('Failed to fetch wallet balance');
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [walletType]);

  return (
    <WalletContext.Provider value={{ walletType, switchWalletType, balance, fetchBalance, error }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}; 