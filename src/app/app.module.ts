import { SocialComponent } from './../components/social/social.component';
import { ProjectsComponent } from './../components/projects/projects.component';
import { SkillsComponent } from './../components/skills/skills.component';
import { AboutComponent } from './../components/about/about.component';
import { BannerComponent } from './../components/banner/banner.component';
import { HeaderComponent } from './../components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
