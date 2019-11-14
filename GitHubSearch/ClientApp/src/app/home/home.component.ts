import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { BookmarkService } from '../shared/bookmark.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    query = '';
    searchResults: Array<Item> = [];

    constructor(private searchService: SearchService,
                private bookmarkService: BookmarkService) { }

    ngOnInit(): void {
        
    }

    search(): void {
        if (this.query != '') {

            this.searchService.search(this.query)
                .subscribe(result => {
                    this.searchResults = result.items;
                });
        }
    }

    saveToBookmarks(event: Event, item): void {

        if (item.isBookmark) {
            item.isBookmark = false;

            (<HTMLButtonElement>event.target).innerText = 'Save to bookmarks';

            this.bookmarkService.delete(item)
                .subscribe(result => { });
        } else {
            item.isBookmark = true;

            (<HTMLButtonElement>event.target).innerText = 'Remove from bookmarks';

            this.bookmarkService.save(item)
                .subscribe(result => { });
        }
    }
}
