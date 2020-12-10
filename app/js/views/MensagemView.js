class MensagemView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
