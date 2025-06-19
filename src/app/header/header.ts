// src/app/header/header.ts (ตัวอย่าง)

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // อาจจำเป็น

@Component({
  selector: 'app-header', // Selector ของ Header Component ของคุณ
  standalone: true,
  imports: [
    CommonModule
    // ถ้า Header ใช้ RouterLink ก็ต้อง import RouterModule ด้วย
  ],
  templateUrl: './header.html', // ไฟล์ HTML ของ Header
  styleUrls: ['./header.css'] // ไฟล์ CSS ของ Header
})
export class Header { // <-- **นี่คือ Class ที่คุณต้องเพิ่มเมธอด**

  constructor() { }

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