class View{
    
    protected elemento: Element;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

}