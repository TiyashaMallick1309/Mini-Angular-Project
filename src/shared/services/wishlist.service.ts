import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class WishlistService {

    constructor() {}

    wishlistItems : any[] = [];

    // Adding item to wishlist
    addToWishlist(item : any) {
        this.wishlistItems.push(item);
    }

    // Method to remove item from wishlist
    removeFromWishlist(item : any) {
        const index = this.wishlistItems.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            this.wishlistItems.splice(index, 1);
        }
    }

    // Clear the wishlist
    clearWishList() {
        this.wishlistItems = [];
    }

    // Get the wishlist items
    getWishlistItems(): any[]{
        return this.wishlistItems;
    }
}
