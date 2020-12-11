System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_2.Negociacoes();
                    this.negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this.mensagemView = new index_1.MensagemView("#mensagemView");
                    this.inputData = document.querySelector('#data');
                    this.inputQuantidade = document.querySelector('#quantidade');
                    this.inputValor = document.querySelector('#valor');
                    this.negociacoesView.update(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new index_2.Negociacao(new Date(this.inputData.value.replace(/-/g, ',')), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update("Negociação adicionada com sucesso!");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
