import {Component} from '@angular/core';
import {ArtworkService} from '../artwork.service';
import {WishlistService} from '../wishlist.service';
import {ActivatedRoute} from '@angular/router';

@Component({selector: 'app-details', templateUrl: './details.component.html', styleUrls: ['./details.component.css']})
export class DetailsComponent {
    artwork : any;

    constructor(public artworkService : ArtworkService, private wishlistService : WishlistService, private route : ActivatedRoute) {}

    ngOnInit(): void { // Retrieve the artwork id
        const artworkIdParam = this.route.snapshot.paramMap.get('id');
        // Retrieve artwork details from your service or API.
        if (artworkIdParam !== null) {
            const artworkId = + artworkIdParam;
            console.log(artworkId);
            if (!isNaN(artworkId)) {
                this.artworkService.getArtworkById(artworkId).subscribe((res:any)=>{
                    this.artwork=res.data;
                })
            } else {
                console.error("Invalid artwork ID");
            }
        } else {
            console.error("Artwork ID id missing");
        }
    }

    addToWishlist(artwork : any) {
        this.wishlistService.addToWishlist(artwork);
    }
}
