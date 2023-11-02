// imports
import {Component, OnInit} from '@angular/core';
import {ArtworkService} from '../../shared/services/artwork.service';
import {WishlistService} from '../../shared/services/wishlist.service';

// Decorator to specify the component's metadata
@Component({selector: 'app-artworks', templateUrl: './artworks.component.html', styleUrls: ['./artworks.component.css']})

// Class that implements the component's functionality
export class ArtworksComponent implements OnInit { // Initialize class properties
    artworks : any[] = []; // Array to store all artworks
    filteredArtworks : any[] = []; // Array to store filtered artworks
    searchText : string = ''; // Property to hold the search text entered by user
    pageSize : number = 10; // Property to specify how many artworks to show per page
    currentPage : number = 1; // Property to hold the current page number

    wishlistItems : any[] = [];
    // Array to store wishlist items

    // Constructor to inject necessary services
    constructor(public artworkService : ArtworkService, private wishlistService : WishlistService) {}

    // Lifecycle hook that runs when component is initialized
    ngOnInit(): void { // Call the ArtworkService to get all artworks
        this.artworkService.getArtworks().subscribe((data : any) => {
            console.log(data.data);
            this.artworks = data.data;
            this.filteredArtworks = this.artworks;
        });
    }

    // Method to filter artworks based on search text
    filterArtworks() {
        this.currentPage = 1;
        this.filteredArtworks = this.artworks.filter((artwork) => artwork.title.toLowerCase().includes(this.searchText.toLowerCase()));
    }

    // Methods for pagination
    setPage(page : number) {
        this.currentPage = page;
    }

    // Method to move to previous page
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage --;
        }
    }

    // Method to move to next page
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage ++;
        }
    }

    // Getter method to calculate total number of pages
    get totalPages(): number {
        return Math.ceil(this.filteredArtworks.length / this.pageSize);
    }

    // Getter method to create an array of all page numbers
    get pages(): number[]{
        const pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    // Method to handle errors when loading artwork images
    handleImageError(event : Event): void { // Log the error to the console
        console.error("Image error: ", event);
    }

    // Method to add an item to the wishlist
    addToWishlist(item : any) {
        if (this.wishlistService.wishlistItems.indexOf(item) === -1) {
            this.wishlistService.addToWishlist(item);
        }
    }
}
