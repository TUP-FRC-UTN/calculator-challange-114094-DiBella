import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-resultado',
  standalone: true,
  imports: [],
  templateUrl: './add-resultado.component.html',
  styleUrl: './add-resultado.component.css'
})
export class AddResultadoComponent {
  
  @Input() resultado : number |undefined;
  


}
