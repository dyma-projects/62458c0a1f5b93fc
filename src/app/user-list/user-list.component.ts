import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];
  public subsciption: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subsciption.add(
      this.userService.users.subscribe((users: []) => (this.users = users))
    );
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }
}
