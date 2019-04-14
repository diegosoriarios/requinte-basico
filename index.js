const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const path = require('path')
const sqlite = require('sqlite')
const dbConnection = sqlite.open(path.resolve(__dirname, 'banco.sqlite'), { Promise })

const port = process.env.PORT || 3000

app.use('/admin', (req, res, next) =>{
    if (req.hostname === 'localhost'){
        next()
    } else {
        res.send('Not Allowed!')
    }
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', async(req, res) => {
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

app.get('/produto/:id', async(req, res) => {
    const db = await dbConnection
    const produto = await db.get('select * from produtos where id = ' + req.params.id)
    res.render('produto', {
        produto
    })
})

app.get('/admin', (req, res) => {
    res.render('admin/home')
})

app.get('/admin/produtos', async(req, res) => {
    const db = await dbConnection
    const produtos = await db.all('select * from produtos')
    res.render('admin/produtos', {
        produtos
    })
})

app.get('/admin/produtos/delete/:id', async(req, res) => {
    const db = await dbConnection
    await db.run('delete from produtos where id = ' + req.params.id)
    res.redirect('/admin/produtos')
})

app.get('/admin/novo-produto', async(req, res) => {
    const db = await dbConnection
    const categorias = await db.all('select * from categorias')
    res.render('admin/novo-produto', {
        categorias
    })
})

app.post('/admin/novo-produto', async(req, res) => {
    const db = await dbConnection
    const {titulo, descricao, categoria, preco} = req.body
    await db.run(`insert into produtos(categoria, titulo, descricao, preco) values('${categoria}', '${titulo}', '${descricao}', '${preco}')`)
    res.redirect('/admin/produtos')
})

app.get('/admin/produtos/editar/:id', async(req, res) => {
    const db = await dbConnection
    const categorias = await db.all('select * from categorias')
    const produto = await db.get('select * from produtos where id = ' + req.params.id)
    res.render('admin/editar-produto', {
        categorias,
        produto
    })
})

app.post('/admin/produtos/editar/:id', async(req, res) => {
    const db = await dbConnection
    const {id} = req.params
    const {titulo, descricao, categoria, preco} = req.body
    await db.run(`update produtos set categoria=${categoria}, titulo='${titulo}', descricao='${descricao}', preco=${preco} where id=${id}`)
    res.redirect('/admin/produtos')
})

const init = async() => {
    const db = await dbConnection
    await db.run('create table if not exists categorias (id INTEGER PRIMARY KEY, categoria TEXT)')
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
