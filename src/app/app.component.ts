import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { InternationalizationService } from './core/services/internationalization/internationalization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  sideOpened = true;
  isMobile: boolean;

  mobileAndDesktopQuery: MediaQueryList[] = [];
  mobileAndDesktopQueryListener: any[] = [];

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    private internationalizationService: InternationalizationService,
  ) {
    this.internationalizationService.init();
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      console.log("Mobile");
    }
  }

  ngOnInit(): void {
    this.mobileAndDesktopQuery.push(this.media.matchMedia('(max-width: 600px)'));
    this.mobileAndDesktopQuery.push(this.media.matchMedia('(min-width: 600px)'));

    if (this.mobileAndDesktopQuery[0].matches) {
      this.sideOpened = false;
      this.isMobile = true;
    }

    this.mobileAndDesktopQueryListener.push(() => {
      if (this.mobileAndDesktopQuery[0].matches) {
        this.isMobile = true;
      }
      this.changeDetectorRef.detectChanges();
    });

    this.mobileAndDesktopQueryListener.push(() => {
      if (this.mobileAndDesktopQuery[1].matches) {
        this.isMobile = false;
      }
      this.changeDetectorRef.detectChanges();
    });

    this.mobileAndDesktopQuery[0].addEventListener('change', this.mobileAndDesktopQueryListener[0]);
    this.mobileAndDesktopQuery[1].addEventListener('change', this.mobileAndDesktopQueryListener[1]);

  }

  ngOnDestroy(): void {
    this.mobileAndDesktopQuery.forEach((element, index) => {
      element.removeEventListener('change', this.mobileAndDesktopQueryListener[index]);
    });
  }

  closeSidenav(sidenav) {
    if (this.isMobile) {
      sidenav.close();
    }
  }

}
