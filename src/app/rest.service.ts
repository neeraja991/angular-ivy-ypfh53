import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { employees } from "./employees";
@Injectable({
  providedIn: "root"
})
export class RestService {
  constructor(private http: HttpClient) {}
  url: string =
    "https://run.mocky.io/v3/8ce14a10-3912-453e-b642-1b7b24e3f1cd/employees";
  getUsers() {
    console.log(this.url);
    return this.http.get<employees[]>(this.url);
  }
}
