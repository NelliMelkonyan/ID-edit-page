import { ParseOptions } from 'querystring';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { FilterCam} from './cameras/cameras.pipe';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CamerasComponent } from './cameras/cameras.component';
import { HomeComponent } from './home/home.component';
import { DetectedObjectsComponent } from './detected-objects/detected-objects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cameras', component: CamerasComponent},
  { path: 'detected', component: DetectedObjectsComponent },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CamerasComponent,
    HomeComponent,
    DetectedObjectsComponent,
    HeaderComponent,
    FooterComponent,
    FilterCam
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
