import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../interface/nav-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() menuItems!: NavItem[];
  @Input() additionalItems?: NavItem[] = [];
  @Input() heading?: string;
  @Input() additionalHeading?: string;
  @ViewChild('childMenu') public childMenu: any;

  constructor(public router: Router) { }

}
