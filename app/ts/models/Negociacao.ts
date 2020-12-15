// quando a referencia for na mesma pasta nao usar o index (barrel)
// existe um problema de referencias na mesma pasta referenciarem o index

import { Imprimivel } from './Imprimivel';

// extends -> para herdar de classes abstratas
// implements -> para herdar de interfaces 

export class Negociacao implements Imprimivel {

    // readonly so pode ser alterado no construtor
    // propriedades implicitas, a simples declaracao no construtor ja cria as propriedades dinamicamente
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }
    
    paraTexto(): void {
        console.log(`Data:${this.data} Quantidade:${this.quantidade} Valor:${this.valor}`);
    }

    get volume() {
        return this.quantidade * this.valor;
    }

}