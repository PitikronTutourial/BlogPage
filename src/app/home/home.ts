// src/app/home/home.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // มักจะจำเป็นสำหรับ standalone components
import { Welcome } from '../welcome/welcome'; // <--- เพิ่ม import นี้
import { Outtro } from '../outtro/outtro';   // <--- เพิ่ม import นี้
import { Member } from '../member/member';   // <--- เพิ่ม import นี้
import { InfoSection } from '../info-section/info-section'; // <--- เพิ่ม import นี้

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    Welcome,     
    Outtro,       
    Member,       
    InfoSection   
  ],
  templateUrl: './home.html',
  styleUrl: './home.css' 
})
export class Home {

}