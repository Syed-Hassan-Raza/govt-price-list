// built-in
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import 'hammerjs';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatMenuModule
} from '@angular/material';

// components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';

import { appRoutes } from './routes';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    AdminPanelComponent,
    LayoutComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
