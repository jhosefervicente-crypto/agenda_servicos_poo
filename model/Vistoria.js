import { Servico } from "./Servico.js";

export class Vistoria extends Servico {
    constructor(codigo, cliente, descricao, local_vistoria) {
        super(codigo, cliente, descricao);

        this.local_vistoria = local_vistoria;
    };

    executar() {
        console.log(`Processar:                                 No local de ${this.local_vistoria} sera realizado uma inspeção.`)
    };
};
