import { Component, OnInit } from '@angular/core';
import { Observable, of,from, range, merge } from 'rxjs';
import {tap,map, concat, scan, filter} from 'rxjs/operators';


@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit {
  myArray = [10,20,30];

  private myArrayTap$!: Observable<any>;

  private source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  //add 20 to each value
  private nombres = from([
    { name: 'Alex', age: 31 },
    { name: 'Adam', age: 28 },
    { name: 'Alia', age: 21 },
    { name: 'David', age: 35 },
    { name: 'Rhea', age: 28 },
    { name: 'Samson', age: 31 },
    { name: 'Dhoni', age: 35 }
  ]);

  private number$ = range(1, 10);

  private letter$ = from(["H", "O", "L", "A", " ", "M", "E", " ", "L", "L", "A", "M"]);

  ngOnInit(): void {


  }

  mostrarDatosConcat(){
    let sourceOne = of(1, 2, 3);
    //emits 4,5,6
    let sourceTwo = of(4, 5, 6);
    //emit values from sourceOne, when complete, subscribe to sourceTwo
    const example = sourceOne.pipe(
      concat(sourceTwo))
      .subscribe(x => console.log('concatenado',x));
  }

  mostrarDatosMerge(){
    let list1 = of(1, 2, 3, 4, 5);
    let list2 = of(4, 5, 6, 7, 8, 9, 10);

    console.log("");
    console.log("EJEMPLO MAP");
    console.log("");
    console.log("Ejercicio 1: recoger cada número del observable y sumarle 20");
    console.log("Valores iniciales:")
    console.log(this.agruparValores(list1));
    console.log(this.agruparValores(list2));



    let final_val = merge(list1, list2);



    console.log("Valores iniciales:")
    console.log(this.agruparValores(final_val));
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
