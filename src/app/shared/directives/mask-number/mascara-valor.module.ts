import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskNumberDirective } from './mascara-valor.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MaskNumberDirective
    ],
    exports: [
        MaskNumberDirective
    ],
    providers: [],
})
export class MaskValueModule {}
