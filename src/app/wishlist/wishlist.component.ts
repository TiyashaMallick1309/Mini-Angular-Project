import {Component, OnInit} from '@angular/core';
import {WishlistService} from '../../shared/services/wishlist.service';
import {ArtworkService} from '../../shared/services/artwork.service';

@Component({selector: 'app-wishlist', templateUrl: './wishlist.component.html', styleUrls: ['./wishlist.component.css']})
export class WishlistComponent implements OnInit {
    wishlistItems : any[] = []; // Declare an empty array to store wishlist items

    constructor(public wishlistService : WishlistService, public artworkService : ArtworkService) {}

    ngOnInit() {
        this.wishlistItems = this.wishlistService.getWishlistItems(); // Retrieve the wishlist items from the wishlist service
    }

    // Call the removeFromWishlist function
    removeFromWishlist(item : any) {
        this.wishlistService.removeFromWishlist(item);
    }

    // Method to clear the entire wishlist
    clearWishlist() {
        this.wishlistService.clearWishList();
        this.wishlistItems = [];
    }

}
