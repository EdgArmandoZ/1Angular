import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario7',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario7.component.html',
  styleUrl: './formulario7.component.css'
})
export class Formulario7Component {
  
  resultado='';


  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators. required, Validators.minLength(10)]),
    edad: new FormControl('', [Validators. required, Validators.minLength(1)]),
    DPI: new FormControl('', [Validators. required, Validators.minLength(13)])
  });


  //local STORAGE

  listaPersonas:{nombre:string, edad:string, DPI:string}[] = []; 

  constructor(@Inject(DOCUMENT) private document:Document){
  const localStorage= document.defaultView?.localStorage;

 
  let datos = localStorage?.getItem("personas");
  if(datos != null){
    let arreglo = JSON.parse(datos);
    if(arreglo != null){
      this.listaPersonas= arreglo;
    }
  }
  
}


agregarPersona(){
    if(this.formularioContacto.value){
      const nuevaPersona ={
        nombre: this.formularioContacto.value.nombre!,
        edad: this.formularioContacto.value.edad!,
        DPI: this.formularioContacto.value.DPI!

      };
      this.listaPersonas.push(nuevaPersona);
      this.actualizarLocalStorage();
      this.formularioContacto.reset();
      this.resultado= "Todos los Datos validos";
    } else{
    this.resultado= "Hay datos invalidos"
  }
  }

borrarPersona1(index: number){
  this.listaPersonas.splice(index, 1);
this.actualizarLocalStorage();

}

actualizarLocalStorage() {
  localStorage.setItem("personas", JSON.stringify(this.listaPersonas));
}


}

