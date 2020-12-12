import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';

export class NegociacaoController {

    // Element é um campo html no js
    // HtmlInputElement sao input do html
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView: MensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    // Tipo Event sao eventos do js
    adiciona(event: Event) {
        
        // para que o formulario nao recarregue a pagina
        event.preventDefault();

        var data: Date = new Date(this.inputData.value.replace(/-/g, ','));

        if (!this.EhDiaUtil(data)) {
            this.mensagemView.update("Negociações somente podem ser cadastradas em dias úteis");
            return
        }

        // indica para substituir todos '-' por ','. a data é recebida no formato yyyy-mm-dd mas o construtor do date espera 'yyyy,mm,dd'
        const negociacao = new Negociacao(
            data,
            parseInt(this.inputQuantidade.value),
            parseFloat(this.inputValor.value)
        );

        this.negociacoes.adiciona(negociacao);

        this.negociacoesView.update(this.negociacoes);

        this.mensagemView.update("Negociação adicionada com sucesso!");
    }

    private EhDiaUtil(data: Date) {
        return (data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo);
    }

}

// no typescript por padrao o enum inicia em 0
// coindice com os valores de dias da semana do js
// informei apenas para ficar explicito

enum DiaDaSemana {
    Domingo = 0,
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6
}