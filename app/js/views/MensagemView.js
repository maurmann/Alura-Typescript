class MensagemView extends View {
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
