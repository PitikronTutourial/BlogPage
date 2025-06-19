import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-member',
  imports: [CommonModule,RouterLink],
  templateUrl: './member.html',
  styleUrl: './member.css'
})
export class Member {

}
