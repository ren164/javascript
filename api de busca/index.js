const express = require("express");
const axios = require("axios");
require("dotenv").config();

// Configurações do servidor
const porta = 3000;
const app = express();

// Servir arquivos estáticos da pasta "public"
app.use(express.static("public"));

// Rota para buscar o clima de uma cidade
app.get("/api/clima", async (req, res) => {
    const cidade = req.query.cidade;
    const chaveAPI = process.env.OPENWEATHER_API_KEY; // Corrigido: "_" no lugar de "-"

    try {
        const respostaAPI = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveAPI}58c94a624d62491fc340fcbc85b18a54`);
        res.json(respostaAPI.data);
    } catch (erro) {
        console.error("Erro ao buscar clima:", erro.message);
        res.status(500).json({ erro: "Erro ao buscar informações do clima." });
    }
});

// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);
});
