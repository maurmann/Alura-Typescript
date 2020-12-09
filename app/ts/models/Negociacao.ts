class Negociacao {

    // underline eh uma convenção js para private
    constructor(private data: Date, private quantidade: number, private valor: number) { }

   
    get volume() {
        return this.quantidade * this.valor;
    }

}