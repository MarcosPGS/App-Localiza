import { Permissao } from './Permissao';

export class Usuario{

    idProfessor: number;
    login: string;
    senha: string;
    nome: string;
    
    permissoes: Permissao[] = [];
   
    constructor(){

    }
}