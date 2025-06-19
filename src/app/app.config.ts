import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core'; // **เพิ่ม importProvidersFrom**
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon'; // ยังคง import ไว้
import { MatDialogModule } from '@angular/material/dialog'; // **ต้อง Import MatDialogModule ด้วย**
import { MatButtonModule } from '@angular/material/button'; // **ต้อง Import MatButtonModule ด้วย**


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration:'enabled',
      anchorScrolling:'enabled',
    })),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    importProvidersFrom(
      MatDialogModule, // สำหรับ MatDialog
      MatButtonModule, // สำหรับ MatButton
      MatIconModule    // สำหรับ MatIcon
    )
  ]
};