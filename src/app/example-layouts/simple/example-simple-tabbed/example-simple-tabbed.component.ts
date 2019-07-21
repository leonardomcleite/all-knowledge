import { TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { FormControlModel } from '@all-knowledge/core/models/form-control.model';
import { DrawerService } from '@all-knowledge/shared/components/drawer/drawer.service';
import { MaskNumberModel } from '@all-knowledge/shared/directives/mask-number/mask.-number.type';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExampleDrawerComponent } from './example-drawer/example-drawer.component';
import { NotificationService } from '@all-knowledge/shared/components/notification/services/notification.service';
import { NotificationType, NotificationEnum } from '@all-knowledge/core/models/notification.model';

@Component({
  selector: 'ak-example-simple-tabbed',
  templateUrl: './example-simple-tabbed.component.html',
  styleUrls: ['./example-simple-tabbed.component.scss']
})
export class ExampleSimpleTabbedComponent implements OnInit {

  name: FormControlModel | FormControl = new FormControlModel(null, [Validators.required]);
  birthday: FormControlModel | FormControl = new FormControl(null, [Validators.required]);
  salario: FormControlModel = new FormControlModel(null, [], [], new MaskNumberModel(16, 2));
  phone: FormControlModel | FormControl = new FormControl(null, [Validators.required]);

  formGroup: FormGroup;
  typeFieldEnum = TypeFieldEnum;
  params: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private drawerService: DrawerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private notificationService: NotificationService
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
      name: this.name,
      birthday: this.birthday,
      salario: this.salario,
      phone: this.phone
    });
  }

  openDrawer() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleDrawerComponent);
    this.drawerService.open(componentFactory, 'Example Drawer', 'lg', {title: 'Teste3'}, null);
  }

  openNotification(type: NotificationType) {
    switch (type) {
      case NotificationEnum.SUCCESS:
        this.notificationService.success('Teste', 'Teste');
        break;
      case NotificationEnum.ERROR:
        this.notificationService.error('Teste', 'Teste');
        break;
      case NotificationEnum.INFORMATION:
        this.notificationService.information('Teste', 'Teste');
        break;
      case NotificationEnum.WARNING:
        this.notificationService.warning('Teste', 'Teste');
        break;
    }
  }

}
