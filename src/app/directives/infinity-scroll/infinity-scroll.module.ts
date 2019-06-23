import { NgModule } from '@angular/core';
import { ScrollDirective } from './infinity-scroll.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ScrollDirective
    ],
    exports: [
        ScrollDirective
    ],
    providers: [],
})
export class ScrollModule {}
