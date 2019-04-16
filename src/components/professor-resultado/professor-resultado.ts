import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Professor } from '../../app/dominio/Professor';
import { LocalizaServiceProvider } from '../../providers/localiza-service/localiza-service';

/**
 * Generated class for the ProfessorResultadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'professor-resultado',
  templateUrl: 'professor-resultado.html'
})
export class ProfessorResultadoComponent {

  listaProfessores: Professor[] = [];
  professor: Professor = new Professor();

  constructor( public navCtrl: NavController,private ps: LocalizaServiceProvider) {
    
  }

  ionViewDidLoad() {
    // this.navCtrl.subscribe(dadosDaPesquisa=>{
    //   console.log(JSON.parse(dadosDaPesquisa.prof));

    //   this.professor = JSON.parse(dadosDaPesquisa.prof);  
    // });

    //lista permissao
    this.ps.listar().subscribe(dadosDoServidor=>{
      this.listaProfessores =dadosDoServidor;
    },error=>{

    });
  }


  
}
