import { Sala } from './Sala';
import { Bloco } from './Bloco';
import { DiaSemana } from './DiaSemana';
import { Curso } from './Curso';


export class Disciplina{

    idDisciplina: number;
    nome: string;

    diaSemanas: DiaSemana[]  = [];
    cursos: Curso[]  = [];
    blocos: Bloco[] =[];
    salas: Sala[]=[];

    

    constructor(){
        
    }

}