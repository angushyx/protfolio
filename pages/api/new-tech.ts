import { MongoClient } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body

    const client = await MongoClient.connect(
      process.env.MONGODB_URI ?? "whatever default"
    )
    const db = client.db()
    const portfolioCollection = db.collection("portfolio")

    const result = await portfolioCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({ message: "success sended!!" })
  }
}

export default handler
