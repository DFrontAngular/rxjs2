import { Component } from '@angular/core';
import { Observable, from, range, merge, of } from 'rxjs';
import {tap,map, scan, filter, take} from 'rxjs/operators';

@Component({
  selector: 'app-operadores',
  standalone: true,
  imports: [],
  templateUrl: './operadores.component.html',
  styleUrl: './operadores.component.css'
})
export class OperadoresComponent {

  private myArrayTap$!: Observable<any>;
  private myArrayFrom$!: Observable<any>;

  myArray = [10,20,30];

  private number$ = range(1, 10);

  private letter$ = from(["H", "O", "L", "A", " ", "M", "U", "N", "D", "O"]);

  private source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  private numberObservable = of(1, 2, 3, 4, 5);

  private nombres = from([
    { name: 'Alex', age: 31 },
    { name: 'Adam', age: 28 },
    { name: 'Alia', age: 21 },
    { name: 'David', age: 35 },
    { name: 'Rhea', age: 28 },
    { name: 'Samson', age: 31 },
    { name: 'Dhoni', age: 35 }
  ]);

  mostrarDatosMap(){
    console.log("");
    console.log("EJEMPLO MAP");
    console.log("");
    console.log("Ejercicio 1: recoger cada número del observable y sumarle 20");
    console.log("Valores iniciales:")
    console.log(this.agruparValores(this.source));



    let example = this.source.pipe(map(val => val + 20));



    console.log("Valores finales: ");
    console.log(this.agruparValores(example));



    console.log("");
    console.log("Ejercicio 2: recoger la edad de un observable que contiene objetos con los valores 'name' y 'age'");
    console.log("Valores inciales: ");
    console.log(this.agruparValores(this.nombres));



    let example2 = this.nombres.pipe(map(({ age }) => age));



    console.log("Valores finales: ");
    console.log(this.agruparValores(example2));

  }

  mostrarDatosScan(){
    console.log("");
    console.log("EJEMPLO SCAN");
    console.log("");
    console.log("Ejercicio: obtener las letras individuales de cada valor del array y agruparlas");
    console.log("Valores iniciales:")
    console.log(this.agruparValores(this.letter$));



    this.letter$.pipe(scan((acc, val) => acc + val)).subscribe(console.log);
  }

  mostrarDatosFilter(){
    let source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    console.log("");
    console.log("EJEMPLO FILTER");
    console.log("");
    console.log("Ejercicio: obtener solo los números pares");
    console.log("Valores iniciales:");
    console.log(this.agruparValores(source));



    //filter out non-even numbers
    let example = source.pipe(filter(num => num % 2 === 0));



    console.log("Valores finales:");
    console.log(this.agruparValores(example));

  }

  mostrarDatosTap(){
    console.log("");
    console.log("EJEMPLO TAP");
    console.log("");
    console.log("Ejercicio: recoger los datos, imprimirlos e imprimirlos de nuevo en un array");
    console.log("Valor inicial:");
    console.log(this.myArray);


    this.myArrayFrom$ = from(this.myArray);
    this.myArrayFrom$.pipe(
    tap(data => console.log('DataTap',data))
    ).subscribe(data => console.log('DataSubscribe' , data))
  }

  mostrarDatosReduce() {
    const numbers = [1, 2, 3, 4, 5];
    console.log("");
    console.log("EJEMPLO REDUCE");
    console.log("");
    console.log("Valor inicial: ");
    console.log(numbers);



    const sum = numbers.reduce((accumulated, value) => {
      return accumulated + value;
    }, 0);



    console.log("Valor final:");
    console.log(sum);
  }

  mostrarDatosTake() {
    console.log("");
    console.log("EJEMPLO TAKE");
    console.log("");
    console.log("Ejercicio: recoger el observable con varios números y quedarte con los tres primeros");
    console.log("Valor inicial:");
    console.log(this.agruparValores(this.numberObservable));



    const firstThree = this.numberObservable.pipe(
      take(3)
    );



    console.log("Valor final:");
    console.log(this.agruparValores(firstThree));
  }

  agruparValores = (source: any) => {
    const result: number[] = [];
    source.subscribe({
      next(value: any) {
        result.push(value);
      }
    });
    return result;
  }
}
