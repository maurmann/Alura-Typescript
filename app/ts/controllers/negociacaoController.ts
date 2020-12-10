class NegociacaoController {

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

        // indica para substituir todos '-' por ','. a data é recebida no formato yyyy-mm-dd mas o construtor do date espera 'yyyy,mm,dd'
        const negociacao = new Negociacao(
            new Date(this.inputData.value.replace(/-/g, ',')),
            parseInt(this.inputQuantidade.value),
            parseFloat(this.inputValor.value)
        );

        this.negociacoes.adiciona(negociacao);

        this.negociacoesView.update(this.negociacoes);

        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}