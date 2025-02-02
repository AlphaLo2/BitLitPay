import React from 'react';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Send = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const handleSend = async () => {
    // Implement LNbits send logic here
    console.log("Sending payment", { amount, address, note });
  };

  return (
    <div className="p-4">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => navigate("/wallet")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <Tabs defaultValue="lightning" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="lightning">Lightning</TabsTrigger>
          <TabsTrigger value="onchain">On-chain</TabsTrigger>
        </TabsList>
        <TabsContent value="lightning">
          <Card>
            <CardHeader>
              <CardTitle>Send via Lightning</CardTitle>
              <CardDescription>
                Send Bitcoin instantly using Lightning Network
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="lightning-address">Lightning Address/Invoice</Label>
                <Input
                  id="lightning-address"
                  placeholder="Lightning Address or Invoice"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (sats)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Amount in sats"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="note">Note (optional)</Label>
                <Input
                  id="note"
                  placeholder="Add a note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <Button className="w-full" onClick={handleSend}>
                Send Payment
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="onchain">
          <Card>
            <CardHeader>
              <CardTitle>Send On-chain</CardTitle>
              <CardDescription>
                Send Bitcoin using on-chain transaction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="btc-address">Bitcoin Address</Label>
                <Input
                  id="btc-address"
                  placeholder="Bitcoin Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (sats)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Amount in sats"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="note">Note (optional)</Label>
                <Input
                  id="note"
                  placeholder="Add a note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <Button className="w-full" onClick={handleSend}>
                Send Payment
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Send;