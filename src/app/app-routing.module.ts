import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HorasApropriadasComponent } from './pre-fechamento/horas-apropriadas/horas-apropriadas.component';
import { ListagemSaldoOrdensComponent } from './pre-fechamento/listagem-saldo-ordens/listagem-saldo-ordens.component';
import { OrdensCriticasComponent } from './pre-fechamento/ordens-criticas/ordens-criticas.component';
import { TerminaOrdemProducaoComponent } from './pre-fechamento/termina-ordem-producao/termina-ordem-producao.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'ordens-criticas', component: OrdensCriticasComponent },
  {path: 'listagem-saldo-ordens', component: ListagemSaldoOrdensComponent},
  {path: 'horas-apropriadas', component: HorasApropriadasComponent},
  {path: 'termina-ordem-producao', component: TerminaOrdemProducaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
