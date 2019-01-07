import { UserPanelComponent } from "./../../components/user-panel/user-panel.component";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./../../components/user/user.component";
import { SignUpComponent } from "./../../components/user/sign-up/sign-up.component";
import { SignInComponent } from "./../../components/user/sign-in/sign-in.component";
import { UserProfileComponent } from "./../../components/user-profile/user-profile.component";
import { AuthGuard } from "./../../auth/auth.guard";
const appRoutes: Routes = [
  {
    path: "User",
    component: UserPanelComponent,
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
  }
];
export const UserRouting = RouterModule.forRoot(appRoutes);
