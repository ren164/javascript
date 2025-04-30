document.addEventListener("DOMContentLoaded", () => {
    const campoCidade = document.getElementById("cidade");
    const botaoBuscar = document.getElementById("buscar");
    const nomeCidade = document.getElementById("nome-cidade");
    const temperatura = document.getElementById("temperatura");
    const umidade = document.getElementById("umidade");
    const vento = document.getElementById("vento");
    const descricao = document.getElementById("descricao");

    botaoBuscar.addEventListener("click", buscarClima);

    async function buscarClima() {
        const cidade = campoCidade.value.trim(); // Corrigido aqui
        if (!cidade) {
            alert("Por favor, digite uma cidade.");
            return;
        }

        try {
            const resposta = await fetch(`/api/clima?cidade=${(cidade)}`);
            if (!resposta.ok) throw new Error();

            const dados = await resposta.json();

            nomeCidade.textContent = dados.name;
            temperatura.textContent = `${Math.round(dados.main.temp)} °C`;
            umidade.textContent = `${dados.main.humidity} %`;
            vento.textContent = `${Math.round(dados.wind.speed * 3.6)} km/h`;
            descricao.textContent = dados.weather[0].description;
        } catch (erro) {
            alert("Não foi possível buscar essa cidade.");
        }
    }
});
