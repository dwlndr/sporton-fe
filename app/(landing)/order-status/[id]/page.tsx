import OrderSubmitted from "@/app/(landing)/components/order-status/order-submitted";
import OrderConfirmed from "@/app/(landing)/components/order-status/order-confirmed";
import { getTransactionById } from "@/app/services/transaction.service";
import OrderRejected from "../../components/order-status/order-rejected";
import {TPageProps} from "../../product/[id]/page"

const OrderStatus = async ({ params }: TPageProps) => {
  const { id } = await params;

  const transaction = await getTransactionById(id);
  console.log("transaction", transaction);

  return (
    <main className="bg-gray-100 min-h-[90vh] pt-25">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="font-bold text-5xl text-center">Order Status</h1>
      </div>
      {transaction.status === "pending" && <OrderSubmitted />}
      {transaction.status === "paid" && <OrderConfirmed />}
      {transaction.status === "rejected" && <OrderRejected />}
    </main>
  );
};

export default OrderStatus;
