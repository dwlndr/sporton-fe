"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import TransactionTable from "../../components/transactions/transaction-table";
import TransactiontModal from "../../components/transactions/transaction-modal";
import { useState, useEffect } from "react";
import { Transaction, Product } from "@/app/types";
import {
  getAllTransactions,
  updateTransaction,
} from "@/app/services/transaction.service";
import { getAllProducts } from "@/app/services/product.service";
import { toast } from "react-toastify";

const TransactionManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    try {
    const [trx, prods] = await Promise.all([
      getAllTransactions(),
      getAllProducts(),
    ]);
    setTransactions(trx);
    setProducts(prods);
  } catch (e) {
    console.error(e);
  }

  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleViewDetails = (transaction: Transaction) => {
    setIsModalOpen(true);
    setSelectedTransaction(transaction);
  };

  const handleStatusChange = async (
    id: string,
    status: "paid" | "rejected",
  ) => {
    try {
      const formData = new FormData();
      formData.append("status", status);
      await updateTransaction(id, formData);

      toast.success("Transaction status updated");

      await fetchTransactions();
    } catch (error) {
      console.error("Failed to update transaction status", error);
      toast.error("Failed to update transaction status");
    } finally {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Transaction Management</h1>
          <p className="opacity-50">
            Verify incoming payments and manage orders.
          </p>
        </div>
      </div>
      <TransactionTable
        transactions={transactions}
        onViewDetails={handleViewDetails}
      />
      <TransactiontModal
        transaction={selectedTransaction}
        products={products}
        onStatusChange={handleStatusChange}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default TransactionManagement;
