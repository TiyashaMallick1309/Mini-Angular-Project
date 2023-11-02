import {Component, OnInit} from '@angular/core';
import {ArtworkService} from '../artwork.service';
import {WishlistService} from '../wishlist.service';

@Component({selector: 'app-artworks', templateUrl: './artworks.component.html', styleUrls: ['./artworks.component.css']})
export class ArtworksComponent implements OnInit {
    artworks : any[] = [];
    filteredArtworks : any[] = [];
    searchText : string = '';
    pageSize : number = 10;
    currentPage : number = 1;

    wishlistItems : any[] = [];

    constructor(public artworkService : ArtworkService, private wishlistService : WishlistService) {}

    ngOnInit(): void {
        this.artworkService.getArtworks().subscribe((data : any) => {
            console.log(data.data)
            this.artworks = data.data;
            this.filteredArtworks = this.artworks;
        });
    }

    filterArtworks() {
        this.currentPage = 1;
        this.filteredArtworks = this.artworks.filter((artwork) => artwork.title.toLowerCase().includes(this.searchText.toLowerCase()));
    }

    // Methods for pagination
    setPage(page : number) {
        this.currentPage = page;
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage --;
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage ++;
        }
    }

    get totalPages(): number {
        return Math.ceil(this.filteredArtworks.length / this.pageSize);
    }

    get pages(): number[]{
        const pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    handleImageError(event : Event): void { // Log the error to the console
        console.error("Image error: ", event);
    }

    // Define the addToWIshlist method
    addToWishlist(item : any) { 
        if (this.wishlistService.wishlistItems.indexOf(item) === -1){
        this.wishlistService.addToWishlist(item);}
        // console.log("wishlist: ",this.wishlistService.wishlistItems);
    }
}
