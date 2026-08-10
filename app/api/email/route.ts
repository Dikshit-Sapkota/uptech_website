
import nodemailer from 'nodemailer';

export async function POST(req:Request )
{
    const emailData= await req.json();
    const trasnporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });
const message = `
  Details are:
  Name: ${emailData.name}
  Number:${emailData.number}
  Email Address: ${emailData.email}
  Service: ${emailData.service}
  Message: ${emailData.message}
`;
    const Adminemail = {
        from:process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: "New Entry From the Uptech Solution",
        text: message,
    };
     const clientmail = {
        from:process.env.SMTP_USER,
        to: emailData.email,
        subject: "Thank You For Connecting Us || Uptech Solution",
        text: message,
    };
    //  console.log(Adminemail)

    try {
       
        await trasnporter.verify();
console.log("SMTP connection successful");
        await trasnporter.sendMail(Adminemail);
      await trasnporter.sendMail(clientmail);

        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
    }

}