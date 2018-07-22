import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';


import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule,
    AngularFontAwesomeModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'chat', component: ChatBoxComponent }
    ])
  ],
  declarations: [ChatBoxComponent]
})
export class ChatModule { }
