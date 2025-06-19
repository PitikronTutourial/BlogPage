import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // หรือ app.config.server ถ้าคุณเปิด SSR
import { AppComponent } from './app/app'; // <--- **แก้ไขตรงนี้! ชี้ไปที่โฟลเดอร์ app และชื่อไฟล์ app (ซึ่งคือ app.ts)**


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));