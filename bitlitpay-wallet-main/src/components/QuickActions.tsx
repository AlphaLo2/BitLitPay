import { Button } from "@/components/ui/button";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export const QuickActions = () => {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  // This should be replaced with actual wallet check
  const hasWallet = false; 

  const handleAction = (action: 'send' | 'receive') => {
    if (!hasWallet) {
      setShowDialog(true);
      return;
    }
    navigate(`/wallet/${action}`);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Button
          variant="outline"
          className="flex items-center justify-center space-x-2 h-14 bg-white hover:bg-gray-50"
          onClick={() => handleAction('send')}
        >
          <ArrowUpRight className="text-wallet-accent" />
          <span className="font-medium">Send</span>
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center space-x-2 h-14 bg-white hover:bg-gray-50"
          onClick={() => handleAction('receive')}
        >
          <ArrowDownLeft className="text-wallet-success" />
          <span className="font-medium">Receive</span>
        </Button>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Wallet First</DialogTitle>
            <DialogDescription>
              You need to create a wallet before you can send or receive Bitcoin.
              Would you like to create one now?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              setShowDialog(false);
              navigate('/wallet');
            }}>
              Create Wallet
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};