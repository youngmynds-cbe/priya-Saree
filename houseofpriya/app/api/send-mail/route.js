// import { NextResponse } from "next/server";
// import { transporter } from "@/lib/mailer";

// export async function POST(req) {
//   try {
//     const { name, email } = await req.json();
//      console.log("name ",name,email,process.env.EMAIL_USER);

//     await transporter.sendMail({
//       from: `"House of Priya" <${process.env.EMAIL_USER}>`,
    
//       to: email,
//       subject: "Thank you for registering!",
//       html: `
//         <div style="font-family: Arial; text-align: center;">
//           <h2>Thank You for Registering, ${name} 💜</h2>
//           <p>We’ll notify you as soon as House of Priya opens in RS Puram.</p>
//           <p><b>Get ready to experience timeless elegance.</b></p>
//         </div>
//       `,
//     });
   
    

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { success: false, message: "Mail failed" },
//       { status: 500 }
//     );
//   }
// }


 import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    console.log("DATA:", name, email);

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"House of Priya" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for registering!",
      html: `
        <div style="font-family: Arial; text-align: center;">
          <h2>Thank You for Registering, ${name} 💜</h2>
          <p>We’ll notify you as soon as House of Priya opens in RS Puram.</p>
          <p><b>Get ready to experience timeless elegance.</b></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Mail failed" },
      { status: 500 }
    );
  }
}
