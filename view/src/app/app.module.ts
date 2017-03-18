import { PostService } from './service/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './component/post/post.component';
import { AddpostComponent } from './component/addpost/addpost.component';
import { OnepostComponent } from './component/onepost/onepost.component';
import { EditpostComponent } from './component/editpost/editpost.component';


const appRoutes: Routes = [
  { path: '', component: PostComponent },
  { path: 'addpost', component: AddpostComponent },
  { path: 'onepost/:id', component: OnepostComponent },
  { path: 'editpost/:id', component: EditpostComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddpostComponent,
    OnepostComponent,
    EditpostComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
