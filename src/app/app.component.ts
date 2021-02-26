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

  employees: employees[] = [];

  ngOnInit(): void {}

  getData() {
    
  }
}
