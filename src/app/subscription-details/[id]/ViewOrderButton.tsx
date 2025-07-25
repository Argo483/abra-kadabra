"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ViewOrderButton({
  subscriptionId,
}: {
  subscriptionId: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/view-orders/${subscriptionId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl border border-gray-200 flex items-center gap-2 cursor-pointer"
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
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      View Orders
    </button>
  );
}
