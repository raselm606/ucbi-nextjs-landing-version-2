import nodemailer from "nodemailer";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      name,
      surname,
      email,
      country,
      phone,
      subject,
      comments,
    } = data;

    // HTML-safe values
    const safeName = escapeHtml(name);
    const safeSurname = escapeHtml(surname);
    const safeEmail = escapeHtml(email);
    const safeCountry = escapeHtml(country);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeComments = escapeHtml(comments);

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,

      to: process.env.CONTACT_TO_EMAIL,

      replyTo: email,

      subject: `UCBI Contact Request - ${subject}`,

      html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New UCBI Contact Request</title>
</head>

<body style="margin:0; padding:0; background:#f4f7fb; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">

    <div style="width:100%; padding:30px 0; background:#f4f7fb;">

        <div style="
            max-width:650px;
            margin:0 auto;
            background:#ffffff;
            border-radius:14px;
            overflow:hidden;
            box-shadow:0 10px 30px rgba(17,46,80,0.12);
        ">

            <!-- Header -->
            <div style="
                background:#112E50;
                padding:26px 30px;
            ">

                <h1 style="
                    margin:0;
                    color:#ffffff;
                    font-size:22px;
                    font-weight:700;
                ">
                    New Contact Request
                </h1>

                <p style="
                    margin:8px 0 0;
                    color:#cbd5e1;
                    font-size:14px;
                    line-height:1.5;
                ">
                    A new contact or membership request has been received
                    from the UCBI Group Technologies LTD 
                </p>

            </div>


            <!-- Main Content -->
            <div style="padding:30px;">

                <!-- Applicant Information -->
                <div style="
                    background:#f8fafc;
                    border:1px solid #e5e7eb;
                    border-radius:12px;
                    padding:20px;
                    margin-bottom:24px;
                ">

                    <h2 style="
                        margin:0 0 16px;
                        color:#112E50;
                        font-size:17px;
                    ">
                        Applicant Information
                    </h2>

                    <table style="
                        width:100%;
                        border-collapse:collapse;
                    ">

                        <tr>
                            <td style="
                                padding:10px 0;
                                color:#64748b;
                                font-size:14px;
                                width:180px;
                            ">
                                Name
                            </td>

                            <td style="
                                padding:10px 0;
                                color:#111827;
                                font-size:14px;
                                font-weight:600;
                            ">
                                ${safeName}
                            </td>
                        </tr>


                        <tr>
                            <td style="
                                padding:10px 0;
                                color:#64748b;
                                font-size:14px;
                            ">
                                Surname
                            </td>

                            <td style="
                                padding:10px 0;
                                color:#111827;
                                font-size:14px;
                                font-weight:600;
                            ">
                                ${safeSurname}
                            </td>
                        </tr>


                        <tr>
                            <td style="
                                padding:10px 0;
                                color:#64748b;
                                font-size:14px;
                            ">
                                Email
                            </td>

                            <td style="
                                padding:10px 0;
                                color:#111827;
                                font-size:14px;
                                font-weight:600;
                            ">
                                ${safeEmail}
                            </td>
                        </tr>


                        <tr>
                            <td style="
                                padding:10px 0;
                                color:#64748b;
                                font-size:14px;
                            ">
                                Country
                            </td>

                            <td style="
                                padding:10px 0;
                                color:#111827;
                                font-size:14px;
                                font-weight:600;
                            ">
                                ${safeCountry}
                            </td>
                        </tr>


                        <tr>
                            <td style="
                                padding:10px 0;
                                color:#64748b;
                                font-size:14px;
                            ">
                                Phone
                            </td>

                            <td style="
                                padding:10px 0;
                                color:#111827;
                                font-size:14px;
                                font-weight:600;
                            ">
                                ${safePhone}
                            </td>
                        </tr>

                    </table>

                </div>


                <!-- Request Details -->
                <div style="
                    background:#ffffff;
                    border:1px solid #e5e7eb;
                    border-radius:12px;
                    padding:20px;
                ">

                    <h2 style="
                        margin:0 0 16px;
                        color:#112E50;
                        font-size:17px;
                    ">
                        Request Details
                    </h2>


                    <table style="
                        width:100%;
                        border-collapse:collapse;
                    ">

                        <tr>

                            <td style="
                                padding:10px 0;
                                border-bottom:1px solid #eef2f7;
                                color:#64748b;
                                font-size:14px;
                                width:180px;
                            ">
                                Subject
                            </td>

                            <td style="
                                padding:10px 0;
                                border-bottom:1px solid #eef2f7;
                                color:#111827;
                                font-size:14px;
                                font-weight:600;
                            ">
                                ${safeSubject}
                            </td>

                        </tr>

                    </table>


                    <!-- Message -->

                    <div style="margin-top:20px;">

                        <p style="
                            margin:0 0 10px;
                            color:#64748b;
                            font-size:14px;
                        ">
                            Message
                        </p>

                        <div style="
                            background:#f8fafc;
                            border:1px solid #e5e7eb;
                            border-radius:10px;
                            padding:16px;
                            color:#334155;
                            font-size:14px;
                            line-height:1.7;
                            white-space:pre-wrap;
                        ">
                            ${safeComments}
                        </div>

                    </div>

                </div>


                <!-- Notice -->

                <div style="
                    margin-top:26px;
                    padding:18px;
                    background:#eff6ff;
                    border-left:4px solid #112E50;
                    border-radius:10px;
                ">

                    <p style="
                        margin:0;
                        color:#334155;
                        font-size:14px;
                        line-height:1.6;
                    ">
                        A new request has been submitted through the UCBI website.
                        Please review the information above and respond to the
                        applicant as appropriate
                    </p>

                </div>

            </div>


            <!-- Footer -->

            <div style="
                background:#f8fafc;
                padding:18px 30px;
                border-top:1px solid #e5e7eb;
            ">

                <p style="
                    margin:0;
                    color:#64748b;
                    font-size:12px;
                    text-align:center;
                ">
                    This is an automated notification from UCBI Group Technologies LTD
                </p>

            </div>

        </div>

    </div>

</body>
</html>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (error) {

    console.error("SMTP ERROR:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Email sending failed.",
      },
      { status: 500 }
    );
  }
}