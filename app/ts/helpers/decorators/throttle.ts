// app/ts/helpers/decorators/throttle.ts

// se o evento for gerado mais de uma vez antes de 500ms ou o valor solicitado irá cancelar a sua execução
// para evitar submeter várias vezes para a API caso o usuário fique pressionando o botão várias vezes

export function throttle(milissegundos = 500) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        let timer = 0;

        descriptor.value = function(...args: any[]) {
            if(window.event) window.event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        }

        return descriptor;
    }
}