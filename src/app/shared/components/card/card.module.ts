import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardComponent } from './card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardSubtitleComponent } from './card-subtitle/card-subtitle.component';
import { CardAvatarComponent } from './card-avatar/card-avatar.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardActionsComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardAvatarComponent
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardActionsComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardAvatarComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
  ]
})
export class CardModule {}
