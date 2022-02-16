import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'

const port = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(json())

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
  app.get('/', (req, res) => {
    return res.status(200).json({ message: `Hello World from port: ${port}` })
  })
})
