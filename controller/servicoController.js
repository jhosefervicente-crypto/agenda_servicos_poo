import { Instalacao } from "../model/Instalacao.js";
import { Manutencao } from "../model/Manutencao.js";
import { Vistoria } from "../model/Vistoria.js";

import { 
    cadastrarServico,
    retornarServicos,
    buscarServicoIndice,
    atualizarServicoIndice,
    excluirServicoIndice

} from "../repository/servicoRepository.js";

export function cadastrarServicoManutencao(codigo, cliente, descricao, defeito) {
    const servico = new Manutencao(codigo, cliente, descricao, defeito);

    cadastrarServico(servico);
    console.log("Cadastro de serviço bem sucedido!!!")
};

export function cadastrarServicoInstalacao(codigo, cliente, descricao, n_equipamento) {
    const servico = new Instalacao(codigo, cliente, descricao, n_equipamento);

    cadastrarServico(servico);
    console.log("Cadastro de serviço bem sucedido!!!")
};

export function cadastrarServicoVistoria(codigo, cliente, descricao, local_vistoria) {
    const servico = new Vistoria(codigo, cliente, descricao, local_vistoria);

    cadastrarServico(servico);
    console.log("Cadastro de serviço bem sucedido!!!")
};

export function associarTecnicoServicoID(indice, tecnico) {
    const servico = buscarServicoIndice(indice);

    if (servico.tecnico_responsavel === null) {
        servico.definirTecnico(tecnico);

        atualizarServicoIndice(indice, servico);
        console.log("Associação bem sucedida!!!")
    } else {
        console.log("Não foi possivel associar o Tecnico ao servico atual.\nJá tem um tecnico responsavel pelo serviço atual !")
    };
};

export function iniciarServicoIndice(indice) {
    const servico = buscarServicoIndice(indice);

    if (servico.status === 'agendado' && servico.status !== 'em andamento' && servico.status !== 'concluido') {
        servico.iniciar();

        atualizarServicoIndice(indice, servico);

        console.log(`O status do servico foi mudado de "agendado" para "${servico.status}".`);
    } else {
        console.log("Não foi possivel mudar o status do serviço atual!");

        if(servico.status === 'em andamento') {
            console.log("O serviço já foi iniciado!");
        } else if (servico.status === 'concluido') {
            console.log("O servico já foi concluido!")
        }
    };
};

export function concluirServicoIndice(indice) {
    const servico = buscarServicoIndice(indice);

    if (servico.status !== 'agendado' && servico.status === 'em andamento' && servico.status !== 'concluido') {
        servico.concluir();

        atualizarServicoIndice(indice, servico);

        console.log(`O status do servico foi mudado de "em andamento" para "${servico.status}".`);
    } else {
        console.log("Não foi possivel mudar o status do serviço atual!");

        if (servico.status === 'agendado') {
            console.log("Para pode concluir o Serviço, antes voce tem que iniciar!");
        } else if (servico.status === 'concluido') {
            console.log("O serviço já estava concluido !");
        }
    };
};

export function atualizarServicoIndiceM(indice, codigo, cliente, descricao, defeito) {
    const servico = new Manutencao(codigo, cliente, descricao, defeito);

    atualizarServicoIndice(indice, servico);

    console.log("Serviço atualizado com sucesso!");
}

export function atualizarServicoIndiceV(indice, codigo, cliente, descricao, local_vistoria) {
    const servico = new Vistoria(codigo, cliente, descricao, local_vistoria);

    atualizarServicoIndice(indice, servico);

    console.log("Serviço atualizado com sucesso!");
}

export function atualizarServicoIndiceI(indice, codigo, cliente, descricao, n_equipamento) {
    const servico = new Instalacao(codigo, cliente, descricao, n_equipamento);

    atualizarServicoIndice(indice, servico);

    console.log("Serviço atualizado com sucesso!");
}

export function deletarServicoIndice(indice) {
    excluirServicoIndice(indice);

    console.log("Exclusão do servico bem sucedido!")
};

export function listarServicos() {
    const servicos = retornarServicos();

    console.log('='.repeat(75));
    console.log('___--- Listas de serviços ---___');
    console.log('='.repeat(75));

    for(let i = 0; i < servicos.length; i++) {
        console.log(`N° do serviço:                             ${i}`);
        console.log(`codigo do serviço:                         ${servicos[i].codigo}`);
        console.log(`cliente:                                   ${servicos[i].cliente}`);
        console.log(`descrição do serviço:                      ${servicos[i].descricao}`);
        console.log(`status do serviço:                         ${servicos[i].status}`);
        console.log(`nome do tecnico responsavel pelo serviço:  ${servicos[i].tecnico_responsavel?.nome ?? "Não atribuida"}`);
        servicos[i].executar();
        console.log(`->`.repeat(65));
    }
}