// src/app/story-board/story-board.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageV } from '../image-v/image-v';

// ควรสร้าง Interface นี้เพื่อให้ Type ปลอดภัยและชัดเจน
export interface StoryboardFrame {
  id: number;
  imageUrl: string;
  altText: string;
  isLocked: boolean;
  title?: string;
}

@Component({
  selector: 'app-story-board',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './story-board.html',
  styleUrl: './story-board.css'
})
export class StoryBoard implements OnInit {

  // ตรวจสอบว่าทุก Object มี imageUrl, altText, และ title ที่ถูกต้อง
  storyboardFrames: StoryboardFrame[] = [ // เพิ่ม Type StoryboardFrame[]
    { id: 1, imageUrl: '/Fortree.jpg', altText: 'Scene 1', isLocked: false, title: 'ฉากที่ 1: ป่าลึกลับ' },
    { id: 2, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 2 Locked', isLocked: true, title: 'ฉากที่ 2: ดงไม้ต้องห้าม' },
    { id: 3, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 3', isLocked: true, title: 'ฉากที่ 3: ทางแยกในป่า' },
    { id: 4, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 4', isLocked: true, title: 'ฉากที่ 4: ลำธารยามเช้า' },
    { id: 5, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 5', isLocked: true, title: 'ฉากที่ 5: ถ้ำค้างคาว' },
    { id: 6, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 6', isLocked: true, title: 'ฉากที่ 6: หุบเหวนิรันดร์' },
    { id: 7, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 7 Locked', isLocked: true, title: 'ฉากที่ 7: ป่าต้องมนต์' },
    { id: 8, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 8', isLocked: true, title: 'ฉากที่ 8: ทะเลสาบเวทมนตร์' },
    { id: 9, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 9', isLocked: true, title: 'ฉากที่ 9: ภูเขาศักดิ์สิทธิ์' },
    { id: 10, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 10', isLocked: true, title: 'ฉากที่ 10: หมู่บ้านลับแล' },
    { id: 11, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 11', isLocked: true, title: 'ฉากที่ 11: เมืองฟ้า' },
    { id: 12, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 12 Locked', isLocked: true, title: 'ฉากที่ 12: ปราสาทร้าง' },
    { id: 13, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 13', isLocked: true, title: 'ฉากที่ 13: หอคอยแห่งกาลเวลา' },
    { id: 14, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 14 Locked', isLocked: true, title: 'ฉากที่ 14: ป้อมปราการ' },
    { id: 15, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 15', isLocked: true, title: 'ฉากที่ 15: สนามรบโบราณ' },
    { id: 16, imageUrl: '/Fortree.jpg', altText: 'Storyboard Frame 16', isLocked: true, title: 'ฉากที่ 16: บทสรุป' },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  onFrameClick(frame: StoryboardFrame): void {
    console.log(`StoryBoardComponent: onFrameClick for ID: ${frame.id}. Is locked: ${frame.isLocked}`);
    if (frame.isLocked) {
        alert('This frame is locked!');
        return;
    }

    const currentIndex = this.storyboardFrames.findIndex(f => f.id === frame.id);
    if (currentIndex === -1) {
        console.error('StoryBoardComponent: Frame not found in storyboardFrames array.');
        return;
    }

    const dialogRef = this.dialog.open(ImageV, {
        data: {
            currentFrame: this.storyboardFrames[currentIndex],
            allFrames: this.storyboardFrames,
            currentIndex: currentIndex
        },
        panelClass: 'SCENCE',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result && result.unlockedFrameId) {
    //     const unlockedFrame = this.storyboardFrames.find(f => f.id === result.unlockedFrameId);
    //     if (unlockedFrame) {
    //       unlockedFrame.isLocked = false;
    //       console.log(`Frame ID ${unlockedFrame.id} has been unlocked!`);
    //       // Optional: ถ้าต้องการให้เปิดภาพที่ปลดล็อกทันที
    //       // this.onFrameClick(unlockedFrame);
    //     }
    //   }
    // });

    console.log('StoryBoardComponent: Opening dialog for frame:', frame.id, 'with data:', {
        currentFrame: this.storyboardFrames[currentIndex],
        allFrames: this.storyboardFrames,
        currentIndex: currentIndex
    });
  }

  playToUnlock(): void {
    this.storyboardFrames.forEach(frame => frame.isLocked = false);
  }
}