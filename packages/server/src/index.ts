
import express from 'express'
import cors from 'cors'
import routes from './routes'
import bodyParser from 'body-parser'

const app = express()
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()  
})
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

app.listen(8080, () => {
  console.log('Server running on port 8080')
})