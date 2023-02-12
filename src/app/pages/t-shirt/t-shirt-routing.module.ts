import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TShirtComponent } from './t-shirt.component';

const routes: Routes = [{ path: '', component: TShirtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TShirtRoutingModule { }
