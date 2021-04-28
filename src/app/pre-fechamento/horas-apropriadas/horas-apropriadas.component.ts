import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-horas-apropriadas',
  templateUrl: './horas-apropriadas.component.html',
  styleUrls: ['./horas-apropriadas.component.css']
})
export class HorasApropriadasComponent implements OnInit {
  breadcrumb:PoBreadcrumb={
    items:[
    {label: 'Início', link:'../cockpit-de-custos'},
    {label: 'Horas Apropriadas'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
