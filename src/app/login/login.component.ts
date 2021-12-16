import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
	selector: "app-login",
	templateUrl: "login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	constructor(private _login: LoginService, private _router: Router) {}

	ngOnInit() {}

	login() {
		this._login.login();
		setTimeout(() => {
			this._router.navigate(["/home"]);
		}, 200);
	}
}
