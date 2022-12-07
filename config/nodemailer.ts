import nodemailer from "nodemailer"

const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS
const password = process.env.NEXT_PUBLIC_PASSWORD

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email as string,
    pass: password as string,
  },
})

export const mailOptions = {
  from: email as string,
  to: email as string,
}
