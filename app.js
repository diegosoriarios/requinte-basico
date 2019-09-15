const express = require("express")
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// MONGO
// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://admin:requinte1@cluster0-rkifc.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true })

// MODEL
// const Produto = mongoose.model('Produto', { nome: String, categoria: String })
// const Categoria = mongoose.model('Categoria', { nome: String, Produtos: Array})

app.use(bodyParser.json())

app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
    console.log("Redirecionado para Home")
});

app.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/produtos.html'))
    console.log("Redirecionado para Produtos")
})

app.get('/acessorios', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/acessorios.html'))
    console.log("Redirecionado para Produtos")
})

app.get('/empresa', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/empresa.html'))
    console.log("Redirecionado para Empresa")
})

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/contato.html'))
    console.log("Redirecionado para Contato")
})

app.listen(3000, () => {
	console.log("Servidor rodando na porta ", 3000)
})
