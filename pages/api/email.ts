import { NextApiRequest, NextApiResponse } from "next"
import { transporter, mailOptions } from "../../config/nodemailer"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(404).send({ error: "Not Post error." })
  }

  res.setHeader("Content-Type", "application/json")

  try {
    if (req.method === "POST") {
      const { id, name, email, message } = req.body

      console.log("id", id)

      if (!id || !name || !email || !message) {
        return res.status(400).json({ message: "Request failed" })
      }

      console.log(message)

      await transporter.sendMail({
        ...mailOptions,
        subject: message,
        text: "This is  a test message",
        html: "<h1>Test test</h1>",
      })

      res.status(201).json({ message: "success sended!!" })
    }
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export default handler
