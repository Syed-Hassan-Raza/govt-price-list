import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },

    {
      path: 'User', component:UserPanelComponent
    },
    {
      path: "Dashboard",
      component:AdminPanelComponent
    },
    {
      path: "Admin",
      component: AdminPanelComponent,
      children: [


        {
          path: "",
          component: UserProfileComponent,
          canActivate: [AuthGuard]
        },
        {
          path: "",
          component:AdminPanelComponent
        }
      ]
    }
];