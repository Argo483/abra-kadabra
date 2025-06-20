const API_BASE_URL = "https://9e09-193-114-154-190.ngrok-free.app";

export interface Subscription {
  id: number;
  customer_id: string;
  product_id: string;
  name: string;
  description: string | null;
  price: string;
  billing_cycle: "monthly" | "quarterly" | "yearly";
  status: "active" | "inactive" | "cancelled" | "suspended";
  shopify_order_id: string | null;
  shopify_order_number: string | null;
  created_at: string;
  updated_at: string;
}

export interface SubscriptionStats {
  total: number;
  active: number;
  inactive: number;
  cancelled: number;
  totalRevenue: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
  message?: string;
  error?: string;
}

const defaultHeaders = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "1",
};

export const api = {
  async getSubscriptions(params?: {
    status?: "active" | "inactive" | "cancelled" | "suspended";
    customer_id?: string;
    product_id?: string;
    billing_cycle?: "monthly" | "quarterly" | "yearly";
  }): Promise<ApiResponse<Subscription[]>> {
    const queryString = params
      ? "?" + new URLSearchParams(params as Record<string, string>).toString()
      : "";

    const response = await fetch(
      `${API_BASE_URL}/api/subscriptions${queryString}`,
      {
        headers: defaultHeaders,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch subscriptions");
    }

    return response.json();
  },

  async getSubscriptionById(id: number): Promise<ApiResponse<Subscription>> {
    const response = await fetch(`${API_BASE_URL}/api/subscriptions/${id}`, {
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch subscription");
    }

    return response.json();
  },

  async createSubscription(data: {
    customerId: string;
    productId: string;
    name: string;
    description?: string;
    price: number;
    billing_cycle: "monthly" | "quarterly" | "yearly";
    status?: "active" | "inactive" | "cancelled" | "suspended";
  }): Promise<ApiResponse<Subscription>> {
    const response = await fetch(`${API_BASE_URL}/api/subscriptions`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create subscription");
    }

    return response.json();
  },

  async updateSubscription(
    id: number,
    data: Partial<{
      customerId: string;
      productId: string;
      name: string;
      description: string;
      price: number;
      billing_cycle: "monthly" | "quarterly" | "yearly";
      status: "active" | "inactive" | "cancelled" | "suspended";
    }>
  ): Promise<ApiResponse<Subscription>> {
    const response = await fetch(`${API_BASE_URL}/api/subscriptions/${id}`, {
      method: "PUT",
      headers: defaultHeaders,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update subscription");
    }

    return response.json();
  },

  async deleteSubscription(id: number): Promise<ApiResponse<void>> {
    const response = await fetch(`${API_BASE_URL}/api/subscriptions/${id}`, {
      method: "DELETE",
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error("Failed to delete subscription");
    }

    return response.json();
  },

  async getSubscriptionStats(): Promise<ApiResponse<SubscriptionStats>> {
    const response = await fetch(`${API_BASE_URL}/api/subscriptions/stats`, {
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch subscription stats");
    }

    return response.json();
  },
};
