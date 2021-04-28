import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions:Array<PoPageAction>;
    itemsMenu:Array<PoMenuItem>=[
    {label: "Pré-Fechamento", subItems:[
      {label: "Ordens Críticas", link: 'ordens-criticas' },
      {label: "Listagem Saldo das Ordens", link: 'listagem-saldo-ordens' },
      {label: "Horas Apropriadas", link: 'horas-apropriadas'},
      {label: "Termina Ordem Produção", link: 'termina-ordem-producao'}
    ]},
    {label: "Fechamento", subItems:[
      {label: "Cálculo Preço Médio"},
      {label: "Desatualização Preço Médio"},
      {label: "Sumário Contábil"},
      {label: "Contabilização"},
      {label: "Fechamento do Período"},
      {label: "Reabertura do Período"}
    ]},
    {label: "Pós-Fechamento", subItems:[
      {label: "Variação Preço Médio"},
      {label: "Análise de Itens"},
      {label: "Comparativo Real x Padrão"},
      {label: "Simulação de Custos"},
      {label: "Registro Inventário - Processo"},
      {label: "Resumo Ordens - Serviço"},
      {label: "Razão Estoque"},
      {label: "Diário Auxiliar"},
    ]},
    {label: 'Personalizados'}
  ]


  constructor(
    private router:Router){  }

}
