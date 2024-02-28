import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BotaoComponent} from "../botao/botao.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BotaoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
