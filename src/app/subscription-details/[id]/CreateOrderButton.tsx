"use client";

import React from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CreateOrderButton({
  subscriptionId,
}: {
  subscriptionId: string;
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const parsedId = parseInt(subscriptionId, 10);
      if (isNaN(parsedId)) {
        throw new Error("Invalid subscription ID");
      }

      const response = await api.createOrder(parsedId);

      if (response.success) {
        alert("Order created successfully!");
        router.refresh();
      } else {
        throw new Error(response.error || "Failed to create order");
      }
    } catch (error) {
      console.error("Failed to create order:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to create order. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2 ${
          isLoading ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Creating Order...
          </>
        ) : (
          <>
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
          </>
        )}
      </button>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
