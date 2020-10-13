import { MongoClient } from 'mongodb'


export const connectToDatabase = async () => {
  const uri = "mongodb+srv://surrenderv2:tont4crif8ghoy_WEEK@cluster0.bgo32.mongodb.net/surrender?retryWrites=true&w=majority"
  const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  await client.connect()
  return client
}