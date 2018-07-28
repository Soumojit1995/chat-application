import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';


import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RemoveSpecialCharPipe } from '../shared/pipe/remove-special-char.pipe';
import { ChatRouteGuardService } from './chat-route-guard.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule,
    AngularFontAwesomeModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'chat', component: ChatBoxComponent, canActivate: [ChatRouteGuardService] }
    ])
  ],
  declarations: [ChatBoxComponent, RemoveSpecialCharPipe],
  providers: [ChatRouteGuardService]
})
export class ChatModule { }
