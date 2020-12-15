// app/ts/services/NegociacaoService.ts

import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {


    // TODO: 
    //  Entender a solicitação para mudar o método para Async! 
    //  Entender como tratar o catch 


    async obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]> {
        try {
            const result = await fetch('http://localhost:8080/dados');
            const response = handler(result);
            const dados: NegociacaoParcial[] = await response.json();
            return dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante));
        }
        catch (err) {
            // tratar ou retornar 
            throw new Error('Não foi possível obter negociações');
        }
    };


    /*
    implementacao sugerida no curso, sem async

    obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
    };

    o typescript reclama do catch, acredito que pelo fato de nao retornar o tipo esperado em todos os paths
    
    //.catch(err => console.log(err));

    */
}

export interface ResponseHandler {

    (res: Response): Response
}