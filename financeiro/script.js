const corpoTabela = document.querySelector("tbody")
const campoDescricao = document.querySelector("#descricao")
const campoValor = document.querySelector("#valor")
const campoTipo = document.querySelector("#tipo")
const botaoAdicionar = document.querySelector("#botao-adicionar")

const spanEntradas = document.querySelector(".valor-entradas")
const spanSaidas = document.querySelector(".valor-saidas")
const spanTotal = document.querySelector(".valor-total")

let listarItens = []

// Formatação de valores monetários
const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor)
}

// Validação dos campos
const validarCampos = () => {
    if (!campoDescricao.value.trim()) {
        mostrarAlerta("Por favor, preencha a descrição")
        campoDescricao.focus()
        return false
    }
    if (!campoValor.value || campoValor.value <= 0) {
        mostrarAlerta("Por favor, insira um valor válido")
        campoValor.focus()
        return false
    }
    return true
}

// Mostrar alerta personalizado
const mostrarAlerta = (mensagem) => {
    const alerta = document.createElement('div')
    alerta.className = 'alerta'
    alerta.textContent = mensagem
    document.body.appendChild(alerta)
    
    setTimeout(() => {
        alerta.remove()
    }, 3000)
}

// Adicionar novo item
botaoAdicionar.addEventListener("click", () => {
    if (!validarCampos()) return

    const novoItem = {
        descricao: campoDescricao.value.trim(),
        valor: Math.abs(Number(campoValor.value)).toFixed(2),
        tipo: campoTipo.value,
        data: new Date().toISOString()
    }

    listarItens.push(novoItem)
    salvarItensBD()
    carregarItens()
    limparCampos()
})

// Limpar campos após adicionar
const limparCampos = () => {
    campoDescricao.value = ""
    campoValor.value = ""
    campoDescricao.focus()
}

// Remover item
const removerItens = (indice) => {
    if (confirm("Tem certeza que deseja remover este item?")) {
        listarItens.splice(indice, 1)
        salvarItensBD()
        carregarItens()
    }
}

// Inserir item na tabela
const inserirItem = (item, indice) => {
    const linha = document.createElement("tr")
    const data = new Date(item.data).toLocaleDateString('pt-BR')

    linha.innerHTML = `
        <td>
            <div class="item-descricao">
                <strong>${item.descricao}</strong>
                <small>${data}</small>
            </div>
        </td>
        <td class="coluna-valor">${formatarMoeda(item.valor)}</td>
        <td class="coluna-tipo">
            <p class="${item.tipo.toLowerCase()}">${item.tipo}</p>
        </td>
        <td class="coluna-acao">
            <button onclick="removerItens(${indice})" title="Remover item">
                <i class="ri-delete-bin-line"></i>
            </button>
        </td>
    `

    corpoTabela.appendChild(linha)
}

// Carregar itens
const carregarItens = () => {
    listarItens = obterItensBD()
    corpoTabela.innerHTML = ""
    
    if (listarItens.length === 0) {
        const linha = document.createElement("tr")
        linha.innerHTML = `
            <td colspan="4" class="sem-itens">
                Nenhum item cadastrado
            </td>
        `
        corpoTabela.appendChild(linha)
    } else {
        listarItens.forEach((item, indice) => {
            inserirItem(item, indice)
        })
    }
    
    calcularTotal()
}

// Calcular totais
const calcularTotal = () => {
    const totalEntradas = listarItens
        .filter(item => item.tipo === "Entrada")
        .reduce((acc, item) => acc + Number(item.valor), 0)

    const totalSaidas = listarItens
        .filter(item => item.tipo === "Saída")
        .reduce((acc, item) => acc + Number(item.valor), 0)

    const saldoTotal = totalEntradas - totalSaidas

    spanEntradas.textContent = formatarMoeda(totalEntradas)
    spanSaidas.textContent = formatarMoeda(totalSaidas)
    spanTotal.textContent = formatarMoeda(saldoTotal)

    // Adicionar classe de cor baseada no saldo
    const cardTotal = document.querySelector(".card.total")
    if (saldoTotal < 0) {
        cardTotal.classList.add("negativo")
    } else {
        cardTotal.classList.remove("negativo")
    }
}

// Persistência de dados
const obterItensBD = () => JSON.parse(localStorage.getItem("bd_itens")) ?? []
const salvarItensBD = () => localStorage.setItem("bd_itens", JSON.stringify(listarItens))

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    carregarItens()
    
    // Adicionar item ao pressionar Enter
    campoDescricao.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            campoValor.focus()
        }
    })
    
    campoValor.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            campoTipo.focus()
        }
    })
    
    campoTipo.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            botaoAdicionar.click()
        }
    })
})