// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home} from './home/home'; 
import { StoryBoard } from './story-board/story-board'; 
import { Trailer } from './trailer/trailer';
import { SupportUs } from './support-us/support-us';
import { AboutUs } from './about-us/about-us';
import { Member } from './member/member';

export const routes: Routes = [
  {
    path: '', 
    component: Home 
  },
  {
    path: 'story-board', 
    component: StoryBoard 
  },
  {
    path: 'support-us',
    component:SupportUs
  },
  {
    path: 'trailer',
    component:Trailer
  },
  {
    path: 'about-us',
    component:AboutUs

  },
  {
    path: 'member',
    component:Member
  }

  
];