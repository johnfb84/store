import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true)
  @Input({ required: true }) cart: Product[] = []

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState)
  }
}
