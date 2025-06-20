"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ViewOrderButton = ({ customerId }: { customerId: string }) => {
  const router = useRouter();

  const handleViewOrder = () => {
    router.push(`/view-orders/${customerId}`);
  };

  return (
    <button
      onClick={handleViewOrder}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      View All Orders
    </button>
  );
};

export default ViewOrderButton;
