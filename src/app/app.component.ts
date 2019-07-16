import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InternationalizationService } from './core/services/internationalization/internationalization.service';
import { DrawerModel } from './shared/components/drawer/models/drawer';
import { DrawerService } from './shared/components/drawer/drawer.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

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
    this.verifyIfIsDrawer();
    this.drawerService.open('ak-example-drawer', null, null, null, 'Editar Agenda', 'md');
  }

  ngAfterViewInit(): void {
    // this.verifyIfIsDrawer();
  }

  verifyIfIsDrawer() {
    const drawerObs = this.drawerService.getDrawerObservables();
    if (drawerObs) {
      this.drawersSubject = drawerObs.subscribe(
        drawers => {
          this.drawers = drawers;
        }
      );
    }
  }

  isDrawer(): boolean {
    return true;
  }

  closeSidenav(sidenav) {
    if (this.isMobile) {
      sidenav.close();
    }
  }

}
