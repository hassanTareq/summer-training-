import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { LatesNewsComponent } from './lates-news/lates-news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"explore",component:ExploreComponent},
  //localhost:4200/news
  {path:"news",component:LatesNewsComponent},
  //localhost:4200/works
  {path:"works",component:WorksComponent},
  //localhost:4200/contact
  {path:"contact",component:ContactComponent},
  //wiled card
  {path:"**" , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
