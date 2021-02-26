import { Component, OnInit } from "@angular/core";
//import { Employees } from "./Employees";
import { RestService } from "./rest.service";

interface Employees {
  Name: String;
  Expertisefield: String;
  CountryofBirth: String;
  DOJ: String;
  id: Number;
}
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Hello";

  constructor(private rs: RestService) {}
  private data: any = [];
  columns = ["Name", "Expertisefield", "CountryofBirth", "DOJ", "id"];
  index = ["Name", "Expertisefield", "CountryofBirth", "DOJ", "id"];

  employees: Employees[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe(
      response => {
        this.employees = response;
        console.log(response+"employess");
      },
      error => console.log(error)
    );
  }

  getData() {}
}
