"use client";

import React from "react";

const CreateOrderButton = () => {
  const handleCreateOrder = () => {
    alert("Not implemented");
  };

  return (
    <button
      onClick={handleCreateOrder}
      className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
    >
      Create Order
    </button>
  );
};

export default CreateOrderButton;
