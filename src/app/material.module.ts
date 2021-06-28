import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    // imports array
    imports: [ MatSliderModule, MatButtonModule ],
    exports: [ MatSliderModule, MatButtonModule ]
})
// a class to manage material components
export class MaterialModule {

}