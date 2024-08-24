"use client";

import Image from "next/image";
import { Trash } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-lg overflow-hidden sm:w-48 sm:h-48">
        <Image
          fill
          src={data.images[0].url}
          alt="Product Image"
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => cart.removeItem(data.id)}
            icon={<Trash size={20} />}
            className="bg-red-100"
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0 sm:gap-y-2">
          <div className="flex justify-between">
            <p className="text-xl    font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-300 pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
