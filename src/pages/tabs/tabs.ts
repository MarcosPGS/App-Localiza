import { SobrePage } from './../sobre/sobre';
import { CursoPage } from './../curso/curso';
import { ProfessorPage } from './../professor/professor';
import { Component } from '@angular/core';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfessorPage;
  tab2Root = CursoPage;
  tab3Root = SobrePage;

  constructor() {

  }
}
