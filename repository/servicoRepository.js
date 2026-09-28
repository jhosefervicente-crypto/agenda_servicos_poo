const servicos = [];

export function cadastrarServico(servico) {
 servicos.push(servico);
};

export function retornarServicos() {
    return servicos;
}

export function buscarServicoIndice(indice) {
    return servicos[indice];
};

export function atualizarServicoIndice(indice, servico) {
    servicos[indice] = servico;
};

export function excluirServicoIndice(indice) {
    servicos.splice(indice, 1);
};
