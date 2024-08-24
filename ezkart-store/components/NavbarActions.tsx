"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center bg-black rounded-3xl px-4 py-1">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-white font-medium text-lg">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
