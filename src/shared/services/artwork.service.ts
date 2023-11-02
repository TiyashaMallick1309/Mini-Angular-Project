import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ArtworkService {
    private artworks : any[] = []; // Actual data will be fetched from the API
    private wishlist : any[] = [];

    constructor(private http : HttpClient) {}

    // Fetch artworks from the API
    getArtworks(): Observable < any[] > { // Replace this URL with the actual API endpoint
        const apiUrl = 'https://api.artic.edu/api/v1/artworks?page=2&limit=100';
        // console.log(apiUrl)
        return this.http.get<any[]>(apiUrl);
    }

    // Fetch artwork details by ID from the API
    getArtworkById(id : number): Observable < any > { // Replace this URL with the actual API endpoint
        const apiUrl = `https://api.artic.edu/api/v1/artworks/${id}`;
        // console.log(apiUrl);
        return this.http.get<any>(apiUrl);
    }

    // Implement search for artworks
    // searchArtworks(query : string): Observable < any[] > { // Replace this URL with the actual API endpoint
    //     const apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}`;
    //     return this.http.get<any[]>(apiUrl);
    // }

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

    // Implement pagination for artworks (you can pass page and limit parameters to the API)
    // getArtworksByPage(page : number, limit : number): Observable < any[] > { // Replace this URL with the actual API endpoint
    //     const apiUrl = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`;
    //     return this.http.get<any[]>(apiUrl);
    // }

    // Handle API errors
    // private handleError(error : any): Observable < any > {
    //     console.error('API Error:', error);
    //     return of([]);
    // }

    // Get Image Url
    getImageUrl(imageId : string) {
        const iiifBaseUrl = 'https://www.artic.edu/iiif/2';
        // console.log(imageId)
        const imageUrl = `${iiifBaseUrl}/${imageId}/full/843,/0/default.jpg`;
        // console.log('Constructed Image Url:', imageUrl);
        return imageUrl;
    }
}
