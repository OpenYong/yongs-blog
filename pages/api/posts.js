import { connectToCluster } from "../../utils/db";

const dbConnectionUri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.nr2se.mongodb.net/?retryWrites=true&w=majority`;

const dbName = process.env.mongodb_database;

async function handler(req, res) {
  if (req.method === "GET") {
    let mongoClient;

    try {
      mongoClient = await connectToCluster(dbConnectionUri);
      const db = mongoClient.db(dbName);
      const collection = db.collection("posts");
      const result = await collection
        .find({})
        // .sort({
        //   _id: -1,
        // })
        .toArray();

      res.status(200).json({ postsInfo: result });
    } finally {
      await mongoClient.close();
    }
  }

  if (req.method === "PUT") {
    const { visit, slug } = req.body;

    const postInfo = {
      totalViews,
      likes,
    };

    let mongoClient;

    try {
      mongoClient = await connectToCluster(dbConnectionUri);
      const db = mongoClient.db(dbName);
      const collection = db.collection("posts");
      const result = collection.findOne({ slug });

      res.status(200).json({ postInfo: result });
    } finally {
      await mongoClient.close();
    }
  }
}

export default handler;
