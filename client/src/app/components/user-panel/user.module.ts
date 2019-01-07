import { UserRouting } from './user.routes';
import { UserPanelComponent } from './user-panel.component';
// built-in
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignInComponent } from '../user/sign-in/sign-in.component';
import { SignUpComponent } from '../user/sign-up/sign-up.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AppComponent } from 'src/app/app.component';
@NgModule({
  declarations: [
    UserPanelComponent,
    SignInComponent,
    SignUpComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UserRouting

  ],
  providers: [],
  bootstrap: [UserPanelComponent]
})
export class AppModule { }
