import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordmanagerComponent } from './passwordmanager/passwordmanager.component';
import { FormsModule } from '@angular/forms';
 
import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

 

@NgModule({
  declarations: [
    AppComponent,
    PasswordmanagerComponent,
    ParentComponent,
    ChildComponent,
    PopupComponent
  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
   
  ],
  providers: [PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }



