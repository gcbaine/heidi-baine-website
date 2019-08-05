const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
  res.render('index')
})

app.get('/interests', (req, res) => {
  res.render('interests')
})

app.get('/skills', (req, res) => {
  res.render('skills')
})

app.get('/experience', (req, res) => {
  res.render('experience')
})

app.get('/philosophy', (req, res) => {
  res.render('philosophy')
})

app.get('*', (req, res) => {
  res.render('404')
})


app.listen(port, () => {
  console.log('Server is running on port ' + port + ' ...')
})