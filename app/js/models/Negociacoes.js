class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // ou Negociacao[]
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    paraArray() {
        // [].concat eh para enviar uma copia e nao a referencia do objeto
        return [].concat(this.negociacoes);
    }
}
