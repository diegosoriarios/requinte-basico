const express = require('express');
const sqlite = require('sqlite');

const dbConnection = sqlite.open('./banco.sqlite', { Promise });

const router = express.Router(); 

module.exports = router;

router.get('/', async(req, res) => {
    const db = await dbConnection
    const produtos = await db.all('select * from produtos')
    res.render('admin/produtos/home', {
        produtos
    })
})

router.get('/delete/:id', async(req, res) => {
    const db = await dbConnection
    await db.run('delete from produtos where id = ' + req.params.id)
    res.redirect('/admin/produtos')
})

router.get('/add', async(req, res) => {
    const db = await dbConnection
    const categorias = await db.all('select * from categorias')
    res.render('admin/produtos/add', {
        categorias
    })
})

router.post('/add', async(req, res) => {
    const db = await dbConnection
    const {titulo, descricao, categoria, preco} = req.body
    await db.run(`insert into produtos(categoria, titulo, descricao, preco) values('${categoria}', '${titulo}', '${descricao}', '${preco}')`)
    res.redirect('/admin/produtos')
})

router.get('/editar/:id', async(req, res) => {
    const db = await dbConnection
    const categorias = await db.all('select * from categorias')
    const produto = await db.get('select * from produtos where id = ' + req.params.id)
    res.render('admin/produtos/editar', {
        categorias,
        produto
    })
})

router.post('/editar/:id', async(req, res) => {
    const db = await dbConnection    
    const {id} = req.params
    const {titulo, descricao, categoria, preco} = req.body
    await db.run(`update produtos set categoria=${categoria}, titulo='${titulo}', descricao='${descricao}', preco='${preco}' where id=${id}`)
    res.redirect('/admin/produtos')
})