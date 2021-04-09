import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoBreadcrumbModule, PoModule, PoNavbarModule, PoPageModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdensCriticasComponent } from './pre-fechamento/ordens-criticas/ordens-criticas.component';
import { ListagemSaldoOrdensComponent } from './pre-fechamento/listagem-saldo-ordens/listagem-saldo-ordens.component';
import { HorasApropriadasComponent } from './pre-fechamento/horas-apropriadas/horas-apropriadas.component';
import { TerminaOrdemProducaoComponent } from './pre-fechamento/termina-ordem-producao/termina-ordem-producao.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    OrdensCriticasComponent,
    ListagemSaldoOrdensComponent,
    HorasApropriadasComponent,
    TerminaOrdemProducaoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoNavbarModule,
    BrowserAnimationsModule,
    PoBreadcrumbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
