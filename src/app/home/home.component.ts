import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoBreadcrumbItem } from '@po-ui/ng-components';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breadcrumb:PoBreadcrumb={
    items:[
    {label: 'Início'},
    ]
  }
  options=[
    {label: 'Preço Médio Calculado', value: 'preço-calculado'},
    {label: 'Sumário Calculado', value: 'sumario-calculado'},
    {label: 'Contabilizado', value: 'contabilizado'}
  ]
  estabelecimentoJson = '../../assets/json/estabelecimentos.json'

  constructor() { }

  ngOnInit(): void {

  }

}
