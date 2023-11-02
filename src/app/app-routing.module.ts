import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {DetailsComponent} from './details/details.component';
import {HomeComponent} from './home/home.component';

//Routes
const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    }, {
        path: "",
        component: HomeComponent
    }, {
        path: "wishlist",
        component: WishlistComponent
    }, {
        path: "artwork/:id",
        component: DetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
