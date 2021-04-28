import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-ordens-criticas',
  templateUrl: './ordens-criticas.component.html',
  styleUrls: ['./ordens-criticas.component.css']
})
export class OrdensCriticasComponent implements OnInit {
  breadcrumb:PoBreadcrumb={
    items:[
    {label: 'Início', link:'../cockpit-de-custos'},
    {label: 'Ordens Críticas'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
