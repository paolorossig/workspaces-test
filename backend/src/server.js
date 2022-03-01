import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import { connectDb } from './db.js'
import routes from './routes.js'

const port = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(json())

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
  connectDb()
  routes(app)
})
