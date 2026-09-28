import { Servico } from "./Servico.js";

export class Manutencao extends Servico {
    constructor(codigo, cliente, descricao, defeito) {
        super(codigo, cliente, descricao);

        this.defeito = defeito;
    };

    executar() {
        console.log(`Processar:                                 será analizado o defeito de ${this.defeito} para raparo.`)
    };
};
