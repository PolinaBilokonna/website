import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  company: z.string().max(200).optional(),
  inquiryType: z.enum(["consultation", "mentorship", "coaching", "other"]),
  message: z.string().min(10).max(5000),
  website: z.string().max(0).optional().or(z.literal("")),
  locale: z.enum(["bg", "en"]).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const data = parsed.data;
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "Email is not configured" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Polina Site <onboarding@resend.dev>";
  const en = data.locale === "en";

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: en
        ? `[${data.inquiryType}] Message from ${data.name}`
        : `[${data.inquiryType}] Съобщение от ${data.name}`,
      text: en
        ? [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Organization: ${data.company || "-"}`,
            `Type: ${data.inquiryType}`,
            "",
            data.message,
          ].join("\n")
        : [
            `Име: ${data.name}`,
            `Имейл: ${data.email}`,
            `Организация: ${data.company || "-"}`,
            `Тип: ${data.inquiryType}`,
            "",
            data.message,
          ].join("\n"),
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
}
