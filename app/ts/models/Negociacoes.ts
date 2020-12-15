import { Imprimivel } from './Imprimivel';
import { Negociacao } from './Negociacao';

export class Negociacoes implements Imprimivel {

    paraTexto(): void {
        console.log(`Negociacao: ${JSON.stringify(this.negociacoes)}`);
    }
    private negociacoes: Array<Negociacao> = [];

    // ou Negociacao[]
    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    paraArray(): Array<Negociacao> {
        // [].concat eh para enviar uma copia e nao a referencia do objeto

        return ([] as Negociacao[]).concat(this.negociacoes);
    }
}