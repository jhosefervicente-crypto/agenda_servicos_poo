export class Servico {
    #status;

    constructor(codigo, cliente, descricao) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.descricao = descricao;
        this.#status = 'agendado';
        this.tecnico_responsavel = null;

    };

    get status() {
        return this.#status;

    };

    iniciar() {
        this.#status = 'em andamento';

    };

    concluir() {
        this.#status = 'concluido';

    };

    definirTecnico(tecnico) {
        this.tecnico_responsavel = tecnico;

    };

    executar() {
        throw new Error (`Nem uma ação adicionada para esse metodo!`);

    };
}
