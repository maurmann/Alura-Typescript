class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(negociacoes) {
        this.elemento.innerHTML = this.template(negociacoes);
    }
    // crase indica template string 
    template(negociacoes) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
            ${negociacoes.paraArray().map(negociacao => `
                <tr>
                    <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
                `).join('')}  
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        `;
        // join para retornar como string e nao como array! ????? 
    }
}
