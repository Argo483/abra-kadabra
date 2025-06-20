import React from "react";
import Link from "next/link";
import { api } from "@/lib/api";

async function getCustomerSubscriptions(customerId: string) {
  try {
    const response = await api.getSubscriptions({ customer_id: customerId });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch customer subscriptions:", error);
    return [];
  }
}

export default async function Page({
  params,
}: {
  params: { customerId: string };
}) {
  const subscriptions = await getCustomerSubscriptions(params.customerId);
  const totalRevenue = subscriptions.reduce(
    (sum, sub) => sum + parseFloat(sub.price),
    0
  );
  const activeSubscriptions = subscriptions.filter(
    (sub) => sub.status === "active"
  ).length;

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
              <svg
                className="w-8 h-8"
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
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Customer Orders
              </h1>
              <p className="text-blue-100">Customer ID: {params.customerId}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                {subscriptions.length}
              </div>
              <div className="text-blue-100 text-sm">Total Subscriptions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                {activeSubscriptions}
              </div>
              <div className="text-blue-100 text-sm">Active Subscriptions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                ${totalRevenue.toFixed(2)}
              </div>
              <div className="text-blue-100 text-sm">Total Revenue</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Subscription History
            </h2>
            <p className="text-gray-600">
              View and manage customer subscriptions
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
            Export Orders
          </button>
        </div>

        {/* Subscription Cards */}
        <div className="grid gap-6">
          {subscriptions.map((subscription) => (
            <Link
              key={subscription.id}
              href={`/subscription-details/${subscription.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 p-6 group-hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {subscription.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {subscription.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          ID: {subscription.id}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          <span className="font-semibold text-gray-900">
                            {subscription.billing_cycle}
                          </span>{" "}
                          billing
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Order:{" "}
                          <span className="font-semibold text-gray-900">
                            #{subscription.shopify_order_number || "N/A"}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Created:{" "}
                          <span className="font-semibold text-gray-900">
                            {new Date(
                              subscription.created_at
                            ).toLocaleDateString()}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        subscription.status === "active"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {subscription.status.charAt(0).toUpperCase() +
                        subscription.status.slice(1)}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        ${subscription.price}
                      </div>
                      <div className="text-xs text-gray-500">
                        per {subscription.billing_cycle.slice(0, -2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {subscriptions.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No subscriptions found
            </h3>
            <p className="text-gray-600 mb-6">
              This customer doesn&apos;t have any subscriptions yet
            </p>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 cursor-pointer"
            >
              Back to Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
