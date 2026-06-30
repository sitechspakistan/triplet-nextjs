import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message, budget, phone, service } = await req.json();
        const transporter = nodemailer.createTransport({
            host: process.env.host,
            port: 465,
            secure: true,
            auth: {
                user: process.env.user,
                pass: process.env.pass,
            },
        });

        const finalBudget = budget && budget.trim() !== "" ? budget : "Not Specified";
        const finalService = service && service.trim() !== "" ? service : "Not Specified";

        await transporter.sendMail({
            from: `"Webefy Today" <noreply@webefytoday.com>`,
            to: "webefytoday@gmail.com",
            replyTo: email,
            subject: "New Message from Contact Form",
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service:</strong> ${finalService}</p>
                <p><strong>Budget:</strong> ${finalBudget}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p><strong>Phone Number:</strong> ${phone || "Not Provided"}</p>
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