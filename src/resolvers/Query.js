const { usuarios, perfis } = require('../data/db')

module.exports = {

    ola() {
        return 'Bom dia!'
    },
    horaAtualString() {
        return `${new Date()}`
    },
    horaAtualDate() {
        return new Date()
    },
    usuarioLogado() {
        const data = {
            id: 1,
            nome: 'Roberto Lima',
            email: 'teste@teste.com.br',
            idade: 40,
            salario_real: 8550.00,
            vip: true
        }
        return data
    },
    meuProduto() {
        const data = {
            nome: 'Notebook',
            preco: 1250,
            desconto: 0.1,
        }
        return data
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
            .map(num => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const selecionados = usuarios.filter(u => u.id === id)
        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const selecionados = perfis.filter(p => p.id === id)
        return selecionados ? selecionados[0] : null
    }
}