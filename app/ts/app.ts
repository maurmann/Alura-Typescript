import { NegociacaoController } from './controllers/negociacaoController';

const controller = new NegociacaoController();

(document.querySelector('.form') as Element)
    .addEventListener('submit', controller.adiciona.bind(controller));


