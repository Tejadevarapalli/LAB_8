import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public info: object ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  myinfo()
{
  const token = localStorage.getItem('authtoken');
  console.log(token);
  const headers = new HttpHeaders().set('authtoken', token);
  this.http.get('http://localhost:3000/api/posts', {headers} ).subscribe( data => {
    this.info = data;
    console.log(data);
  });

}
}
