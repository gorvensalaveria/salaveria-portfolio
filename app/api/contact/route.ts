export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["gorvengarciasalaveria@gmail.com"],
            subject: `Message from ${name}`,
            text: `From: ${name} (${email})\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    }   catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Something went wrong"}, { status: 500 });
    }
}