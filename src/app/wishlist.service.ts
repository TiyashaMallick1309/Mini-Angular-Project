import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class WishlistService {

    constructor() {}

    wishlistItems : any[] = [];

    addToWishlist(item : any) {
        this.wishlistItems.push(item);
    }

    removeFromWishlist(item : any) {
        const index = this.wishlistItems.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            this.wishlistItems.splice(index, 1);
        }
    }

    clearWishList() { // Clear the wishlist
        this.wishlistItems = [];
    }
    // Get the wishlist items
    getWishlistItems(): any[]{
        return this.wishlistItems;
    }
}
