import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdButtonModule, MdIconModule, MdGridListModule, MdListModule, MdSelectModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortraitComponent } from './portrait/portrait.component';
import { LinksComponent } from './links/links.component';
import { MailComponent } from './mail/mail.component';
import { SentComponent } from './sent/sent.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    PortraitComponent,
    LinksComponent,
    MailComponent,
    SentComponent,
    WorkComponent
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
    MdSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
