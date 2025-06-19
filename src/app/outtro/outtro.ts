// src/app/outtro/outtro.ts

import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router'; // ยังคงต้องการ Router ในกรณีอื่น ๆ แต่ไม่ใช้สำหรับ navigateToPage ตรงนี้แล้ว

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { CardExpanded } from '../card-expanded/card-expanded'; // ตรวจสอบชื่อไฟล์ให้ถูกต้อง

// อัปเดต Interface เพื่อเพิ่ม path สำหรับการนำทาง
interface CardDialogData {
  title: string;
  fullDescription: string;
  imageUrl?: string;
  path: string; // <-- เพิ่ม path เข้ามา
}

@Component({
  selector: 'app-outtro',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './outtro.html',
  styleUrl: './outtro.css',
})
export class Outtro implements OnInit, OnDestroy {

  constructor(
    private router: Router, // ยังคงมี Router เพราะ Outtro Component อาจจะใช้ Router ในอนาคต
    @Inject(DOCUMENT) private document: Document,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  openCardDialog(cardType: 'trailer' | 'comingSoon' | 'storyBoard' | 'supportUs'): void {
    let dataToSend: CardDialogData;

    switch (cardType) {
      case 'trailer':
        dataToSend = {
          title: 'Official Trailer',
          fullDescription: `นี่คือรายละเอียดเต็มๆ ของ Trailer ที่น่าตื่นเต้น!
                            เตรียมพบกับฉากแอคชั่นสุดอลังการและเรื่องราวที่เข้มข้นที่จะทำให้คุณลุ้นระทึก!
                            รับชมตัวอย่างได้แล้ววันนี้!`,
          imageUrl: '/Fortree.jpg',
          path: '/trailer' // <-- เพิ่ม Path ที่นี่
        };
        break;
      case 'comingSoon':
        dataToSend = {
          title: 'Coming Soon',
          fullDescription: `ฟีเจอร์ใหม่สุดว้าว กำลังจะมาถึงเร็วๆ นี้!
                            เตรียมตัวให้พร้อมสำหรับประสบการณ์ที่ไม่เหมือนใคร และเนื้อหาพิเศษที่เราตั้งใจสร้างสรรค์มาเพื่อคุณโดยเฉพาะ.
                            อดใจรออีกไม่นาน!`,
          imageUrl: '/Fortree.jpg',
          path: '/coming-soon' // <-- เพิ่ม Path ที่นี่
        };
        break;
      case 'storyBoard':
        dataToSend = {
          title: 'Story Board Insights',
          fullDescription: `เจาะลึกเบื้องหลังการสร้างสรรค์ด้วย Story Board ฉบับสมบูรณ์!
                            คุณจะได้เห็นวิวัฒนาการของไอเดียต่างๆ ตั้งแต่สเก็ตช์แรกไปจนถึงฉากจริง.
                            ค้นพบความลับของการเล่าเรื่องด้วยภาพ!`,
          imageUrl: '/Fortree.jpg',
          path: '/story-board' // <-- เพิ่ม Path ที่นี่
        };
        break;
      case 'supportUs':
        dataToSend = {
          title: 'Support Our Project',
          fullDescription: `ถ้าคุณหลงใหลในสิ่งที่เราสร้างสรรค์ และอยากเป็นส่วนหนึ่งของการเดินทางของเรา
                            การสนับสนุนของคุณจะช่วยให้เราสามารถพัฒนาโปรเจกต์ดีๆ ต่อไปได้.
                            ทุกการช่วยเหลือมีความหมายกับเรามาก!`,
          imageUrl: '/Fortree.jpg',
          path: '/support-us' // <-- เพิ่ม Path ที่นี่
        };
        break;
      default:
        dataToSend = {
          title: 'Error: Unknown Card',
          fullDescription: 'ไม่พบข้อมูลสำหรับการ์ดนี้ กรุณาลองใหม่อีกครั้ง.',
          imageUrl: '',
          path: '/' // <-- Path default หรือหน้า error
        };
    }

    const dialogRef = this.dialog.open(CardExpanded, {
      data: dataToSend, // ส่งข้อมูลที่มี Path ไปด้วย
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The ${cardType} Dialog was closed`);
    });
  }

  // ลบเมธอด navigateToPage() ออกจาก Outtro Component เพราะจะไปทำใน CardExpanded แทน
  // goToContactPage(event: Event): void { ... } // เมธอดนี้ยังคงอยู่
  ngOnDestroy(): void { }
}