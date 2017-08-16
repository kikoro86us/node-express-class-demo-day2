const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express(),
      port = 3000,
      data = require('./data.js');
    
app.use(bodyParser.json());
app.use(cors());

app.get('/api/student', (req, res) => {
  let finalData = data;
  if(req.query.grade) {
    finalData = finalData.filter(e => {
      if(e.grade === +req.query.grade[0] || e.grade === +req.query.grade[1]) {
        return e
      }
    })
  }
  if(req.query.name) {
    finalData = finalData.filter(e => {
    if(e.name.toLowerCase() === req.query.name.toLowerCase()) {
      return e
    }
  })
  }
  res.status(200).send(finalData)
})

app.post('/api/newStudent', (req, res) => {
  // res.end() >>> Not sending back data but ending request
  // res.send() >>> Is sending back data and also ending request
  data.push(req.body)
  console.log(data)
  res.status(200).end()
})

app.get('/api/admin/:username/:password', (req, res) => {
  // using params so you test it out easier in the browser, it would be better to use req.body with a post or something
  let admin = {
    username: 'Ironman',
    password: 'Av3ngers!'
  } 
  let { username, password } = req.params
  if(username === admin.username && password === admin.password) {
    res.status(200).redirect('http://google.com')
  } else {
    res.status(403).redirect('http://yahoo.com')
  }
})

// return every student over a certain age
// return every student UNDER a certain age

app.get('/api/age', (req, res) => {
  // req.query.over
  let finalData = data;
  if(req.query.over) {
    finalData = finalData.filter(e => {
      if(e.age > +req.query.over) {
        return e
      }
    })
  }
  if(req.query.under) {
    finalData = finalData.filter(e => {
      if(e.age < +req.query.under) {
        return e
      }
    })
  }
  res.status(200).send(finalData)
})

// use params to return all students in a certain grade
// use queries to return all students in that grade that are a certain age

app.get('/api/grade/:grade', (req, res) => {
  let finalData = data.filter(e => {
    return e.grade === +req.params.grade
  })
  if(req.query.age) {
    finalData = finalData.filter(e => {
      return e.age === +req.query.age
    })
  }
  res.status(200).send(finalData)
})


app.listen(port, () => console.log(`listening on port ${port}`));