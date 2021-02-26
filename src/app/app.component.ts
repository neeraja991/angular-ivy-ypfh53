import { Component, OnInit } from "@angular/core";
import { employees } from "./employees";
import { RestService } from "./rest.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Hello";

  constructor(private rs: RestService, private http: HttpClient) {}
  private data: any = [];
  columns = ["Name", "Expertisefield", "CountryofBirth", "DOJ", "id"];
  index = ["Name", "Expertisefield", "CountryofBirth", "DOJ", "id"];

  employees: employees[] = [ {
      "Name": "Marco Jeet",
      "Expertisefield": "Developer",
      "CountryofBirth": "Canada",
      "DOJ": "10/12/2015",
      "id": 3456788
    },
    {
      "Name": "spark Juan ",
      "Expertisefield": "Enginner",
      "CountryofBirth": "UK",
      "DOJ": "09/21/2018",
      "id": 234567
    },
    {
      "Name": "Jhon Smith",
      "Expertisefield": "UI developer",
      "CountryofBirth": "Denmark",
      "DOJ": "03/21/2016",
      "id": 23456032
    },
    {
      "Name": "Alxendero John",
      "Expertisefield": "Enginner",
      "CountryofBirth": "Mexico",
      "DOJ": "11/12/2019",
      "id": 3456712
    },
    {
      "Name": "Xing Wang",
      "Expertisefield": "Visual Designer",
      "CountryofBirth": "China",
      "DOJ": "01/28/2007",
      "id": 2345612
    },
    {
      "Name": "Wang Math",
      "Expertisefield": "React developer",
      "CountryofBirth": "USA",
      "DOJ": "01/27/2007",
      "id": 2345609
    },
    {
      "Name": "Charlie Smith",
      "Expertisefield": "React developer",
      "CountryofBirth": "France ",
      "DOJ": "01/26/2007",
      "id": 23456703
    }];

  ngOnInit(): void {}

  getData() {
    
  }
}
