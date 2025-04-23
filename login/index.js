const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const{error} = require("console")

const app = express();
const porta = 3001;

const banco = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2277",
  database: "sistema_login",
});

banco.connect((erro) => {
  if (erro) {
    console.error("Erro ao conectar no mysql", erro);
    return;
 }
    console.log("Conectado ao mysql");
});

app.get("/", (requisicao, resposta) =>
  resposta.sendFile(path.join(_dirname, "public", "index.html"))
);
app.get("/login", (requisicao, resposta) => {
  resposta.sendFile(path.join(_dirname, "public", "login.html"));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "segredo",
    resave: true,
    saveUninitialized: true,
  })
);

app.post("/cadastro", async (requisicao, resposta) => {
  const { nome, senha } = requisicao.body;
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  banco.query(
    "INSERT INTO usuario(nome, senha) VALUES (?, ?)"[
      (nome, senhaCriptografada)
    ],
    (erro, resultado) => {
      if (erro) {
        console.error("Erro ao registrar usuario", erro);
        resposta.status(500).send("Erro ao cadastrar usuario");
        return;
        resposta.redirect("/login");
      }
    }
  );
});

app.post("/login", async (requisicao, resposta) => {
  const { nome, senha } = requisicao.body;
  banco.query(
    "SELECT * FROM usuario WHERE nome = ?",
    [nome],
    async (erro, resultado) => {
      if (erro) {
        console.error("Erro ao fazer login", erro);
        resposta.status(500).send("Erro ao fazer login"); 
        return;
      }
     
      if (resultado.length == 0) {
        resposta.status(401).send("Usuario nao encontrado");
        return;
      }
        const usuario = resultado[0];
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (senhaValida) {
          requisicao.session.logado = true;
          requisicao.session.nome = nome;
          requisicao.redirect("/painel");
        } else {
          resposta.status(401).send("Senha incorreta");
        }
      }
    
  );

  app.get("/painel", (requisicao, resposta) => {
    if (requisicao.session.logado) {
      resposta.sendFile(path.join(_dirname, "public", "painel.html"));
    } else {
      resposta.redirect("/login");
    }
  });
  app.get("/sair", (requisicao, resposta) => {
    requisicao.session.destroy();
    resposta.redirect("/login");
  });
  app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
  });
});
