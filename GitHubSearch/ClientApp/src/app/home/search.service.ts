import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { GitHubResult } from '../models/githubresult';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) { }

    search(query: string): Observable<GitHubResult> {
        return this.http.get<GitHubResult>(`https://api.github.com/search/repositories?q=${query}`)
            .pipe(
              tap(x => {
                console.log(x);
              }),
              catchError(error => {
                console.log(error);
                return of(null);
              })
        );
    }
}
