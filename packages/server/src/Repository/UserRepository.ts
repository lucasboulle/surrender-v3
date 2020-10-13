import { MongoClient } from "mongodb"

export const findByEmailAndPassword = async (email: string, password: string) => {

  const uri = "mongodb+srv://surrenderv2:tont4crif8ghoy_WEEK@cluster0.bgo32.mongodb.net/surrender?retryWrites=true&w=majority"
  const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  let user

  try {
    await client.connect()

    const collection = client.db('surrender').collection('users')

    user = await collection.findOne({
      email,
      password
    })
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }

  return user
}