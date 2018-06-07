import { Injectable } from "@angular/core";
import { IMovie } from "./movie";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class MovieService {
    private _movieUrl = 'http://webjetapitest.azurewebsites.net/api/filmworld/movies';
    private _headers = new HttpHeaders().set('x-access-token', 'sjd1HfkjU83ksdsm3802k');
    constructor(private _http:HttpClient){

    }
    getMovies(): Observable<IMovie[]>{
        const Headers = this._headers;
        return this._http.get<IMovie[]>(this._movieUrl,{ headers : Headers })
        .do(data => console.log('All'+JSON.stringify(data)))
        .catch(this.handleError);
    }
    handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}