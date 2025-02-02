import { Home, Wallet, ShoppingBag, Coins, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: Wallet, label: "Wallet", path: "/wallet" },
    { icon: ShoppingBag, label: "Shop", path: "/shop" },
    { icon: Coins, label: "Earn", path: "/earn" },
    { icon: UserRound, label: "Me", path: "/me" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-between items-center animate-fade-in">
      {navItems.map(({ icon: Icon, label, path }) => (
        <Link
          key={label}
          to={path}
          className={`flex flex-col items-center ${
            isActive(path)
              ? "text-wallet-accent"
              : "text-gray-500 hover:text-wallet-accent"
          }`}
        >
          <Icon className="h-6 w-6" />
          <span className="text-xs mt-1">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;