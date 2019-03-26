import { Usuario } from './Usuario';
import { Disciplina } from './Disciplina';

export class Professor{

    idProfessor: number;
    nome: string;
    matricula: string;

    disciplinas: Disciplina[]  = [];
    usuario: Usuario = new Usuario();

    constructor(){
        
    }
}