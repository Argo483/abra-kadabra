import React from "react";
import Link from "next/link";
import CreateOrderButton from "./CreateOrderButton";
import ViewOrderButton from "./ViewOrderButton";
import { api } from "@/lib/api";

async function getSubscription(id: number) {
  try {
    const response = await api.getSubscriptionById(id);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch subscription:", error);
    return null;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const subscription = await getSubscription(parseInt(params.id, 10));

  if (!subscription) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Subscription Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The subscription you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-200"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-2xl border border-white/30">
              {subscription.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {subscription.name}
              </h1>
              <p className="text-blue-100">
                Subscription ID: {subscription.id}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                ${subscription.price}
              </div>
              <div className="text-blue-100 text-sm">
                Price per {subscription.billing_cycle.slice(0, -2)}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                #{subscription.shopify_order_number || "N/A"}
              </div>
              <div className="text-blue-100 text-sm">Order Number</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white capitalize">
                {subscription.billing_cycle}
              </div>
              <div className="text-blue-100 text-sm">Billing Cycle</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-lg font-bold text-white capitalize">
                {subscription.status}
              </div>
              <div className="text-blue-100 text-sm">Status</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Subscription Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Subscription Details
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Customer ID
                </h3>
                <p className="text-gray-600">{subscription.customer_id}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Product ID</h3>
                <p className="text-gray-600">{subscription.product_id}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Created At</h3>
                <p className="text-gray-600">
                  {new Date(subscription.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Shopify Order Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Shopify Order Details
              </h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Order ID</h3>
                  <p className="text-gray-600">
                    {subscription.shopify_order_id || "N/A"}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Order Number
                  </h3>
                  <p className="text-gray-600">
                    #{subscription.shopify_order_number || "N/A"}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Last Updated
                  </h3>
                  <p className="text-gray-600">
                    {new Date(subscription.updated_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <CreateOrderButton />
          <ViewOrderButton customerId={subscription.customer_id} />
        </div>
      </div>
    </div>
  );
}
