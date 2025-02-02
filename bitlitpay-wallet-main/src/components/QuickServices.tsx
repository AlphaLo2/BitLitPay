import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, WifiIcon, CreditCard, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickServices = () => {
  const navigate = useNavigate();
  
  const services = [
    { 
      icon: Smartphone, 
      label: "Airtime", 
      action: () => navigate("/services/airtime")
    },
    { 
      icon: WifiIcon, 
      label: "Data", 
      action: () => navigate("/services/data")
    },
    { 
      icon: CreditCard, 
      label: "Top Up", 
      action: () => navigate("/services/topup")
    },
    { 
      icon: Wallet, 
      label: "Buy Crypto", 
      action: () => navigate("/services/crypto")
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium mb-4">Quick Services</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {services.map((service) => (
          <Card key={service.label} className="p-4">
            <Button
              variant="ghost"
              className="w-full h-full flex flex-col items-center gap-2"
              onClick={service.action}
            >
              <service.icon className="h-6 w-6" />
              <span className="text-sm">{service.label}</span>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};