import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-outtro',
  imports: 
  [CommonModule, 
  RouterLink ],
  templateUrl: './outtro.html',
  styleUrl: './outtro.css'
})
export class Outtro {

}
