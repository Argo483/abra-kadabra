import { NextResponse } from "next/server";

const API_BASE_URL = "https://9e09-193-114-154-190.ngrok-free.app";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/subscriptions/${params.id}/order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
        },
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
