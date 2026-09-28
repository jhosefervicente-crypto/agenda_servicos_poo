import { Servico } from "./Servico.js";

export class Instalacao extends Servico {
    constructor(codigo, cliente, descricao, n_equipamento) {
        super(codigo, cliente, descricao);

        this.n_equipamento = n_equipamento;
    };

    executar() {
        console.log(`Processar:                                 será instalado o equipamento ${this.n_equipamento}`);
    };
};
