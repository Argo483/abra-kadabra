import React from "react";
import Link from "next/link";
import { api } from "@/lib/api";

async function getSubscriptions() {
  try {
    const response = await api.getSubscriptions();
    return response.data;
  } catch (error) {
    console.error("Failed to fetch subscriptions:", error);
    return [];
  }
}

async function getSubscriptionStats() {
  try {
    const response = await api.getSubscriptionStats();
    return response.data;
  } catch (error) {
    console.error("Failed to fetch subscription stats:", error);
    return {
      total: 0,
      active: 0,
      inactive: 0,
      cancelled: 0,
      totalRevenue: 0,
    };
  }
}

export default async function SubscriptionsPage() {
  const [subscriptions, stats] = await Promise.all([
    getSubscriptions(),
    getSubscriptionStats(),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Subscription Manager
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Manage and track all your customer subscriptions in one beautiful
              dashboard
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">
                  {stats.total}
                </div>
                <div className="text-blue-100 mt-1">Total Subscriptions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">
                  {stats.active}
                </div>
                <div className="text-blue-100 mt-1">Active Subscriptions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">
                  {stats.inactive + stats.cancelled}
                </div>
                <div className="text-blue-100 mt-1">Inactive Subscriptions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">
                  ${stats.totalRevenue.toFixed(2)}
                </div>
                <div className="text-blue-100 mt-1">Monthly Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Subscriptions
            </h2>
            <p className="text-gray-600">
              Manage and monitor all customer subscriptions
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
            Add New Subscription
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
                          Price:{" "}
                          <span className="font-semibold text-gray-900">
                            ${subscription.price}
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

        {/* Empty State (if no subscriptions) */}
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
              No subscriptions yet
            </h3>
            <p className="text-gray-600 mb-6">
              Get started by creating your first subscription
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 cursor-pointer">
              Create Subscription
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
