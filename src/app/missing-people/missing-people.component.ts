import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-missing-people',
  templateUrl: './missing-people.component.html',
  styleUrls: ['./missing-people.component.css']
})
export class MissingPeopleComponent implements OnInit {

  constructor(private http: HttpClient) { }
missingPeople:any=[];
headers= new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*');
 

  ngOnInit(): void {
    this.getMissingPeople();
  }
  getMissingPeople(){
    this.http.get('https://crimereporterapp.herokuapp.com/missingPeopleApi/getAllMissingPeople',{ 'headers': this.headers }).subscribe((data)=>{
      for(let key in data){
        if (data.hasOwnProperty(key))
          this.missingPeople.push(data[key]);
      }
    })
  }

}
