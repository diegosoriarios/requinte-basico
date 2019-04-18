const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');

const path = require('path')
const sqlite = require('sqlite')
const dbConnection = sqlite.open('./banco.sqlite', { Promise })

const app = express()

const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/admin', require('./routes/admin/index.js'))

app.get('/', async (req, res) => {
    const db = await dbConnection
    const categoriasDb = await db.all('select * from categorias')
    const produtos = await db.all('select * from produtos')
    const categorias = categoriasDb.map(cat => {
        return {
            ...cat,
            produtos: produtos.filter(produto => produto.categoria === cat.id)
        }
    })
    res.render('home', {
        categorias
    })
})

app.get('/produto/:id', async (req, res) => {
    const db = await dbConnection
    const produto = await db.get('select * from produtos where id = ' + req.params.id)
    res.render('produto', {
        produto
    })
})

const init = async () => {
    const db = await dbConnection
    await db.run('create table if not exists categorias (id INTEGER PRIMARY KEY, categoria TEXT)')
    await db.run('create table if not exists usuarios (id INTEGER PRIMARY KEY, usuario TEXT,senha TEXT)')
    await db.run('create table if not exists produtos (id INTEGER PRIMARY KEY, categoria INTEGER, titulo TEXT, descricao TEXT, preco REAL)')
}

init()

app.listen(port, (err) => {
    if (err) {
        console.log('Error on starting server')
    } else {
        console.log('Server started on http://localhost:3000/')
    }
})
