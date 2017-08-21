import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdButtonModule, MdIconModule, MdGridListModule, MdListModule, MdCardModule, MdInputModule, MdProgressBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PortraitComponent } from './portrait/portrait.component';
import { LinksComponent } from './links/links.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PortraitComponent,
    LinksComponent,
    WorkComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    FormComponent
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
    MdInputModule,
    MdProgressBarModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
