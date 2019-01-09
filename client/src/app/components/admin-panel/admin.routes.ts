import { UserPanelComponent } from './../../components/user-panel/user-panel.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './../../components/user/user.component';
import { SignUpComponent } from './../../components/user/sign-up/sign-up.component';
import { SignInComponent } from './../../components/user/sign-in/sign-in.component';
import { UserProfileComponent } from './../../components/user-profile/user-profile.component';
import { AuthGuard } from './../../auth/auth.guard';
import { AdminPanelComponent } from './../../components/admin-panel/admin-panel.component';
import { CategoryComponent } from '../category/category.component';
import { ItemComponent } from '../item/item.component';

const appRoutes: Routes = [
  {
    path: "User",
    component: AdminPanelComponent,
    children: [
      {
        path: "login",
        component: UserComponent
      },
      { path: "signup", component: SignUpComponent },

      {
        path: "userprofile",
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
      }
    ]
  },

{
  path: 'items', component:ItemComponent
},
];
export const AdminRouting = RouterModule.forRoot(appRoutes);
