class MensagemView {
    private elemento: Element;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: string): void {
        this.elemento.innerHTML = this.template(model);

    }

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }

}