import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWallet } from '../context/WalletContext';
import { createLightningWallet, createOnChainWallet, getWalletBalance } from '../services/lnbitsService';

export const WalletTab = () => {
  const { walletType, switchWalletType } = useWallet();
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCreateWallet = async (type: 'lightning' | 'on-chain') => {
    setLoading(true);
    setError(null);
    try {
      let walletData;
      if (type === 'lightning') {
        walletData = await createLightningWallet();
        switchWalletType('lightning');
      } else {
        walletData = await createOnChainWallet();
        switchWalletType('on-chain');
      }
      setWalletAddress(walletData.address);
      const balance = await getWalletBalance();
      setBalance(balance);
    } catch (err) {
      console.error('Error creating wallet:', err);
      setError('Failed to create wallet');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Create a Wallet</h2>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Choose Wallet Type</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            variant="outline" 
            className="w-full mb-2" 
            onClick={() => handleCreateWallet('lightning')}
            disabled={loading}
          >
            Create Lightning Wallet
          </Button>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => handleCreateWallet('on-chain')}
            disabled={loading}
          >
            Create On-chain Wallet
          </Button>
        </CardContent>
      </Card>

      {balance !== null && walletAddress && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Wallet Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Balance: {balance}</p>
            <p>Wallet Address: {walletAddress}</p>
            <p>Current Wallet Type: {walletType}</p>
          </CardContent>
        </Card>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default WalletTab;