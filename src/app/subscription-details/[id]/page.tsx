import React from "react";
import Link from "next/link";
import CreateOrderButton from "./CreateOrderButton";
import ViewOrderButton from "./ViewOrderButton";

const mockData = [
  {
    id: "14970",
    name: "testreftrailingdiscountdirect test",
    ordersProcessed: 0,
    nextOrder: "N/A",
    price: "N/A",
    amountSpent: "$0.00",
    orders: 0,
    customerSince: "4 months",
    lastOrder: "This is a test order. Payment not processed.",
    customerInfo: "testreftrailingdiscountdirect@test.com",
    paymentMethod: "1 saved card",
    address: "1-31 DOMAIN ST, FAWKNER, SOUTH YARRA Victoria 3141, Australia",
    phone: "+61 403 553 331",
    marketing: "Email not subscribed, SMS not subscribed",
  },
  {
    id: "13710",
    name: "Adil Naqvi",
    ordersProcessed: 69,
    nextOrder: "1 Aug 2025, 00:30",
    price: "A$61.99",
    amountSpent: "$61.99",
    orders: 69,
    customerSince: "2 years",
    lastOrder: "Order #24206 on February 13, 2025",
    customerInfo: "adilnaqvi@test.com",
    paymentMethod: "2 saved cards",
  },
  {
    id: "13713",
    name: "Adil Naqvi",
    ordersProcessed: 68,
    nextOrder: "1 Aug 2025, 00:30",
    price: "A$71.99",
    amountSpent: "$71.99",
    orders: 68,
    customerSince: "2 years",
    lastOrder: "Order #24205 on February 12, 2025",
    customerInfo: "adilnaqvi@test.com",
    paymentMethod: "2 saved cards",
  },
  {
    id: "15377",
    name: "Mari CD",
    ordersProcessed: 5,
    nextOrder: "14 Jul 2025, 00:30",
    price: "A$86.99",
    amountSpent: "$86.99",
    orders: 5,
    customerSince: "6 months",
    lastOrder: "Order #24204 on February 11, 2025",
    customerInfo: "maricd@test.com",
    paymentMethod: "1 saved card",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const subscription = mockData.find((sub) => sub.id === id);

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
            The subscription you're looking for doesn't exist.
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
                {subscription.amountSpent}
              </div>
              <div className="text-blue-100 text-sm">Amount Spent</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                {subscription.orders}
              </div>
              <div className="text-blue-100 text-sm">Total Orders</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                {subscription.customerSince}
              </div>
              <div className="text-blue-100 text-sm">Customer Since</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-lg font-bold text-white">Prospects</div>
              <div className="text-blue-100 text-sm">RFM Group</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Last Order Section */}
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
              <h2 className="text-2xl font-bold text-gray-900">Last Order</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-900 font-semibold mb-2">
                  {subscription.lastOrder}
                </p>
                <p className="text-gray-600 text-sm">
                  Order #24206 on February 13, 2025
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Order Items:</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">
                      Stanley St. Aromatic Beef Rendang Curry x 1
                    </span>
                    <span className="font-semibold text-gray-900">$29.95</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">
                      Greek Chicken Burgers with Feta Chips x 1
                    </span>
                    <span className="font-semibold text-gray-900">$0.00</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">Chicken Lo Mein x 1</span>
                    <span className="font-semibold text-gray-900">$0.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Customer Information */}
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
                Customer Details
              </h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-600">{subscription.customerInfo}</p>
                </div>

                {subscription.address && (
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Default Address
                    </h3>
                    <p className="text-gray-600">{subscription.address}</p>
                  </div>
                )}

                {subscription.phone && (
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">{subscription.phone}</p>
                  </div>
                )}

                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Payment Method
                  </h3>
                  <p className="text-gray-600">{subscription.paymentMethod}</p>
                </div>

                {subscription.marketing && (
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Marketing Preferences
                    </h3>
                    <p className="text-gray-600">{subscription.marketing}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <CreateOrderButton />
          <ViewOrderButton customerId={subscription.id} />
        </div>
      </div>
    </div>
  );
}
