import { NegociacaoController } from './controllers/negociacaoController';

const controller = new NegociacaoController();

(document.querySelector('.form') as Element)
    .addEventListener('submit', controller.adiciona.bind(controller));


(document.querySelector("#botao_importa") as Element)
    .addEventListener('click',controller.importaDados.bind(controller));