import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


/* 
Un componente es un conjunto de HTML, CSS y JS 
*/
//Decorador
@Component({
  selector: 'app-root', //Es el nombre con el que despues podremos instanciar a nuestro componente
  imports: [RouterOutlet], //... en breves vemos que es
  templateUrl: './app.html', //Direccion de donde estara el HTML de nuestro
  styleUrl: './app.css'
})
export class App {
  nombre = 'pedro' //Esto es un atributo, pero pueden entenderlo como una variable interna del componente app
  saludar () {
    alert('Hola a todos')
  }
  contador = 0
  incrementar() {
    
    this.contador = this.contador + 1
  }
  mostrarPorConsola () {
    console.log('Contador vale: ' + this.contador)
  }
  
}
