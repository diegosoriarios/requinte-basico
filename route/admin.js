const express = require('express');
const bodyParser = require('body-parser')

const sqlite = require('sqlite');
const jwt = require('jsonwebtoken');

const dbConnection = sqlite.open('./banco.sqlite', { Promise });

const router = express.Router(); 

var logout =[];

module.exports = router;

router.use(bodyParser.json())

router.post('/login', async (req, res) => {
        const db = await dbConnection;
    
        let row = await db.get('select * from usuarios where usuario = ? AND senha = ? ', [req.body.username, req.body.password]);
        
        if (row && row.length != 0) {
            const payload = {           
                sub:Math.floor(Math.random() * 10000000000)
            };
    
            var token = jwt.sign(payload,  "<teste-123>", {
                expiresIn: 60*5
            });
    
            return res.json({
                token: token
            });
        }
        else {
            return res.status(205).send({
                message: 'usuario ou senha incorreta'
            });
        }
    });

router.use((req, res, next) =>{     
    var token = req.headers['access-token'];  
     if (token) {  

      jwt.verify(token, "<teste-123>", (err, decoded) =>{      
        if (err) {
            
          return res.status(203).send({ success: false, message: 'Failed to authenticate token.' });    
          
        } else {
            if(decoded.sub && !logout.includes(decoded.sub)){
                req.decoded = decoded;
                next();
            }else{
                return res.status(203).send({ success: false, message: 'Failed to authenticate token.' }); 
            }
           
        }
      });
  
    } else {
      return res.status(403).send({  
          message: 'No token.' 
      });
  
    }
  });

router.get('/logout', (req, res) => {
    logout.push(req.decoded.sub)
    return res.status(200).send({ success: true});
})

router.get('/', (req, res) => {
    res.render('admin/home')
})

router.get('/produtos', async(req, res) => {
    const db = await dbConnection
    const produtos = await db.all('select * from produtos')
    res.render('admin/produtos', {
        produtos
    })
})

router.get('/produtos/delete/:id', async(req, res) => {
    const db = await dbConnection
    await db.run('delete from produtos where id = ' + req.params.id)
    res.redirect('/admin/produtos')
})

router.get('/novo-produto', async(req, res) => {
    const db = await dbConnection
    const categorias = await db.all('select * from categorias')
    res.render('admin/novo-produto', {
        categorias
    })
})

router.post('/novo-produto', async(req, res) => {
    const db = await dbConnection
    const {titulo, descricao, categoria, preco} = req.body
    await db.run(`insert into produtos(categoria, titulo, descricao, preco) values('${categoria}', '${titulo}', '${descricao}', '${preco}')`)
    res.redirect('/admin/produtos')
})

router.get('/produtos/editar/:id', async(req, res) => {
    const db = await dbConnection
    const categorias = await db.all('select * from categorias')
    const produto = await db.get('select * from produtos where id = ' + req.params.id)
    res.render('admin/editar-produto', {
        categorias,
        produto
    })
})

router.post('/produtos/editar/:id', async(req, res) => {
    const db = await dbConnection
    const {id} = req.params
    const {titulo, descricao, categoria, preco} = req.body
    await db.run(`update produtos set categoria=${categoria}, titulo='${titulo}', descricao='${descricao}', preco=${preco} where id=${id}`)
    res.redirect('/admin/produtos')
})
