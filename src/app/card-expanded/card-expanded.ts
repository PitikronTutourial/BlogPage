// src/app/card-expanded/card-expanded.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog'; 
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; 
import { MatIconModule } from '@angular/material/icon';

// Interface สำหรับข้อมูลที่รับเข้ามาใน Dialog
export interface CardDialogData { 
  title: string;
  fullDescription: string;
  imageUrl?: string;
  path: string; 
}

@Component({
  selector: 'app-card-expanded',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogTitle,     
    MatDialogContent,   
    MatDialogActions,
    MatIconModule    
  ],
  templateUrl: './card-expanded.html',
  styleUrls: ['./card-expanded.css'] 
})
export class CardExpanded {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CardDialogData,
    public dialogRef: MatDialogRef<CardExpanded>,
    private router: Router // <-- Inject Router
  ) { }

  Onclose(): void {
    this.dialogRef.close();
  }

  // เมธอดใหม่สำหรับนำทางเมื่อคลิกที่ชื่อหัวเรื่องใน Pop-up
  navigateToPageFromDialog(path: string): void {
    this.dialogRef.close(); // ปิด Dialog ก่อนนำทาง
    this.router.navigate([path]); // นำทางไปยัง Path ที่ได้รับมา
  }
}