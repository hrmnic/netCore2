import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'primeng/api';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, GalleriaModule],
  exports: [HomeComponent],
})
export class HomeModule {}
