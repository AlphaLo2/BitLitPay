import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { countryData, getCurrentCountry } from "@/utils/countryUtils";

export const AirtimeService = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  
  const country = countryData[getCurrentCountry()];
  const providers = country.providers.filter(p => p.services.airtime);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buy airtime", { phoneNumber, amount, selectedProvider });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-xl font-semibold">Buy Airtime</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {providers.map((provider) => (
            <Card
              key={provider.id}
              className={`p-4 cursor-pointer ${
                selectedProvider === provider.id ? "border-wallet-accent" : ""
              }`}
              onClick={() => setSelectedProvider(provider.id)}
            >
              <div className="text-center">
                <h3 className="font-medium">{provider.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="amount">Amount ({country.currencySymbol})</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`Enter amount in ${country.currency}`}
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-wallet-accent text-white"
            disabled={!phoneNumber || !amount || !selectedProvider}
          >
            Continue to Payment
          </Button>
        </div>
      </form>
    </div>
  );
};