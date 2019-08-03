import { TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { FormControlModel } from '@all-knowledge/core/models/form-control.model';
import { NotificationEnum, NotificationType } from '@all-knowledge/core/models/notification.model';
import { DrawerService } from '@all-knowledge/shared/components/drawer/drawer.service';
import { NotificationService } from '@all-knowledge/shared/components/notification/services/notification.service';
import { MaskNumberModel } from '@all-knowledge/shared/directives/mask-number/mask.-number.type';
import { Component, ComponentFactoryResolver, OnInit, NgModuleFactory } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExampleDrawerComponent } from './example-drawer/example-drawer.component';
import { TestService } from './services/test.service';
import { mapByFormControl } from '@all-knowledge/core/helpers/map-by-form-control';

@Component({
  selector: 'ak-example-simple-tabbed',
  templateUrl: './example-simple-tabbed.component.html',
  styleUrls: ['./example-simple-tabbed.component.scss']
})
export class ExampleSimpleTabbedComponent implements OnInit {

  nomeCivil: FormControlModel | FormControl = new FormControlModel(null, [Validators.required]);
  dataNascimento: FormControlModel | FormControl = new FormControl(null, [Validators.required]);
  salario: FormControlModel = new FormControlModel(null, [], [], new MaskNumberModel(16, 2));
  cpf: FormControlModel | FormControl = new FormControl(null, [Validators.required]);

  formGroup: FormGroup;
  typeFieldEnum = TypeFieldEnum;
  params: any;
  

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private drawerService: DrawerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private notificationService: NotificationService,
    private testService: TestService,
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
      nomeCivil: this.nomeCivil,
      dataNascimento: this.dataNascimento,
      salario: this.salario,
      cpf: this.cpf
    });
  }

  openDrawer() {
    this.drawerService.open(ExampleDrawerComponent, this.componentFactoryResolver, 'titulo.exampleDrawer', 'lg', {title: 'Teste3'}, null);
  }

  getTest() {
    this.testService.findById(204554).subscribe((returnQuery: any) => {
      console.log(returnQuery);
      mapByFormControl(this.formGroup, returnQuery);
    });
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
