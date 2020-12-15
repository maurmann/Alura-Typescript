System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../services/negociacaoService", "../helpers/Imprime"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, negociacaoService_1, Imprime_1, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (negociacaoService_1_1) {
                negociacaoService_1 = negociacaoService_1_1;
            },
            function (Imprime_1_1) {
                Imprime_1 = Imprime_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_2.Negociacoes();
                    this.negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this.mensagemView = new index_1.MensagemView("#mensagemView");
                    this.service = new negociacaoService_1.NegociacaoService();
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
                    Imprime_1.imprime(negociacao, this.negociacoes);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update("Negociação adicionada com sucesso!");
                }
                importarDados() {
                    const isOk = (res) => {
                        if (res.ok)
                            return res;
                        throw new Error(res.statusText);
                    };
                    this.service
                        .obterNegociacoes(isOk)
                        .then(negociacoes => {
                        negociacoes.forEach(negociacao => this.negociacoes.adiciona(negociacao));
                        this.negociacoesView.update(this.negociacoes);
                    });
                }
                EhDiaUtil(data) {
                    return (data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo);
                }
            };
            __decorate([
                index_3.throttle(500)
            ], NegociacaoController.prototype, "importarDados", null);
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
