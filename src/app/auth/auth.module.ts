import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import * as fromServices from './services';
import { reducers } from './store';

const ROUTES: Routes = [
  { path: '', component: LoginPageComponent, data: { title: 'Login' } },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('auth', reducers),
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class AuthModule {}
