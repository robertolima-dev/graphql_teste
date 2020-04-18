let id = 1
function proximoId() {
    return id++
}

const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'admin' }
]

const usuarios = [
    {
        id: proximoId(),
        nome: "Roberto Lima",
        email: "roberto@teste.com",
        idade: 29,
        perfil_id: 1,
        status: "BLOQUEADO",
    },
    {
        id: proximoId(),
        nome: "Renata Pultrini",
        email: "renata@teste.com",
        idade: 31,
        perfil_id: 2,
        status: "INATIVO",
    },
    {
        id: proximoId(),
        nome: "Catarina Lima",
        email: "catarina@teste.com",
        idade: 24,
        perfil_id: 1,
        status: "ATIVO",
    },
    {
        id: proximoId(),
        nome: "Heloisa Lima",
        email: "heloisa@teste.com",
        idade: 24,
        perfil_id: 1,
        status: "ATIVO",
    },
];

module.exports = {
    usuarios,
    perfis,
    proximoId
}