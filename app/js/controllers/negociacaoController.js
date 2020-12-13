System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, DiaDaSemana;
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
                    var data = new Date(this.inputData.value.replace(/-/g, ','));
                    if (!this.EhDiaUtil(data)) {
                        this.mensagemView.update("Negociações somente podem ser cadastradas em dias úteis");
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update("Negociação adicionada com sucesso!");
                }
                importaDados() {
                    function isOk(res) {
                    }
                    fetch('http://localhost:8080/dados')
                        .then(res => res.json())
                        .then();
                }
                EhDiaUtil(data) {
                    return (data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
