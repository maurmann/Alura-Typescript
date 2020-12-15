import { Imprimivel } from '../models/Imprimivel';


// ... permite criar um parametro REST
// Isto permite criar um numero indefinido de parametro que sera tratado internamente como um array, 
// no caso especifico um array de objetos que implementam a interface Imprimivel.

export function imprime(...objetos: Imprimivel[]) {
    objetos.forEach(objeto => objeto.paraTexto());
}