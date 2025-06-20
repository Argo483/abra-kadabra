import React from "react";

const mockData = [
  {
    id: "14970",
    name: "testreftrailingdiscountdirect test",
    ordersProcessed: 0,
    nextOrder: "N/A",
    price: "N/A",
  },
  {
    id: "13710",
    name: "Adil Naqvi",
    ordersProcessed: 69,
    nextOrder: "1 Aug 2025, 00:30",
    price: "A$61.99",
  },
  {
    id: "13713",
    name: "Adil Naqvi",
    ordersProcessed: 68,
    nextOrder: "1 Aug 2025, 00:30",
    price: "A$71.99",
  },
  {
    id: "15377",
    name: "Mari CD",
    ordersProcessed: 5,
    nextOrder: "14 Jul 2025, 00:30",
    price: "A$86.99",
  },
];

// Uncomment and replace with real API endpoint
// const fetchData = async () => {
//   const response = await fetch('/api/subscriptions');
//   const data = await response.json();
//   return data;
// };

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Subscriptions</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {mockData.map((subscription) => (
            <li key={subscription.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-indigo-600 truncate">
                  {subscription.name}
                </div>
                <div className="ml-2 flex-shrink-0 flex">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <div className="mr-6 flex items-center text-sm text-gray-500">
                    {subscription.ordersProcessed} subscription orders processed
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    Next order: {subscription.nextOrder}
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  {subscription.price}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
