"use client";

import OrderSubmitted from "@/app/(landing)/components/order-status/order-submitted";
import OrderConfirmed from "@/app/(landing)/components/order-status/order-confirmed";
import { useState } from "react";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <main className="bg-gray-100 min-h-[90vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="font-bold text-5xl text-center">Order Status</h1>
      </div>
      {
        isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />   
      }
    </main>
  )
}

export default OrderStatus