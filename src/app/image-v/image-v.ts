// src/app/image-v/image-v.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Interface ของ Frame ควรจะเหมือนกันในทุก Component ที่เกี่ยวข้อง
interface StoryboardFrame {
  id: number;
  imageUrl: string;
  altText: string;
  isLocked: boolean;
  title?: string;
}

// อัปเดต Interface สำหรับข้อมูล Dialog ที่รับเข้ามา
export interface ImageVDialogData {
  currentFrame: StoryboardFrame; // เฟรมปัจจุบัน
  allFrames: StoryboardFrame[]; // เฟรมทั้งหมด
  currentIndex: number; // Index ของเฟรมปัจจุบัน
}

@Component({
  selector: 'app-image-v',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './image-v.html', // สังเกตตรงนี้: template extension
  styleUrls: ['./image-v.css'] // สังเกตตรงนี้: style extension
})
export class ImageV implements OnInit {

  currentDisplayFrame: StoryboardFrame; // ตัวแปรที่ใช้ผูกกับ HTML
  hasNextFrame: boolean = false;
  nextFrameIsLocked: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ImageV>,
    @Inject(MAT_DIALOG_DATA) public data: ImageVDialogData // รับข้อมูลด้วย Type ที่ถูกต้อง
  ) {
    // **สำคัญ: กำหนดค่าเริ่มต้นของ currentDisplayFrame จากข้อมูลที่รับมา**
    this.currentDisplayFrame = data.currentFrame;
  }

  ngOnInit(): void {
    this.updateNavigationState();
    // **สำคัญ: Console.log เพื่อดูว่า currentDisplayFrame มีข้อมูลจริงไหม**
    console.log('ImageV Component: Initial data received:', this.data);
    console.log('ImageV Component: currentDisplayFrame on init:', this.currentDisplayFrame);
  }

  updateNavigationState(): void {
    const nextIndex = this.data.currentIndex + 1;
    this.hasNextFrame = nextIndex < this.data.allFrames.length;

    if (this.hasNextFrame) {
      const nextFrame = this.data.allFrames[nextIndex];
      this.nextFrameIsLocked = nextFrame.isLocked;
    } else {
      this.nextFrameIsLocked = false;
    }
    console.log('ImageV Component: Navigation state updated. Has next:', this.hasNextFrame, 'Next is locked:', this.nextFrameIsLocked);
  }

  onNext(): void {
    console.log('ImageV Component: onNext() called.');
    const nextIndex = this.data.currentIndex + 1;

    if (nextIndex >= this.data.allFrames.length) {
        // กรณีเป็นภาพสุดท้ายแล้ว
        console.log('ImageV Component: Reached last frame. Closing dialog.');
        this.dialogRef.close(); // ปิด Dialog เมื่อถึงภาพสุดท้าย
        return;
    }

    const nextFrame = this.data.allFrames[nextIndex]; // ได้รับ Reference ของ Object จริงๆ

    if (nextFrame.isLocked) {
        // **เมื่อกด Unlock Next และภาพถัดไปถูกล็อก:**
        console.log(`ImageV Component: Next frame (ID ${nextFrame.id}) is locked. Unlocking and moving to it.`);

        // 1. ทำการปลดล็อกภาพถัดไป *ใน array ต้นฉบับ* ทันที
        nextFrame.isLocked = false; // <<< สำคัญ: เปลี่ยนสถานะ isLocked เป็น false

        // 2. เปลี่ยนภาพที่แสดงใน Pop-up ไปเป็นภาพที่เพิ่งปลดล็อกนั้น
        this.currentDisplayFrame = nextFrame;
        this.data.currentIndex = nextIndex; // อัปเดต index ของภาพที่กำลังแสดง
        this.updateNavigationState(); // อัปเดตสถานะปุ่ม Next (ตอนนี้ nextFrameIsLocked จะเป็น false)

        // 3. ไม่ต้อง return; ที่นี่ เพราะเราต้องการให้โค้ดทำงานต่อเพื่อเปลี่ยนภาพ
        console.log(`ImageV Component: Display updated to newly unlocked frame (ID ${this.currentDisplayFrame.id}).`);

    } else {
        // ถ้าภาพถัดไปไม่ได้ล็อก (เปลี่ยนภาพใน Dialog)
        console.log(`ImageV Component: Next frame (ID ${nextFrame.id}) is already unlocked. Changing display.`);
        this.currentDisplayFrame = nextFrame;
        this.data.currentIndex = nextIndex;
        this.updateNavigationState();
    }
  } // <<<<<< มีวงเล็บปีกกาปิดเกินมาตรงนี้
   // <<<<<< และเมธอด onClose() ไม่อยู่ใน class ImageV แล้ว

  onClose(): void {
    console.log('ImageV Component: onClose() called. Closing dialog.');
    this.dialogRef.close();
}
}