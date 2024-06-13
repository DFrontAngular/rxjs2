import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  myArray = [10,20,30];

  private myArrayOf$!: Observable<any>;
  private myArrayFrom$!: Observable<any>;

  mostrarDatosOf(){
    this.myArrayOf$ = of(this.myArray);
    this.myArrayOf$.subscribe(data => console.log('DataOf', data));
  }

  mostrarDatosFrom(){
    this.myArrayFrom$ = from(this.myArray);
    this.myArrayFrom$.subscribe(data => console.log('El resultado es:', data));
  }

}
