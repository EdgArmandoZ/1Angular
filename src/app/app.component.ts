import { Component } from '@angular/core';
import { Formulario7Component } from './formulario7/formulario7.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Formulario7Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'borrar'
}
