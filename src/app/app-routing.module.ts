import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent}
];

@NgModule({

})
export class AppRoutingModule{

}