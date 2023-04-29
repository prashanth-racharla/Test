import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordmanagerComponent } from './passwordmanager/passwordmanager.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [

 // {path:"create", component:PasswordmanagerComponent},
 // {path:"home", component:AppComponent},
 // {path:"parent", component:ParentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
