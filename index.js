const express = require('express');
const connection = require('./src/database');


const app = express();
app.listen(3333, () => console.log("Aplicação Online Lindamente ^^ S2"));


app.get('/', (req, res) => {
    console.log("Cheguei aqui!")
    res.json({mensagem: "Vem chegando!"})
});

app.use(express.json());

const tarefas = [];

connection.authenticate()
console.log('Okkkkkkkkkkkkkkk')



app.post('/tarefas', (req, res) => {
    
    const tarefa = {
        nome: req.body.nome,
        descricao: req.body.descricao
    }

    tarefas.push(tarefa);

    res.status(201).json(tarefa);
   
});


app.get('/tarefas', (req, res) => {
    res.json(tarefas);
    console.log(tarefas)
});





