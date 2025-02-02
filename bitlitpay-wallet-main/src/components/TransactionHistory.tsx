import { Card } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

interface Transaction {
  id: string;
  type: "send" | "receive";
  amount: string;
  fiatAmount: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

const transactions: Transaction[] = [
  {
    id: "1",
    type: "receive",
    amount: "+0.0024 BTC",
    fiatAmount: "+$92.45",
    date: "Today, 14:31",
    status: "completed",
  },
  {
    id: "2",
    type: "send",
    amount: "-0.0012 BTC",
    fiatAmount: "-$46.23",
    date: "Yesterday, 09:15",
    status: "completed",
  },
];

export const TransactionHistory = () => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium mb-4">Recent Transactions</h2>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <Card key={tx.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  tx.type === "receive" 
                    ? "bg-wallet-success/10 text-wallet-success" 
                    : "bg-wallet-accent/10 text-wallet-accent"
                }`}>
                  {tx.type === "receive" ? (
                    <ArrowDownLeft size={20} />
                  ) : (
                    <ArrowUpRight size={20} />
                  )}
                </div>
                <div>
                  <p className="font-medium">
                    {tx.type === "receive" ? "Received" : "Sent"}
                  </p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{tx.amount}</p>
                <p className="text-sm text-gray-500">{tx.fiatAmount}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};