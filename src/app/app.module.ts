import { SobrePageModule } from './../pages/sobre/sobre.module';
import { CursoPageModule } from './../pages/curso/curso.module';
import { ProfessorPageModule } from './../pages/professor/professor.module';
import { SobrePage } from './../pages/sobre/sobre';
import { CursoPage } from './../pages/curso/curso';
import { ProfessorPage } from './../pages/professor/professor';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';







import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalizaServiceProvider } from '../providers/localiza-service/localiza-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    ProfessorPageModule,
    CursoPageModule,
    SobrePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfessorPage,
    CursoPage,
    SobrePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalizaServiceProvider
  ]
})
export class AppModule {}
