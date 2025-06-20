import React from "react";

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

export default async function Page({
  params,
}: {
  params: Promise<{ customerId: string }>;
}) {
  const { customerId } = await params;
  const orders = mockOrders.filter((order) => order.customer === "Adil Naqvi"); // Filter by customerId if needed

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Orders for Customer {customerId}
        </h1>
        <div className="bg-white shadow overflow-x-auto sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Channel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fulfillment status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.channel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.paymentStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">
                    {order.fulfillmentStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.items}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.deliveryStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.tags}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
