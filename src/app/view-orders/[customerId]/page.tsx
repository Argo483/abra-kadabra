import React from "react";
import Link from "next/link";

const mockOrders = [
  {
    orderId: "100942",
    date: "Today at 1:43 am",
    customer: "Adil Naqvi",
    channel: "Headless frontend",
    total: "$47.90",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
    items: "7 Items",
    deliveryStatus: "Standard",
    tags: "Subscription #15470",
  },
  {
    orderId: "100943",
    date: "Yesterday at 3:15 pm",
    customer: "Adil Naqvi",
    channel: "Online",
    total: "$30.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
    items: "3 Items",
    deliveryStatus: "Express",
    tags: "Subscription #15471",
  },
  {
    orderId: "100944",
    date: "2 days ago at 11:00 am",
    customer: "Adil Naqvi",
    channel: "Retail",
    total: "$15.50",
    paymentStatus: "Pending",
    fulfillmentStatus: "Unfulfilled",
    items: "1 Item",
    deliveryStatus: "Standard",
    tags: "Subscription #15472",
  },
  // Add more mock orders as needed
];

const getStatusColor = (status: string, type: "payment" | "fulfillment") => {
  if (type === "payment") {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  } else {
    switch (status.toLowerCase()) {
      case "fulfilled":
        return "bg-blue-100 text-blue-700";
      case "unfulfilled":
        return "bg-orange-100 text-orange-700";
      case "partially fulfilled":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }
};

export default async function Page({
  params,
}: {
  params: Promise<{ customerId: string }>;
}) {
  const { customerId } = await params;
  const orders = mockOrders.filter((order) => order.customer === "Adil Naqvi");
  const customerName =
    orders.length > 0 ? orders[0].customer : `Customer ${customerId}`;

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
              {customerName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Order History
              </h1>
              <p className="text-blue-100">
                {customerName} • Customer ID: {customerId}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                {orders.length}
              </div>
              <div className="text-blue-100 text-sm">Total Orders</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                {orders.filter((o) => o.paymentStatus === "Paid").length}
              </div>
              <div className="text-blue-100 text-sm">Paid Orders</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                {
                  orders.filter((o) => o.fulfillmentStatus === "Fulfilled")
                    .length
                }
              </div>
              <div className="text-blue-100 text-sm">Fulfilled Orders</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">
                $
                {orders
                  .reduce(
                    (sum, order) =>
                      sum + parseFloat(order.total.replace("$", "")),
                    0
                  )
                  .toFixed(2)}
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
              Recent Orders
            </h2>
            <p className="text-gray-600">Complete order history and details</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
            Export Orders
          </button>
        </div>

        {/* Orders Grid - Mobile Friendly */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Order Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
                    #{order.orderId.slice(-3)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Order #{order.orderId}
                    </h3>
                    <p className="text-gray-600 text-sm">{order.date}</p>
                  </div>
                </div>

                {/* Order Details Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 flex-1 lg:max-w-4xl">
                  <div className="text-center lg:text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Channel
                    </p>
                    <p className="font-semibold text-gray-900">
                      {order.channel}
                    </p>
                  </div>

                  <div className="text-center lg:text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Items
                    </p>
                    <p className="font-semibold text-gray-900">{order.items}</p>
                  </div>

                  <div className="text-center lg:text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Payment
                    </p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        order.paymentStatus,
                        "payment"
                      )}`}
                    >
                      {order.paymentStatus}
                    </span>
                  </div>

                  <div className="text-center lg:text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Fulfillment
                    </p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        order.fulfillmentStatus,
                        "fulfillment"
                      )}`}
                    >
                      {order.fulfillmentStatus}
                    </span>
                  </div>

                  <div className="text-center lg:text-right col-span-2 lg:col-span-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Total
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                      {order.total}
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    {order.deliveryStatus}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                    {order.tags}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No orders found
            </h3>
            <p className="text-gray-600 mb-6">
              This customer hasn't placed any orders yet
            </p>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Back to Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
