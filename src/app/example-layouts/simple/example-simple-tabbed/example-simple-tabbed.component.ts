import { TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DrawerService } from '@all-knowledge/shared/components/drawer/drawer.service';
import { ExampleDrawerComponent } from './example-drawer/example-drawer.component';

@Component({
  selector: 'ak-example-simple-tabbed',
  templateUrl: './example-simple-tabbed.component.html',
  styleUrls: ['./example-simple-tabbed.component.scss']
})
export class ExampleSimpleTabbedComponent implements OnInit {

  formGroup: FormGroup;
  typeFieldEnum = TypeFieldEnum;
  params: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private drawerService: DrawerService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit() {
    this.buildFormGroup();
    this.getRouteParams();
  }

  getRouteParams() {
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });
  }

  buildFormGroup() {
    this.formGroup = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      value: new FormControl(null)
    });
  }

  openDrawer() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleDrawerComponent);
    this.drawerService.open(componentFactory, 'Example Drawer', 'lg', {title: 'Teste3'}, null);
  }

}
