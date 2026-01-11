"use client";

import { cartList } from "../ui/cart-popup";
import Image from "next/image";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import Button from "../ui/button";
import priceformatter from "@/app/utils/price-formatter";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const {push} = useRouter();

  const total = cartList.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CardWithHeader title="Cart Items">
      <div className="overflow-auto max-h-[300px]">
        {cartList.map((item, index) => (
          <div key={index} className="border-b border-gray-200 gap-3 p-4 flex">
            <div className="bg-primary-light aspect-square w-16 min-w-16 flex justify-center items-center mb-2">
              <Image
                src={`/images/products/${item.imgUrl}`}
                alt={item.name}
                width={63}
                height={63}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">{priceformatter(item.price)}</div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 self-center ml-auto p-0!"
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between">
          <div className="font-bold text-sm">Total</div>
          <div className="font-bold text-primary text-xs">
            {priceformatter(total)}
          </div>
        </div>
        <Button variant="dark" className="w-full mt-4" onClick={() => push('/payment')}  >
          <FiCreditCard /> Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;
