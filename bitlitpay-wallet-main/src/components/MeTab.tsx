import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Settings, Bell, Shield, CreditCard, History } from "lucide-react";

export const MeTab = () => {
  const sections = [
    { icon: User, title: "Profile", description: "Manage your personal information" },
    { icon: Settings, title: "Settings", description: "App preferences and configurations" },
    { icon: Bell, title: "Notifications", description: "Manage your alerts and notifications" },
    { icon: Shield, title: "Security", description: "Security settings and privacy" },
    { icon: CreditCard, title: "Payment Methods", description: "Manage your payment options" },
    { icon: History, title: "Transaction History", description: "View your past transactions" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Me</h2>
      
      <div className="space-y-4">
        {sections.map((section) => (
          <Card key={section.title} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="flex items-center space-x-4 py-4">
              <section.icon className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="font-medium">{section.title}</h3>
                <p className="text-sm text-gray-600">{section.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};