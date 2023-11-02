import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ArtworkService {
    private artworks : any[] = []; // Actual data will be fetched from the API
    private wishlist : any[] = [];

    constructor(private http : HttpClient) {}

    // Fetch artworks from the API
    getArtworks(): Observable < any[] > {
        const apiUrl = 'https://api.artic.edu/api/v1/artworks?page=2&limit=100';
        // console.log(apiUrl);
        return this.http.get<any[]>(apiUrl);
    }

    // Fetch artwork details by ID from the API
    getArtworkById(id : number): Observable < any > {
        const apiUrl = `https://api.artic.edu/api/v1/artworks/${id}`;
        // console.log(apiUrl);
        return this.http.get<any>(apiUrl);
    }

    // Add an artwork to the wishlist
    addToWishlist(artwork : any) {
        this.wishlist.push(artwork);
    }

    // Remove an artwork from the wishlist
    removeFromWishlist(artwork : any) {
        const index = this.wishlist.findIndex(item => item.id === artwork.id);
        if (index !== -1) {
            this.wishlist.splice(index, 1);
        }
    }

    // Get Image Url
    getImageUrl(imageId : string) {
        const iiifBaseUrl = 'https://www.artic.edu/iiif/2';
        const imageUrl = `${iiifBaseUrl}/${imageId}/full/843,/0/default.jpg`;
        return imageUrl;
    }
}
