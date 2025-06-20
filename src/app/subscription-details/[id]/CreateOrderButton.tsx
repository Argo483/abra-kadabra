"use client";

import React from "react";

const CreateOrderButton = () => {
  const handleCreateOrder = () => {
    alert("Not implemented");
  };

  return (
    <button
      onClick={handleCreateOrder}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
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
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      Create Order
    </button>
  );
};

export default CreateOrderButton;
