import { NextRequest, NextResponse } from "next/server";
import webpush from "web-push";

// Configure web-push with VAPID keys
webpush.setVapidDetails(
  "mailto: <ishamistry.lamprostech@gmail.com>",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const subscription = await request.json();

    // Send a test notification
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: "Welcome!",
        body: "Thanks for subscribing to push notifications",
      })
    );

    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
