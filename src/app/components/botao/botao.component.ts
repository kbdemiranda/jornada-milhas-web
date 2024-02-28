import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";



@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})
export class BotaoComponent {
  @Input() label: string = 'Botão';
  @Input() style: string = 'botao-primary';

  doIt() {
    console.log('FUncionou')
  }
}
