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
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 max-w-7xl mx-auto">
        <Link href="/" className="text-indigo-600 mb-4">
          Back to list
        </Link>
        <h1 className="text-2xl font-bold mb-4">{subscription.name}</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
          <div className="flex justify-between mb-4">
            <span>Amount spent: {subscription.amountSpent}</span>
            <span>Orders: {subscription.orders}</span>
            <span>Customer since: {subscription.customerSince}</span>
            <span>RFM group: Prospects</span>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">Last order placed</h2>
            <p>{subscription.lastOrder}</p>
            <p>Order #24206 on February 13, 2025</p>
            <ul>
              <li>Stanley St. Aromatic Beef Rendang Curry x 1 - $29.95</li>
              <li>Greek Chicken Burgers with Feta Chips x 1 - $0.00</li>
              <li>Chicken Lo Mein x 1 - $0.00</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">Customer</h2>
            <p>Contact information: {subscription.customerInfo}</p>
            <p>Default address: {subscription.address}</p>
            <p>Phone: {subscription.phone}</p>
            <p>Marketing: {subscription.marketing}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">Payment method</h2>
            <p>{subscription.paymentMethod}</p>
          </div>
          <div className="flex space-x-4">
            <CreateOrderButton />
            <ViewOrderButton customerId={subscription.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
