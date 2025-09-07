import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Count visitors
    const count = await prisma.visitor.count();
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    // Get IP and headers
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const userAgent = req.headers.get("user-agent") || "unknown";
    const referrer = req.headers.get("referer") || "unknown";

    // Get page URL (from body sent by frontend)
    const body = await req.json().catch(() => ({}));
    const pageUrl = body.pageUrl || "unknown";

    // Basic parsing (could use UA parser library later)
    let deviceType = "unknown";
    let browser = "unknown";
    let os = "unknown";

    if (userAgent.includes("Windows")) os = "Windows";
    else if (userAgent.includes("Mac")) os = "MacOS";
    else if (userAgent.includes("Linux")) os = "Linux";

    if (userAgent.includes("Mobile")) deviceType = "Mobile";
    else deviceType = "Desktop";

    if (userAgent.includes("Chrome")) browser = "Chrome";
    else if (userAgent.includes("Firefox")) browser = "Firefox";
    else if (userAgent.includes("Safari")) browser = "Safari";

    // 🌍 Fetch location info from ipwho.is (free, no API key needed)
    let country = "unknown";
    let region = "unknown";
    let city = "unknown";

    if (ip !== "unknown") {
      try {
        const res = await fetch(`https://ipwho.is/${ip}`);
        const data = await res.json();
        if (data.success) {
          country = data.country || "unknown";
          region = data.region || "unknown";
          city = data.city || "unknown";
        }
      } catch {
        console.error("Failed to fetch location data");
      }
    }

    // Store visitor
    await prisma.visitor.create({
      data: {
        ip_address: ip,
        user_agent: userAgent,
        page_url: pageUrl,
        referrer,
        device_type: deviceType,
        browser,
        os,
        country,
        region,
        city,
      },
    });

    return NextResponse.json({ message: "Visitor added" });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
