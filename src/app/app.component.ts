import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {BannerComponent} from "./components/banner/banner.component";
import {BuscaDestinoComponent} from "./components/busca-destino/busca-destino.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, BuscaDestinoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jornada-milhas';
}
