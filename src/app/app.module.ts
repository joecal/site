import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdButtonModule, MdIconModule, MdGridListModule, MdListModule, MdCardModule, MdInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortraitComponent } from './portrait/portrait.component';
import { LinksComponent } from './links/links.component';
import { MailComponent } from './mail/mail.component';
import { SentComponent } from './sent/sent.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    PortraitComponent,
    LinksComponent,
    MailComponent,
    SentComponent,
    WorkComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'site'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdListModule,
    MdCardModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
