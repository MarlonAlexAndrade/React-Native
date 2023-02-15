// Importar módulos
const express = require('express');
const mysql2 = require('mysql2');

// Conexão com o banco de dados MySQL
const conexao = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'projeto'
});

// Extrair do express as funcionalidades de API
const app = express();

// Habilitar o envio e recebimento de dados
app.use(express.json());

// Rota de listagem
app.get('/', (req, res) => {

    // SQL
    let sql = `SELECT * FROM clientes`;

    // Executar comando SQL
    conexao.query(sql, (erro, retorno) => {

        // Caso haja algum problema no SQL
        if(erro) throw erro;

        // Retorna uma lista de clientes
        res.json(retorno);
        res.end();
    });

    // res.write('Hello Marilene!');
    // res.json({'nome':'Ana'});
    // res.end();
});

// Rota de cadastro
app.post('/', (req, res) =>{

    // SQL
    let sql = `INSERT INTO clientes (nome, idade) VALUES ('${req.body.nome}', ${req.body.idade})`;

    // Executar  comando SQL
    conexao.query(sql, (erro, retorno) =>{

        // Caso haja algum erro no comando SQL
        if(erro) throw erro;

        // Adicionar no req o id gerado no banco de dados
        req.body.codigo = retorno.insertId;

        // Retorno
        res.json(req.body)
        res.end();
    });

    // console.log(req.body);
    // res.end();
});

// Servidor
app.listen(3000);
