import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    // imports array
    imports: [ MatSliderModule, MatButtonModule, MatIconModule ],
    exports: [ MatSliderModule, MatButtonModule, MatIconModule ]
})
// a class to manage material components
export class MaterialModule {

}