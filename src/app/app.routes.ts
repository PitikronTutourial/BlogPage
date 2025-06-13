// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home} from './home/home'; 
import { StoryBoard } from './story-board/story-board'; 

export const routes: Routes = [
  {
    path: '', 
    component: Home 
  },
  {
    path: 'story-board', 
    component: StoryBoard 
  },
  
];