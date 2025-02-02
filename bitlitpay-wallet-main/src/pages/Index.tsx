import React from 'react';
import { WalletProvider } from '../context/WalletContext';
import { useLocation, useNavigate } from "react-router-dom";
import WalletBalance from '../components/WalletBalance';
import { QuickServices } from '../components/QuickServices';
import { TransactionHistory } from '../components/TransactionHistory';
import { WalletTab } from '../components/WalletTab';
import { ShopTab } from '../components/ShopTab';
import EarnTab from '../components/EarnTab';
import { MeTab } from '../components/MeTab';
import { AirtimeService } from '../components/services/AirtimeService';
import { DataService } from '../components/services/DataService';
import Send from '../components/wallet/Send';
import Receive from '../components/wallet/Receive';
import BottomNav from '../components/BottomNav';
import { useWallet } from '../context/WalletContext';

const Index = () => {
  const location = useLocation();
  const { walletType } = useWallet();
  const navigate = useNavigate();

  const handleSendClick = () => {
    if (!walletType) {
      navigate('/wallet');
      alert('Please create a wallet first.');
    } else {
      navigate('/wallet/send');
    }
  };

  const handleReceiveClick = () => {
    if (!walletType) {
      navigate('/wallet');
      alert('Please create a wallet first.');
    } else {
      navigate('/wallet/receive');
    }
  };

  const renderContent = () => {
    switch (location.pathname) {
      case "/wallet":
        return <WalletTab />;
      case "/wallet/send":
        return <Send />;
      case "/wallet/receive":
        return <Receive />;
      case "/shop":
        return <ShopTab />;
      case "/earn":
        return <EarnTab />;
      case "/me":
        return <MeTab />;
      case "/services/airtime":
        return <AirtimeService />;
      case "/services/data":
        return <DataService />;
      case "/services/topup":
        return <div className="p-4">Top Up Service Coming Soon</div>;
      case "/services/crypto":
        return <div className="p-4">Crypto Service Coming Soon</div>;
      default:
        return (
          <>
            <WalletBalance />
            <div className="flex justify-between">
              <button onClick={handleSendClick} className="btn-primary">Send</button>
              <button onClick={handleReceiveClick} className="btn-primary">Receive</button>
            </div>
            <QuickServices />
            <TransactionHistory />
          </>
        );
    }
  };

  return (
    <WalletProvider>
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="max-w-lg mx-auto p-4">
          <header className="py-6">
            <h1 className="text-2xl font-bold text-wallet-primary">BitLitPay</h1>
          </header>
          
          <main className="space-y-6">
            {renderContent()}
          </main>
        </div>
        <BottomNav />
      </div>
    </WalletProvider>
  );
};

export default Index;