import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, CreditCard, BookOpen, Package } from "lucide-react";

export const ShopTab = () => {
  const categories = [
    { icon: Gift, title: "Gift Cards", description: "Digital gift cards for various services" },
    { icon: CreditCard, title: "Virtual Numbers", description: "Virtual card numbers for secure transactions" },
    { icon: BookOpen, title: "eBooks", description: "Digital books and publications" },
    { icon: Package, title: "Physical Products", description: "Tangible items shipped to you" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Shop</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <Card key={category.title} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <category.icon className="h-6 w-6" />
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};