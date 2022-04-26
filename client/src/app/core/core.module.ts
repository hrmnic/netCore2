import { BasketComponent } from './../basket/basket.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TestErrorComponent } from './test-error/test-error.component';
import { ToastrModule } from 'ngx-toastr';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BadgeModule } from 'primeng/badge';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [NavBarComponent, NotFoundComponent, ServerErrorComponent, TestErrorComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    BreadcrumbModule,
    BadgeModule,
    SharedModule,

    ToastrModule.forRoot({
      positionClass: 'toastr-bottom-right',
      preventDuplicates: true,
    })
  ],
  exports: [NavBarComponent, SectionHeaderComponent],
})
export class CoreModule {}
