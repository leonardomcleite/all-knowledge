import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { InternationalizationService } from './core/services/internationalization/internationalization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
<<<<<<< HEAD
export class AppComponent {

  // sideOpened = true;
=======
export class AppComponent implements OnDestroy, OnInit {

  sideOpened = false;
>>>>>>> a6b20b3f1c2a453529e91894cdb24fd40daecf6c

  // mobileQuery: MediaQueryList;
  // desktopQuery: MediaQueryList;
  // private desktopQueryListener: () => void;
  // private mobileQueryListener: () => void;

  // closedByMobile: boolean;

<<<<<<< HEAD
  // constructor(
  //   public changeDetectorRef: ChangeDetectorRef,
  //   public media: MediaMatcher,
  //   private internationalizationService: InternationalizationService,
  // ) {
  //   this.internationalizationService.init();

  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   if (this.mobileQuery.matches) {
  //     this.sideOpened = false;
  //     this.closedByMobile = true;
  //   }
  //   this.mobileQueryListener = () => {
  //     if (this.mobileQuery.matches) {
  //       this.closedByMobile = true;
  //     }
  //     changeDetectorRef.detectChanges();
  //   };
  //   this.mobileQuery.addEventListener('change', this.mobileQueryListener);

  //   this.desktopQuery = media.matchMedia('(min-width: 610px)');
  //   if (this.desktopQuery.matches) {
  //     this.closedByMobile = false;
  //   }
  //   this.desktopQueryListener = () => {
  //     if (this.desktopQuery.matches) {
  //       this.closedByMobile = false;
  //     }
  //     changeDetectorRef.detectChanges();
  //   };
  //   this.desktopQuery.addEventListener('change', this.desktopQueryListener);
  // }

  // ngOnDestroy(): void {
  //   this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  //   this.desktopQuery.removeEventListener('change', this.desktopQueryListener);
  // }
=======
  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    private internationalizationService: InternationalizationService,
  ) {
    this.internationalizationService.init();
  }

  ngOnInit(): void {
    // this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    // if (this.mobileQuery.matches) {
    //   this.sideOpened = false;
    //   this.closedByMobile = true;
    // }
    // this.mobileQueryListener = () => {
    //   if (this.mobileQuery.matches) {
    //     this.closedByMobile = true;
    //   }
    //   this.changeDetectorRef.detectChanges();
    // };
    // this.mobileQuery.addEventListener('change', this.mobileQueryListener);

    // this.desktopQuery = this.media.matchMedia('(min-width: 610px)');
    // if (this.desktopQuery.matches) {
    //   this.closedByMobile = false;
    // }
    // this.desktopQueryListener = () => {
    //   if (this.desktopQuery.matches) {
    //     this.closedByMobile = false;
    //   }
    //   this.changeDetectorRef.detectChanges();
    // };
    // this.desktopQuery.addEventListener('change', this.desktopQueryListener);
  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    // this.desktopQuery.removeEventListener('change', this.desktopQueryListener);
  }
>>>>>>> a6b20b3f1c2a453529e91894cdb24fd40daecf6c

  // closeSidenav(sidenav) {
  //   if (this.closedByMobile) {
  //     sidenav.close();
  //   }
  // }

}
