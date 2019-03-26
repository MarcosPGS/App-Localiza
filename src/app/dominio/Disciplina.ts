import { DiaSemana } from './DiaSemana';
import { Curso } from './Curso';
import { Local } from './Local';

export class Disciplina{

    idDisciplina: number;
    nome: string;

    diaSemanas: DiaSemana[]  = [];
    cursos: Curso[]  = [];
    locals: Local[]  = [];

    constructor(){
        
    }

}