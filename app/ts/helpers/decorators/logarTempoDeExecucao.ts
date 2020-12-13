export function logarTempoDeExecucao(emSegundos: boolean = false) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {

            let divisor = 1;
            let unidade = 'milisegundos'
            if(emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }

            // Antes da execução do metodo original
            console.log('-----------------------')
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();

            // Executa o metodo original 
            const resultado = metodoOriginal.apply(this, args);

            // Após execucao do metodo original 
            console.log(`Resultado do método: ${JSON.stringify(resultado)}` )
            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`);
            console.log('-----------------------')

            return resultado;
        }

        return descriptor;
    }
}