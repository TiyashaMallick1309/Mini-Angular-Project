import {Component, HostListener, OnInit} from '@angular/core';
import {WishlistService} from '../wishlist.service';
import {ArtworkService} from '../artwork.service';
@Component({selector: 'app-wishlist', templateUrl: './wishlist.component.html', styleUrls: ['./wishlist.component.css']})
export class WishlistComponent implements OnInit {
    wishlistItems : any[] = [];

    constructor(public wishlistService : WishlistService, public artworkService : ArtworkService) {}

    ngOnInit() {
        this.wishlistItems = this.wishlistService.getWishlistItems();
    }

    removeFromWishlist(item : any) { // Call the removeFromWishlist function
        this.wishlistService.removeFromWishlist(item);
    }

    clearWishlist() {
        this.wishlistService.clearWishList();
        this.wishlistItems = [];
    }

}
