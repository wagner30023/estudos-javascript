const porta = 3304

const express = require('express')
const app = express()

app.get('/produtos',(req,res,next) => {
        res.send({ nome: 'Notebook',preco: 123.45}) // converter para json
})

app.listen(porta,() => {
    console.log(` Server está executando na porta ${porta}`)
})