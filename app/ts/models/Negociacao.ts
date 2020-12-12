export class Negociacao {

    // readonly so pode ser alterado no construtor
    // propriedades implicitas, a simples declaracao no construtor ja cria as propriedades dinamicamente
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }
   
    get volume(){
        return this.quantidade * this.valor;
    }

}