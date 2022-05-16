import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  addUser(name: string) {
    let listUser = this.users.value;
    listUser.push(name);
    this.users.next(listUser);
  }
  constructor() {}
}
