const express = require('express');
const sqlite = require('sqlite');

const dbConnection = sqlite.open('./banco.sqlite', { Promise });

const router = express.Router(); 

module.exports = router;

router.get('/', async(req, res) => {
    const db = await dbConnection
    const categorias = await db.all('select * from categorias')
    res.render('admin/categorias/home', {
        categorias
    })
})

router.get('/delete/:id', async(req, res) => {
    const db = await dbConnection
    await db.run('delete from categorias where id = ' + req.params.id)
    res.redirect('/admin/categorias')
})

router.get('/add', async(req, res) => {
    res.render('admin/categorias/add')
})

router.post('/add', async(req, res) => {
    const db = await dbConnection
    const {categoria} = req.body
    await db.run(`insert into categorias(categoria) values('${categoria}')`)
    res.redirect('/admin/categorias')
})

router.get('/editar/:id', async(req, res) => {
    const db = await dbConnection
    const categoria = await db.get('select * from categorias where id = ' + req.params.id)
    res.render('admin/categorias/editar', {
        categoria
    })
})

router.post('/editar/:id', async(req, res) => {
    const db = await dbConnection    
    const {id} = req.params
    const {categoria} = req.body
    await db.run(`update categorias set categoria=? where id=?`,[categoria,id])
    res.redirect('/admin/categorias')
})