import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wallet-primary to-wallet-primary/90 flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="space-y-4">
          <img src="/logo.png" alt="BitLitPay Logo" className="w-24 h-24 mx-auto" />
          <h1 className="text-4xl font-bold">BitLitPay</h1>
          <p className="text-xl text-white/80">Lightning-fast cryptocurrency transactions</p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full bg-white text-wallet-primary hover:bg-white/90">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/10">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;