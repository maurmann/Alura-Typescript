class Negociacoes {

    private negociacoes: Array<Negociacao> = [];

    // ou Negociacao[]

    adiciona(negociacao: Negociacao):void {
        this.negociacoes.push(negociacao);
    }

    paraArray():Array<Negociacao> {
        // [].concat eh para enviar uma copia e nao a referencia do objeto
        return [].concat(this.negociacoes);
    }
}