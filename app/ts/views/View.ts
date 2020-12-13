import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T>{

    protected elemento: Element;
    private escapar: boolean;
   

    // parametro opcional termina com ?
    // outra forma é informar o valor padrao para o parametro caso nao informado

    constructor(seletor: string, escapar: boolean = false) {

        // Como queryselector pode retornar null foi feita a conversao de tipo 

        this.elemento = (document.querySelector(seletor) as Element);
        this.escapar = escapar;
    }

    @logarTempoDeExecucao()
    update(model: T): void {

        var template: string = this.template(model);

        // escapar indica que blocos <script></script> serão removidos do template
        if (this.escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this.elemento.innerHTML = template;
    }

    abstract template(model: T): string;
}
