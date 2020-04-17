const perfis = [
    { id: 1, tipo: "comum" },
    { id: 2, tipo: "admin" }
];
const usuarios = [
    { id: 1, nome: "Roberto Lima", email: "teste1@teste.com.br", perfil_id: 1, status: 'BLOQUEADO' },
    { id: 2, nome: "Renata Pultrini", email: "teste2@teste.com.br", perfil_id: 2, status: 'INATIVO' },
    { id: 3, nome: "Catarina", email: "teste3@teste.com.br", perfil_id: 2, status: 'ATIVO' },
    { id: 4, nome: "Heloisa", email: "teste4@teste.com.br", perfil_id: 2, status: 'ATIVO' }
];

module.exports = {
    perfis,
    usuarios
}