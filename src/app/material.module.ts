import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    // imports array
    imports: [ MatSliderModule, MatButtonModule, MatIconModule, MatFormField, MatInputModule],
    exports: [ MatSliderModule, MatButtonModule, MatIconModule, MatFormField, MatInputModule]
})
// a class to manage material components
export class MaterialModule {

}