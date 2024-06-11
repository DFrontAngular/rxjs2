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

  private myArrayOf$!: Observable<any>;
  private myArrayFrom$!: Observable<any>;

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

  mostrarDatosOf(){
    this.myArrayOf$ = of(this.myArray);
   this.myArrayOf$.subscribe(data => console.log('DataOf', data));
  }

  mostrarDatosFrom(){
    this.myArrayFrom$ = from(this.myArray);
   this.myArrayFrom$.subscribe(data => console.log('El resultado es:', data));
  }

  mostrarDatosTap(){
    this.myArrayFrom$ = from(this.myArray);
   this.myArrayFrom$.pipe(
    tap(data => console.log('DataTap',data))
   ).subscribe(data => console.log('dataTao2' , data))
  }

  mostrarDatosMap(){
    let example = this.source.pipe(map(val => val + 20));  
    let subscribe = example.subscribe(val => console.log(val)); 

    let example2 = this.nombres.pipe(map(({ age }) => age));  
    let subscribe2 = example2.subscribe(val => console.log(val));  
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
  mostrarDatosScan(){

    // this.number$.pipe(scan((acc, val) => acc + val)).subscribe(console.log);

    this.letter$.pipe(scan((acc, val) => acc + val)).subscribe(console.log);
  }

  mostrarDatosMerge(){
    let list1 = of(1, 2, 3, 4, 5);  
let list2 = of(4, 5, 6, 7, 8, 9, 10)  
let final_val = merge(list1, list2);  
final_val.subscribe(x => console.log(x));  
  }

  mostrarDatosFilter(){
    let source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
//filter out non-even numbers  
let example = source.pipe(filter(num => num % 2 === 1));  
let subscribe = example.subscribe(val => console.log(`Numero Par: ${val}`));  
  }
}
