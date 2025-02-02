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

const Receive = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [qrCode, setQrCode] = useState(""); // This will store the QR code data

  const generateInvoice = async () => {
    // Implement LNbits invoice generation logic here
    console.log("Generating invoice", { amount, note });
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
              <CardTitle>Receive via Lightning</CardTitle>
              <CardDescription>
                Generate a Lightning invoice to receive Bitcoin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
              <Button className="w-full" onClick={generateInvoice}>
                Generate Invoice
              </Button>
              {qrCode && (
                <div className="mt-4 p-4 bg-white rounded-lg flex flex-col items-center">
                  <img
                    src={qrCode}
                    alt="QR Code"
                    className="w-48 h-48 mb-4"
                  />
                  <p className="text-xs text-center break-all">
                    {/* Lightning invoice will be displayed here */}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="onchain">
          <Card>
            <CardHeader>
              <CardTitle>Receive On-chain</CardTitle>
              <CardDescription>
                Receive Bitcoin using on-chain address
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-lg flex flex-col items-center">
                {/* On-chain QR code will be displayed here */}
                <p className="text-xs text-center break-all mt-4">
                  {/* Bitcoin address will be displayed here */}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Expected Amount (optional)</Label>
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Receive;