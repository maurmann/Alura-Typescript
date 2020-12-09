class Negociacoes {

    private negociacoes: Array<Negociacao> = [];

    // ou Negociacao[]

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    paraArray() {
        return this.negociacoes;
    }
}