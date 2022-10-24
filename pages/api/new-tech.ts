import { MongoClient } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body

    const client = await MongoClient.connect(
      "mongodb+srv://Angus:simass16600@cluster0.uz2xl.mongodb.net/portfolio?retryWrites=true&w=majority"
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
