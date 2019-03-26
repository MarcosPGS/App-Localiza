import { Turno } from './Turno';
import { Semestre } from './Semestre';

export class Curso{

    idCurso: number;
    nome:string;

    semestres: Semestre[]  = [];
    turnos: Turno[]  = [];
    constructor(){
        
    }
    
}