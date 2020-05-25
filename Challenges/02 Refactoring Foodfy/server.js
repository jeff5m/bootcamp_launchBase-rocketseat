const express = require('express')
const nunjuks = require('nunjucks')

const server = express()
const recipes = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjuks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function (req, res) {
  const mostAccessedRecipes = recipes.slice(0, 6)

  return res.render('index', { items: mostAccessedRecipes })
})

server.get('/about', function (req, res) {
  return res.render('about')
})

server.get('/recipes', function (req, res) {
  return res.render('recipes', { items: recipes })
})

server.get('/recipes/:index', function (req, res) {
  const recipeIndex = req.params.index
  
  if (recipeIndex < recipes.length) {
    return res.render('recipe', { item: recipes[recipeIndex] })
    
  } else {
    return res.send('receita não encontrada')
  }

})

server.listen(5000, function () {
  console.log('server is running')
})