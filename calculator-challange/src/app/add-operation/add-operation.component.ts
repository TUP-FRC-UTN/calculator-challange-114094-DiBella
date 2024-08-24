import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-operation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-operation.component.html',
  styleUrl: './add-operation.component.css'
})
export class AddOperationComponent {

  @Output() result =  new EventEmitter<number>();

  valor1 : number = 0;
  valor2 : number = 0;

  operar(operation: string){

   let rest : number = 0;

   switch(operation) {
      case 'suma':
        rest = this.valor1 + this.valor2;
        break;
      case 'resta' :
        rest = this.valor1 - this.valor2;
        break;
      case 'multiplicacion' : 
        rest = this.valor1 + this.valor2;
        break;
      case 'division' : 
        rest = this.valor1 / this.valor2;
        break;
      case 'potencia':
        rest = Math.pow(this.valor1, this.valor2);
        break;         
   }
    this.result.emit(rest);
  }

}
