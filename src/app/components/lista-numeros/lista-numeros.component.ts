import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.scss'],
})
export class ListaNumerosComponent implements OnInit {

  Numero!: number;
  numeracion: number[] = [];
  multiplos3: number[] = [];
  multiplos5: number[] = [];
  multiplos7: number[] = [];
  noMultiplos: number[] = [];

/*inyección del servicio de firbase*/  
constructor(private firestore: AngularFirestore) { }

  ngOnInit() {}

/*creacion de metodo*/
  generarNumeros() {
    this.numeracion = [];
    this.multiplos3 = [];
    this.multiplos5 = [];
    this.multiplos7 = [];
    this.noMultiplos = [];

    for (let i = 0; i <= this.Numero; i++) {
      this.numeracion.push(i);
      let esMultiplo = false;

      if (i !== 0) {
        if (i % 3 === 0) {
          this.multiplos3.push(i);
          esMultiplo = true;
        }
        if (i % 5 === 0) {
          this.multiplos5.push(i);
          esMultiplo = true;
        }
        if (i % 7 === 0) {
          this.multiplos7.push(i);
          esMultiplo = true;
        }
        if (!esMultiplo) {
          this.noMultiplos.push(i);
        }
      }
    }

    this.saveNumeracion();
  }

  /*Guardar los datos obtenidos*/
  saveNumeracion() {
    const data = {
      numero: this.Numero,
      multiplos3: this.multiplos3,
      multiplos5: this.multiplos5,
      multiplos7: this.multiplos7,
      noMultiplos: this.noMultiplos
    };
/*Envio de datos a firbase en la tabla numeraciones*/
    this.firestore.collection('numeraciones').add(data)
      .then(() => {
        /*Mensaje para verificar que se guardaron los datos cottectamente*/
        console.log('Numeración guardada en Firebase');
      })
      .catch((error) => {
        /*Mensaje para saber si no se guardaron los datos*/
        console.error('Error guardando numeración en Firebase: ', error);
      });
  }
}
