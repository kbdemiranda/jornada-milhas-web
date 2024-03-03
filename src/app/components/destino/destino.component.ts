import { Component } from '@angular/core';
import {BotaoComponent} from "../botao/botao.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-destino',
  standalone: true,
  imports: [
    BotaoComponent,
    NgOptimizedImage
  ],
  templateUrl: './destino.component.html',
  styleUrl: './destino.component.scss'
})
export class DestinoComponent {
  fotoPrincipal: string = 'http://localhost:3000/cards/Atacama.png';
  nomeDestino: string = 'Atacama';
  valor: number = 500;

}
