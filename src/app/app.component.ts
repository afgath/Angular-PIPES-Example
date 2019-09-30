import { Component } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Andres';
  nombre2 = 'AnDrEs felIpe GIROn';
  arreglo = [0,1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.214;
  salario = 1234.5;
  persona = {
    nombre: 'Andres',
    apellido: 'Giron',
    vive : {
      calle: '12',
      direccion : {
        numero1: 12,
        numero2: 21
      },
      conjunto: 'P de Este.'
    }
  };

  valorDePromesa = new Promise ( ( resolve, reject )=>{
    setTimeout(()=>resolve('Llegó la data'), 3500);
  } );

  fecha = new Date(); //'2017-01-01'
  video = 'RAlHg2adggQ';
  activar = true;
}
