import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularSplitModule } from 'angular-split';
import { TreeModule } from 'angular-tree-component';

import { changei18n, IgxGridModule } from 'igniteui-angular';
import { IgxResourceStringsJA } from 'igniteui-angular-i18n';
changei18n(IgxResourceStringsJA);

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    // TODO: remove when it is fixed;https://github.com/bertrandg/angular-split/issues/149
    AngularSplitModule.forChild(),

    TreeModule.forRoot(),

    IgxGridModule
  ]
})
export class HomeModule { }
