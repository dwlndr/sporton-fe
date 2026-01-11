import priceformatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const cartList = [
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    qty: 1,
    imgUrl: "product (1).png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 789000,
    qty: 1,
    imgUrl: "product (2).png",
  },
  {
    name: "SportsOn SuperHyperfast Shoes",
    category: "Running",
    price: 600000,
    qty: 1,
    imgUrl: "product (3).png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 440000,
    qty: 2,
    imgUrl: "product (4).png",
  },
  {
    name: "SportsOn Slowliving",
    category: "Running",
    price: 190000,
    qty: 1,
    imgUrl: "product (5).png",
  },
];

const CartPopup = () => {
  const total = cartList.reduce((sum, item) => sum + item.price * item.qty, 0);

  const {push} = useRouter();

  const CheckoutCart = () => {
    push('/checkout');
  }

  return (
    <div className="absolute bg-white right-3 top-16 shadow-xl shadow-black/10 border border-gray-200 w-90">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
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
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between">
          <div className="font-bold text-sm">Total</div>
          <div className="font-bold text-primary text-xs">
            {priceformatter(total)}
          </div>
        </div>
        <Button variant="dark" size="small" className="w-full mt-4" onClick={CheckoutCart}>
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
