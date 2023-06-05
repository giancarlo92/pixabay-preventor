import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SearchResponse } from '../interfaces/searchResponse.interface';
import { Hit } from '../interfaces/Hit.interface';

@Injectable({
    providedIn: 'root'
})
export class TemasService {
    sinResultados = false;

    public hitList: Hit[] = [];
    public totalHits: number = 0;
    public searchInput: string = "";
    public pageIndex: number = 0;

    private apiKey: string = environment.API_KEY;
    private pixabayUrl: string = environment.API_URL;

    constructor(private http: HttpClient){}

    searchTag(tag: string, page: number, per_page: number):void{
        if (tag.length === 0) {
            return;
        }

        const params = new HttpParams()
        .set('key',this.apiKey)
        .set('q',tag)
        .set('image_type','photo')
        .set('page', page)
        .set('per_page', per_page)
        .set('lang', 'es')

        this.http.get<SearchResponse>(`${this.pixabayUrl}/`,{params})
            .subscribe(resp=>{
                this.hitList = resp.hits;
                this.totalHits = resp.totalHits;
                this.sinResultados = true;
            })

    }

}