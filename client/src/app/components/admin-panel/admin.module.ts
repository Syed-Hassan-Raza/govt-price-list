import { AdminRouting } from './admin.routes';
import { UserPanelComponent } from './../user-panel/user-panel.component';
// built-in
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { appRoutes } from '../../routes';
import { AdminPanelComponent } from './admin-panel.component';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,,
    AdminRouting

  ],
  providers: [],
  bootstrap: [UserPanelComponent]
})
export class AppModule { }
