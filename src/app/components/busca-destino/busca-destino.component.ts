import { Component } from '@angular/core';
import {BotaoComponent} from "../botao/botao.component";

@Component({
  selector: 'app-busca-destino',
  standalone: true,
  imports: [
    BotaoComponent
  ],
  templateUrl: './busca-destino.component.html',
  styleUrl: './busca-destino.component.scss'
})
export class BuscaDestinoComponent {

}
