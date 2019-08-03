import { DrawerModule } from '@all-knowledge/shared/components/drawer/drawer.module';
import { DrawerService } from '@all-knowledge/shared/components/drawer/drawer.service';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    DrawerModule
  ],
  exports: [
    DrawerModule
  ]
})
export class SingletonModule { 
  constructor (@Optional() @SkipSelf() parentModule: SingletonModule) {
    if (parentModule) {
      throw new Error(
        'SingletonModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: DrawerService): ModuleWithProviders {
    return {
      ngModule: SingletonModule,
      providers: [
        {provide: DrawerService, useValue: config }
      ]
    };
  }
}
