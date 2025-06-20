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
      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      View All Orders
    </button>
  );
};

export default ViewOrderButton;
