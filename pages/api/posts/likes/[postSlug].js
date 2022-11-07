import { connectToCluster } from "../../../../utils/db";

const dbConnectionUri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.nr2se.mongodb.net/?retryWrites=true&w=majority`;

const dbName = process.env.mongodb_database;

async function handler(req, res) {
  const postSlug = req.query.postSlug;

  if (req.method === "PUT") {
    let mongoClient;

    try {
      mongoClient = await connectToCluster(dbConnectionUri);
      const db = mongoClient.db(dbName);
      const collection = db.collection("posts");
      const result = await collection.findOneAndUpdate(
        { slug: postSlug },
        {
          $inc: {
            likes: 1,
          },
        },
        { returnOriginal: false }
      );

      res.status(200).json({ postInfo: result.value });
    } finally {
      await mongoClient.close();
    }
  }
}

export default handler;
