import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, ShoppingBag, Gift, Zap, User } from "lucide-react";
import { cn } from "@/lib/utils";

const EarnTab = () => {
  const [activeTab, setActiveTab] = useState<"benefits" | "redeem">("benefits");

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Rewards</h1>
          <Link to="/history" className="text-sm text-gray-400">
            See history
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4">
        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-1">YOU ARE ON</p>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">Welcome Tier</h2>
              <div className="w-full bg-gray-800 h-1 rounded-full mb-2">
                <div className="bg-blue-500 h-1 rounded-full w-1/4"></div>
              </div>
              <p className="text-sm text-gray-400">Spend 9,998,849 SATS to unlock Bronze</p>
            </div>
            <div className="ml-4">
              <div className="h-16 w-16 bg-gray-700 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mb-6">
          <button
            className={cn(
              "flex-1 pb-4 text-center border-b-2",
              activeTab === "benefits" ? "border-blue-500 text-blue-500" : "border-gray-800 text-gray-400",
            )}
            onClick={() => setActiveTab("benefits")}
          >
            BENEFITS
          </button>
          <button
            className={cn(
              "flex-1 pb-4 text-center border-b-2",
              activeTab === "redeem" ? "border-blue-500 text-blue-500" : "border-gray-800 text-gray-400",
            )}
            onClick={() => setActiveTab("redeem")}
          >
            REDEEM
          </button>
        </div>

        {activeTab === "benefits" && (
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Earn 1 Speed point for every 1,000 SATS spent</h3>
                  <p className="text-sm text-gray-400">Earn points when you spend on Speed wallet.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Maximize your savings!</h3>
                  <p className="text-sm text-gray-400">
                    Earn a total of 10,000 points and receive 2,500 SATS as cashback. This is approximately equivalent
                    to ~₦3,854 (the conversion rate depends on the current market value of BTC).
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              *To unlock the Bronze Tier's perks, boost your monthly transactions to 10,000,001 SATS and level up to the
              next tier.
            </p>

            <Link to="/rewards/tiers">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">CHECK ALL TIER BENEFITS</Button>
            </Link>
          </div>
        )}

        {activeTab === "redeem" && (
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg mb-4">Redeem all points to Speed Wallet</h3>
              <p className="text-4xl font-bold mb-1">0 SATS</p>
              <p className="text-gray-400 mb-6">~₦0.38</p>
              <Button className="w-full bg-gray-800 text-gray-400" disabled>
                MIN. 40 POINTS TO REDEEM
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default EarnTab;