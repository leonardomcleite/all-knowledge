import { TypeFieldEnum } from '@all-knowledge/core/enums/type-field.enum';
import { FormControlModel } from '@all-knowledge/core/models/form-control.model';
import { NotificationEnum, NotificationType } from '@all-knowledge/core/models/notification.model';
import { NotificationService } from '@all-knowledge/shared/components/notification/services/notification.service';
import { MaskNumberModel } from '@all-knowledge/shared/directives/mask-number/mask.-number.type';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ak-example-carded-tabbed',
  templateUrl: './example-carded-tabbed.component.html',
  styleUrls: ['./example-carded-tabbed.component.scss']
})
export class ExampleCardedTabbedComponent implements OnInit {

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