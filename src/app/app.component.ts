import { Component } from '@angular/core';
//import { bookservice } from './menu/book.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { Response } from 'selenium-webdriver/http';
import { BookService } from './book.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'title will be shown here :-';
  Description='Description';
  n:String='9789000035526'

  array:any=[];


constructor(private http:HttpClient, private service:BookService){




}
get(){
  var url='https://www.booknomads.com/api/v0/isbn/'+this.n;

this.service.get(url).subscribe((data:Response)=>{
  this.array=data;
console.log(data);
}
);


}

}
