import { TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { FormControlModel } from '@all-knowledge/core/models/form-control.model';
import { DrawerService } from '@all-knowledge/shared/components/drawer/drawer.service';
import { MaskNumberModel } from '@all-knowledge/shared/directives/mask-number/mask.-number.type';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExampleDrawerComponent } from './example-drawer/example-drawer.component';

@Component({
  selector: 'ak-example-simple-tabbed',
  templateUrl: './example-simple-tabbed.component.html',
  styleUrls: ['./example-simple-tabbed.component.scss']
})
export class ExampleSimpleTabbedComponent implements OnInit {

  name: FormControlModel | FormControl = new FormControlModel(null, [Validators.required]);
  date: FormControlModel | FormControl = new FormControl(null, [Validators.required]);
  value: FormControlModel | FormControl = new FormControlModel(null, [], [], new MaskNumberModel(1, 2));

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
    this.date.valueChanges.subscribe(val => {
      console.log('FormControl date:' + val);
    });
  }

  getRouteParams() {
    this.activatedRoute.params.subscribe((params) => {
      this.params = params;
    });
  }

  buildFormGroup() {
    this.value.mask = new MaskNumberModel(1, 2);
    this.formGroup = this.formBuilder.group({
      name: this.name,
      date: this.date,
      value: this.value
    });
  }

  openDrawer() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleDrawerComponent);
    this.drawerService.open(componentFactory, 'Example Drawer', 'lg', {title: 'Teste3'}, null);
  }

}
