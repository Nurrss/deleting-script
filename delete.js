const { MongoClient } = require("mongodb");

async function deleteEmails() {
  const uri =
    "mongodb+srv://nurrsserkul:nurik_2006@onlineubtcluster.okqtin6.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("results");

    const result = await collection.deleteMany({});

    console.log(`${result.deletedCount} documents were deleted.`);
  } finally {
    await client.close();
  }
}

deleteEmails().catch(console.error);
