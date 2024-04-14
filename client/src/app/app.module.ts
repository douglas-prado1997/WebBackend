import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ReadmeComponent } from './components/pages/readme/readme.component';
import { UsersComponent } from './components/pages/users/users.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PostComponent } from './components/pages/post/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReadmeComponent,
    UsersComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    PostComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
