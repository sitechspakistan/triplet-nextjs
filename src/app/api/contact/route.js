import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message, budget, phone } = await req.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "syedmmurtuza393@gmail.com",
                pass: "engsgrftrfhkbxgu",
            },
        });

        const finalBudget = budget && budget.trim() !== "" ? budget : "Not Specified";

        await transporter.sendMail({
            from: "syedmmurtuza393@gmail.com",
            to: "syedmmurtuza393@gmail.com",
            replyTo: email,
            subject: "New Message from Contact Form",
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
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