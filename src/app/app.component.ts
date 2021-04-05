import { Component } from '@angular/core';

import { PoBreadcrumb, PoMenuItem, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions:Array<PoPageAction>;
  breadcrumb:PoBreadcrumb={items:[
    {label:"Início"}
  ]}
  itemsMenu:Array<PoMenuItem>=[
    {label: "Fechamento"},
    {label: "Pós-Fechamento"}
  ]



  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
