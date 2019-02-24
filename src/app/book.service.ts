import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

a:any=9789000035526;

constructor(private http:HttpClient) { }

get(url:any)
{

return this.http.get(url);

}
}

