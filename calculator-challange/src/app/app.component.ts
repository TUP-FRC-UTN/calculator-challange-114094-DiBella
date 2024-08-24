import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AddOperationComponent } from "./add-operation/add-operation.component";
import { AddResultadoComponent } from './add-resultado/add-resultado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, AddOperationComponent, AddResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  result : number = 0;


  actualizarResultado(nuevoResult :number){
    this.result = nuevoResult;
  }
}
