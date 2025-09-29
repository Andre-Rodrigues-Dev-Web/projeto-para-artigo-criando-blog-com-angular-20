import { Component } from '@angular/core';
import { MenuTop } from "./menu-top/menu-top";
import { ContentLogo } from "./content-logo/content-logo";
import { MenuBottom } from "./menu-bottom/menu-bottom";

@Component({
  selector: 'app-header',
  imports: [MenuTop, ContentLogo, MenuBottom],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
