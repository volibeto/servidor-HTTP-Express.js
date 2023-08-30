const express = require(`express`);

const servidor = express();

const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 }
];

servidor.get(`/usuarios`, (requisicao, resposta) => {
    resposta.send(usuarios);
});

servidor.listen(3000, () => {
    console.log(`Servidor inicializado na porta 3000`)
});