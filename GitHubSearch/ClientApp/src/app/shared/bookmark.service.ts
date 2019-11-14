import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Bookmark } from '../models/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

    constructor(private http: HttpClient) { }

    loadData(): Observable<Bookmark[]> {
        return this.http.get<Bookmark[]>(`${environment.baseUrl}/api/bookmark`).pipe(
            tap(x => {
                console.log(x);
            }),
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }

    save(bookmark) {
        const bookmarkToSave = {
            id: bookmark.id,
            name: bookmark.name,
            ownerAvatarUrl: bookmark.owner.avatar_url,
            htmlUrl: bookmark.html_url
        }
        return this.http.post(`${environment.baseUrl}/api/bookmark`, bookmarkToSave);
    }

    delete(bookmark: Bookmark) {
        return this.http.delete(`${environment.baseUrl}/api/bookmark/${bookmark.id}`);
    }
}
