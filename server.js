const {applicaton} = require('express')  // this is new body parser included in express
const express = require('express')  // getting express
const app = express()
const port = 3000
const bodyParser = require('body-parser') // body-parser for database

// this is used as a bodyparser now with new update 
app.use(bodyParser.urlencoded({ extended: false }))
app.use (bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/datarep',(req, res)=>{
  res.send('Welcome to Data Representation and Querying')
})

app.get('/test', (req,res)=>{
  res.sendFile(__dirname+'/index.html');
})


app.get('/hello/:name',(req, res)=>{
  res.send('Hello' +req.params.name);
})

 // reads data to console
// api for books, get method that sends json back to the client when invoked
// get request for localhost:4000/api/books
app.get('/api/books',(req, res)=>{
  const books = [
      {
      "title": "Learn Git in a Month of Lunches",
      "isbn": "1617292419",
      "pageCount": 0,
      "thumbnailUrl":
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
      "status": "MEAP",
      "authors": ["Rick Umali"],
      "categories": []
      },
      {
      "title": "MongoDB in Action, Second Edition",
      "isbn": "1617291609",
      "pageCount": 0,
      "thumbnailUrl":
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
      "status": "MEAP",
      "authors": [
      "Kyle Banker",
      "Peter Bakkum",
      "Tim Hawkins",
      "Shaun Verch",
      "Douglas Garrett"
      ],
      "categories": []
      },
      {
      "title": "Getting MEAN with Mongo, Express, Angular, and Node",
      "isbn": "1617292036",
      "pageCount": 0,
      "thumbnailUrl":
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
      "status": "MEAP",
      "authors": ["Simon Holmes"],
      "categories": []
      }
    ]
  
  res.status(201).json({
    mybooks:books
  })
})




app.get('/name', (req,res)=>{
  console.log(req.query.fname);
  res.send('hello '+req.query.fname +''+req.query.lname);
})

app.post('/name', (req,res)=>{
  console.log(req.body);
  // send msg back so not to duplicate because it will know it had sent
  res.send('hello post '+req.body.fname +''+req.body.lname);
})

// listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
