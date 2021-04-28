import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-termina-ordem-producao',
  templateUrl: './termina-ordem-producao.component.html',
  styleUrls: ['./termina-ordem-producao.component.css']
})
export class TerminaOrdemProducaoComponent implements OnInit {
  breadcrumb:PoBreadcrumb={
    items:[
    {label: 'Início', link:'../cockpit-de-custos'},
    {label: 'Termina Ordem Produção'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
