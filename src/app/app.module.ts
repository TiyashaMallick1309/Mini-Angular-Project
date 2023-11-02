import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ArtworksComponent} from './artworks/artworks.component';
import {DetailsComponent} from './details/details.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import { MaterialModule } from 'src/material/material.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArtworksComponent,
        DetailsComponent,
        WishlistComponent
    ],
    imports: [ MaterialModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
