import express from 'express'
import router from './routes/productRoute.js'
const app = express()
const PORT = 8000

app.use('/', router)
app.listen(PORT, () => {
  console.log(`Example app listening on port  ${PORT}`)
})