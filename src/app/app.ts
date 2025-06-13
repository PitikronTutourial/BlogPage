// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header'; 
import { Welcome } from './welcome/welcome';
import { Outtro } from './outtro/outtro';
import { Member } from './member/member';
import { InfoSection } from './info-section/info-section';
import { Footer } from './footer/footer';
import { Home} from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Welcome,
    Outtro,
    Member,
    InfoSection,
    Footer,
    Home
  ],
  templateUrl: './app.html', 
  styleUrl: './app.css'     
})
export class AppComponent {
  title = 'blogPage';
}