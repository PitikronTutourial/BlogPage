import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core'; // เพิ่ม ElementRef, ViewChild, AfterViewInit (ถ้าจำเป็น)
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { 
  title = 'blogPage';


  scroll(sectionId: string): void {
    console.log(`Attempting to scroll to: ${sectionId}`); 
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log(`Scrolled to: ${sectionId}`); 
    } else {
      console.error(`Element with ID '${sectionId}' not found!`); 
    }
  }
}