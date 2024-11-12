const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

const professorRouter = require('./routes/professor')
const usuarioRouter = require('./routes/usuario');
const lista1Router = require('./routes/lista1');
const alunoRouter = require('./routes/aluno');


const app = express();
app.use(express.json());

app.use('/professores', professorRouter);
app.use('/usuario', usuarioRouter);
app.use('/lista1', lista1Router);
app.use('/aluno', alunoRouter);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.9yn3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(3001, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3001');
        })
    })
    .catch((err) => {
        console.log(err);
    });