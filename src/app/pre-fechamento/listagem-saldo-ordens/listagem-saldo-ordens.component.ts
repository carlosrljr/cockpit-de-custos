import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-listagem-saldo-ordens',
  templateUrl: './listagem-saldo-ordens.component.html',
  styleUrls: ['./listagem-saldo-ordens.component.css']
})
export class ListagemSaldoOrdensComponent implements OnInit {
  breadcrumb:PoBreadcrumb={
    items:[
    {label: 'Início', link:'../cockpit-de-custos'},
    {label: 'Listagem Saldo Ordens'}
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
