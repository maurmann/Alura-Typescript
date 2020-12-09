class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // ou Negociacao[]
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    paraArray() {
        return this.negociacoes;
    }
}
