import { Component } from '@angular/core';
import { InternationalizationService } from './core/services/internationalization/internationalization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  sideOpened: boolean = true;
  isMobile: boolean = false;

  constructor(
    private internationalizationService: InternationalizationService,
  ) {
    this.internationalizationService.init();
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.isMobile = true;
    }
  }

  closeSidenav(sidenav) {
    if (this.isMobile) {
      sidenav.close();
    }
  }

}
