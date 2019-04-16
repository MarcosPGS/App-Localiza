import { LocalizaServiceProvider } from './../../providers/localiza-service/localiza-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FiltroProfessor } from '../../app/dominio/FiltroProfessor';
import { Curso } from '../../app/dominio/Curso';
import { Disciplina } from '../../app/dominio/Disciplina';
import { Professor } from '../../app/dominio/Professor';

/**
 * Generated class for the CursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage {
  // listaProfessorPesquisa: ListaProfessorPesquisa[] = [];
  filtro: FiltroProfessor = new FiltroProfessor();
  listaCursos: Curso[] = [];
  listaDisciplinas: Disciplina[] = [];
  listaProfessores: Professor[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cs :LocalizaServiceProvider,
    private ds :LocalizaServiceProvider, private ps: LocalizaServiceProvider) {
  }

  ionViewDidLoad() {


    this.cs.listarCurso().subscribe(dadosDoServidor => {
      this.listaCursos = dadosDoServidor;
    }, error => {
    });

    this.ds.listarDisciplina().subscribe(dadosDoServidor => {
      this.listaDisciplinas = dadosDoServidor;
    }, error => {
    });

    this.ps.listar().subscribe(dadosDoServidor => {
      this.listaProfessores = dadosDoServidor;
    }, error => {
    });
  }

  pesquisar() {
    this.ps.pesquisar(this.filtro).subscribe(dadosDoServidor => {
      this.listaProfessores = dadosDoServidor;
     

    }, error => {
      console.log(error);
      
    });
  }

  
}
