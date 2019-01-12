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
        path: 'login', component:SignInComponent,
    },
    {
      path: 'signup', component:SignUpComponent

  },

    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },

    {
      path: "Dashboard",
      component:AdminPanelComponent,
      children: [
    {
      path:"categories",
      component:CategoryComponent,canActivate:[AuthGuard]
    },
    {
      path:"items",
      component:ItemComponent,
    }
    , {
      path:"item_details/:id",
      component:ItemDetailComponent,canActivate:[AuthGuard]
    }
    ,
    {
      path:"hidden_items",
      component:HiddenItmsComponent,canActivate:[AuthGuard]
    }
    ,
    {
      path:"pricing",
      component:ItemComponent,canActivate:[AuthGuard]
    }
    ,
    {
      path:"add_pricing",
      component:PricingComponent,canActivate:[AuthGuard]
    }
    ,{
      path:"user",
      component:UserProfileComponent,canActivate:[AuthGuard]
    },
    {
      path: 'signup', component:SignUpComponent

  },

  ],

}
];
