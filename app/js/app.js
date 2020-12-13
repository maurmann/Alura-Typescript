System.register(["./controllers/negociacaoController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var negociacaoController_1, controller;
    return {
        setters: [
            function (negociacaoController_1_1) {
                negociacaoController_1 = negociacaoController_1_1;
            }
        ],
        execute: function () {
            controller = new negociacaoController_1.NegociacaoController();
            document.querySelector('.form')
                .addEventListener('submit', controller.adiciona.bind(controller));
            document.querySelector("#botao_importa")
                .addEventListener('click', controller.importaDados.bind(controller));
        }
    };
});
