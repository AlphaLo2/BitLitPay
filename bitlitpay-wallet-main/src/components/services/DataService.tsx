import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { countryData, getCurrentCountry } from "@/utils/countryUtils";

interface DataPlan {
  id: string;
  name: string;
  size: string;
  validity: string;
  price: number;
}

const mockDataPlans: DataPlan[] = [
  { id: "1", name: "Basic", size: "1.5GB", validity: "30 days", price: 1000 },
  { id: "2", name: "Standard", size: "3GB", validity: "30 days", price: 1500 },
  { id: "3", name: "Premium", size: "10GB", validity: "30 days", price: 3000 },
];

export const DataService = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<DataPlan | null>(null);
  
  const country = countryData[getCurrentCountry()];
  const providers = country.providers.filter(p => p.services.data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buy data", { phoneNumber, selectedProvider, selectedPlan });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-xl font-semibold">Buy Data</h2>
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

        <div className="space-y-4">
          <Label>Select Data Plan</Label>
          <div className="grid gap-4">
            {mockDataPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`p-4 cursor-pointer ${
                  selectedPlan?.id === plan.id ? "border-wallet-accent" : ""
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{plan.name}</h3>
                    <p className="text-sm text-gray-500">{plan.size} - {plan.validity}</p>
                  </div>
                  <p className="font-medium">
                    {country.currencySymbol}{plan.price}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-wallet-accent text-white"
          disabled={!phoneNumber || !selectedProvider || !selectedPlan}
        >
          Continue to Payment
        </Button>
      </form>
    </div>
  );
};