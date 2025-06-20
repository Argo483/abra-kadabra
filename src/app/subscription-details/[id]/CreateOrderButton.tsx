"use client";

import React from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

function SuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Order Created Successfully!
          </h3>
          <p className="text-gray-600 mb-6">
            Your order has been created and is now being processed.
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CreateOrderButton({
  subscriptionId,
}: {
  subscriptionId: string;
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
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
        setShowSuccessModal(true);
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

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    router.refresh();
  };

  return (
    <>
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
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
      />
    </>
  );
}
