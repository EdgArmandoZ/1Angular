import { Component } from '@angular/core';
import { Formulario7Component } from './formulario7/formulario7.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Formulario7Component, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'borrar'
}
