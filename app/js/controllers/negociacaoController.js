class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    // Tipo Event sao eventos do js
    adiciona(event) {
        // para que o formulario nao recarregue a pagina
        event.preventDefault();
        // indica para substituir todos '-' por ','. a data é recebida no formato yyyy-mm-dd mas o construtor do date espera 'yyyy,mm,dd'
        const negociacao = new Negociacao(new Date(this.inputData.value.replace(/-/g, ',')), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        console.log(negociacao.volume);
    }
}
