import { MongoClient, ObjectId } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI;

export async function getProductDetails(category, productId) {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const database = client.db("E-commerce");
    const collection = database.collection(category); 

    const product = await collection.findOne({ _id: new ObjectId(productId) });

    return product;
  } finally {
    client.close();
  }
}
