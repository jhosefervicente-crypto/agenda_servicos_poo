import { Tecnico } from "./model/Tecnico.js";
import {

    cadastrarServicoManutencao,
    cadastrarServicoInstalacao,
    cadastrarServicoVistoria,
    associarTecnicoServicoID,
    iniciarServicoIndice,
    concluirServicoIndice,
    deletarServicoIndice,
    atualizarServicoIndiceI,
    atualizarServicoIndiceM,
    atualizarServicoIndiceV,
    listarServicos,

} from "./controller/servicoController.js";

console.log("=>".repeat(75));

console.log("Cadastrando Tecnicos no Sistema...");

const t2 = new Tecnico('Marcos', 'informatico');
const t3 = new Tecnico('Erik', 'Engenheiro');
const t4 = new Tecnico('Wilson', 'Fiscal');

console.log("Tecnicos cadastrados com sucesso");

console.log("-".repeat(75));

console.log("Cadastrando serviços no Sistema...");
cadastrarServicoManutencao('MAN - 0001', 'Carlos Henrique', 'Manutenção de ar-condicionado que apresenta vazamento de água e baixo desempenho na refrigeração.', "Ar-condicionado");
cadastrarServicoManutencao('MAN - 0002', 'Mercadp Boa Compra', 'Manutenção de freezer que apresenta falhas no sistema de refrigeração e não mantém a temperatura adequada.', 'Sistema de refrigeração');
cadastrarServicoInstalacao('INS - 0001', 'Ana Beatriz Souza,', 'Instalação de uma máquina de lavar roupas na residência do cliente.', 'Maquina de lavar roupa');
cadastrarServicoVistoria('VIS - 0001' ,'Condomínio Residencial Primavera', 'Vistoria nas áreas de lazer, salão de festas e estacionamento do condomínio.', 'Condominio')

console.log(".".repeat(65));

console.log("Associando Tecnicos ao serviços no Sistema....");

associarTecnicoServicoID(2, t4);
associarTecnicoServicoID(3, t4);
associarTecnicoServicoID(0, t3);
associarTecnicoServicoID(1, t2);

console.log(".".repeat(65));

listarServicos();

console.log("-".repeat(50));

console.log("Atualizando lista de Serviços...\n");


iniciarServicoIndice(0);
iniciarServicoIndice(3);
iniciarServicoIndice(1);
concluirServicoIndice(1);

atualizarServicoIndiceM(0,'MAN - 0001', 'João Pereira', 'Manutenção de ar-condicionado que apresenta vazamento de água e ruídos duranto o funcionamento.', "Ar-condicionado");

deletarServicoIndice(2)

cadastrarServicoInstalacao('VIS-0001', 'Comdomínio Residencial Primavera', 'Vistoria nas áreas de lazer, salão de festas e áreas externas do condomínio.', 'area externa do condomínio');

console.log('-'.repeat(50));

console.log("Lista de serviços atualizada...\n");


listarServicos()