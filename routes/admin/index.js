const express = require('express');
const bodyParser = require('body-parser')

const sqlite = require('sqlite');
const jwt = require('jsonwebtoken');

const dbConnection = sqlite.open('./banco.sqlite', { Promise });

const router = express.Router(); 

var logout =[];

module.exports = router;

router.use(bodyParser.json())

router.use('/produtos', require('./produto.js'))
router.use('/categorias', require('./categoria.js'))

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

// router.use((req, res, next) =>{     
//     var token = req.headers['access-token'];  
//      if (token) {  

//       jwt.verify(token, "<teste-123>", (err, decoded) =>{      
//         if (err) {
            
//           return res.status(203).send({ success: false, message: 'Failed to authenticate token.' });    
          
//         } else {
//             if(decoded.sub && !logout.includes(decoded.sub)){
//                 req.decoded = decoded;
//                 next();
//             }else{
//                 return res.status(203).send({ success: false, message: 'Failed to authenticate token.' }); 
//             }           
//         }
//       });
  
//     } else {
//       return res.status(403).send({  
//           message: 'No token.' 
//       });
  
//     }
//   });

router.get('/logout', (req, res) => {
    logout.push(req.decoded.sub)
    return res.status(200).send({ success: true});
})

router.get('/', (req, res) => {
    res.render('admin/home')
})