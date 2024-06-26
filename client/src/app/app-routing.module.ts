import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ReadmeComponent } from './components/pages/readme/readme.component';
import { UsersComponent } from './components/pages/users/users.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PostComponent } from './components/pages/post/post/post.component';
import { ListPostComponent } from './components/pages/post/list-post/list-post.component';
import { CommentComponent } from './components/pages/post/comment/comment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'readme', component: ReadmeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'post', component: PostComponent},
  {path: 'list-post', component: ListPostComponent},
  {path: 'comment', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
