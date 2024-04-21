import express from 'express'

const app = express()
app.get('/test', (req, res) => {
    let product ={
        name: 'iPhone 11',
        title:'hello world',
    }
  res.send(product)
})

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`)
})