"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, UserPen } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-black rounded-3xl px-4 py-1 hover:opacity-80 hover:bg-black"
      >
        <ShoppingBag size={15} color="white" />
        <span className="ml-2 text-white font-medium text-md">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
