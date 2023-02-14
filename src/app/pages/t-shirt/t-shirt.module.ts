import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TShirtRoutingModule } from './t-shirt-routing.module';
import { TShirtComponent } from './t-shirt.component';

@NgModule({
  declarations: [
    TShirtComponent,
  ],
  imports: [
    CommonModule,
    TShirtRoutingModule,
  ]
})
export class TShirtModule { }
