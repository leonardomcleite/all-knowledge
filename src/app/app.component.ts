import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { InternationalizationService } from './core/services/internationalization/internationalization.service';
import { DrawerService } from './shared/components/drawer/drawer.service';
import { DrawerModel } from './shared/components/drawer/models/drawer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  sideOpened: boolean = true;
  isMobile: boolean = false;
  drawers: Array<DrawerModel>;
  drawersSubject: Subscription;

  constructor(
    private internationalizationService: InternationalizationService,
    private drawerService: DrawerService
  ) {
    this.internationalizationService.init();
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.isMobile = true;
    }
  }

  ngOnInit(): void {
    this.createObservableDrawers();
  }

  createObservableDrawers() {
    const drawerObs = this.drawerService.getDrawerObservables();
    if (drawerObs) {
      this.drawersSubject = drawerObs.subscribe(drawers => {
        this.drawers = drawers;
      });
    }
  }

  closeSidenav(sidenav) {
    if (this.isMobile) {
      sidenav.close();
    }
  }

}
