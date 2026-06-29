import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { service, serviceLabel, answers } = await req.json();

        if (!service || !answers) {
            return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
        }

        // ── Get visitor IP ───────────────────────────────────────────────────
        // x-forwarded-for is set by Vercel/proxies; falls back to a direct IP
        const forwarded = req.headers.get("x-forwarded-for");
        const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

        // ── Geolocate via ip-api.com (free, no API key needed) ──────────────
        let location = "Unknown";
        try {
            const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=city,country,status`);
            const geo = await geoRes.json();
            if (geo.status === "success") {
                location = `${geo.city}, ${geo.country}`;
            }
        } catch {
            // Silently skip — don't fail the whole submission if geo fails
        }

        // ── Nodemailer ───────────────────────────────────────────────────────
        const transporter = nodemailer.createTransport({
            host: process.env.host,
            port: 465,
            secure: true,
            auth: {
                user: process.env.user,
                pass: process.env.pass,
            },
        });

        const label = serviceLabel || service;

        const answerRows = Object.entries(answers)
            .map(([key, value]) => {
                const formattedKey = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                return `<p><strong>${formattedKey}:</strong> ${value || "—"}</p>`;
            })
            .join("");

        await transporter.sendMail({
            from: '"Webefy Today" <noreply@webefytoday.com>',
            to: "webefytoday@gmail.com",
            replyTo: answers.email || "",
            subject: `New Chatbot Lead: ${label} — ${answers.name || "Unknown"}`,
            html: `
<html>
    <body>
        <div style="font-size: 16px; font-weight: 500;">
            <p><strong>Service:</strong> ${label}</p>
            <p><strong>Location:</strong> 📍 ${location}</p>
            <hr style="border:none;border-top:1px solid #eee;margin:12px 0;" />
            ${answerRows}
        </div>
    </body>
</html>
`,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Nodemailer Error:", error);
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}