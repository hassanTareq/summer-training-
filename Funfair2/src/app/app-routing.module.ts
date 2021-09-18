import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  //localhost:4200
  {path:'',component:HomeComponent},
  //localhost:4200/ourStory
  {path:'ourStory',component:OurStoryComponent},
   //localhost:4200/tickets
  {path:'tickets',component:TicketsComponent},
   //localhost:4200/gallery
  {path:'gallery',component:GalleryComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
