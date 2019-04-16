import { LocalizaServiceProvider } from './../../providers/localiza-service/localiza-service';
import { Professor } from './../../app/dominio/Professor';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FiltroProfessor } from '../../app/dominio/FiltroProfessor';
import { Disciplina } from '../../app/dominio/Disciplina';
import { ProfessorResultadoComponent } from '../../components/professor-resultado/professor-resultado';

/**
 * Generated class for the ProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professor',
  templateUrl: 'professor.html',
})
export class ProfessorPage {
  listaProfessores: Professor[] = [];
  filtro: FiltroProfessor = new FiltroProfessor();
  nome: string ='';
  @Input() disciplinas: Disciplina[] =[]


  constructor(public navCtrl: NavController, public navParams: NavParams, private ps: LocalizaServiceProvider) {
  }

  ionViewDidLoad() {
    this.ps.listar().subscribe(dadosDoServidor=>{
      this.listaProfessores =dadosDoServidor;
      console.log(this.listaProfessores);
      
      
      
      
    },error => {

    })
  }
  pesquisar(){
    this.ps.pesquisar(this.filtro).subscribe(dadosDoServidor=>{
      this.listaProfessores =dadosDoServidor;
      
    }, error=>{
      
        
      
  
    });
  
    }

    searchByName(){
      this.ps.searchByName(this.nome).subscribe(dadosDoServidor=>{
      this.listaProfessores =dadosDoServidor;
      
      }, error=>{
       
         
        });
    
    }

    visualizar(professor: Professor){
      this.navCtrl.push(ProfessorResultadoComponent, {
        queryParams:
        {
          prof: JSON.stringify(professor)
        },
        
      }, {animate: true} ); 
    }
  
}
