import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bottom',
  imports: [],
  templateUrl: './menu-bottom.html',
  styleUrl: './menu-bottom.scss'
})
export class MenuBottom {
  isMenuOpen = false;

  toggleMenu() {
    if (window.innerWidth < 768) {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
