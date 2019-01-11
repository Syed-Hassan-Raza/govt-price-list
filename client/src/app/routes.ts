import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HiddenItmsComponent } from './components/hidden-itms/hidden-itms.component';
import { CategoryComponent } from './components/category/category.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ItemComponent } from './components/item/item.component';
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
      component:AdminPanelComponent,
      children: [
    {
      path:"categories",
      component:CategoryComponent,
    },
    {
      path:"items",
      component:ItemComponent,
    }
    , {
      path:"item_details/:id",
      component:ItemDetailComponent,
    }
    ,
    {
      path:"hidden_items",
      component:HiddenItmsComponent,
    }
    ,
    {
      path:"pricing",
      component:ItemComponent,
    }
    ,
    {
      path:"add_pricing",
      component:PricingComponent,
    }
  ]
}
];
