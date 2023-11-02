import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ArtworksComponent} from './artworks/artworks.component';
import {DetailsComponent} from './details/details.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArtworksComponent,
        DetailsComponent,
        WishlistComponent
    ],
    imports: [
        BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
