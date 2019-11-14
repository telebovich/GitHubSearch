import { Component, OnInit } from "@angular/core";
import { BookmarkService } from "../shared/bookmark.service";
import { Bookmark } from "../models/bookmark";

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmark.component.html',
})
export class BookmarkComponent implements OnInit {

    result: Array<Bookmark> = [];

    constructor(private bookmarkService: BookmarkService) {

    }

    ngOnInit(): void {
        this.databind();
    }

    remove(bookmark: Bookmark): void {
        this.bookmarkService.delete(bookmark)
            .subscribe(result => {
              this.databind();
            });
    }

    databind(): void {
        this.bookmarkService.loadData()
            .subscribe(result => {
              this.result = result;
            });
    }
}
