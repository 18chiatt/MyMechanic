import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "my-mechanic";
	showFooter: boolean = true;
	constructor(private _login: LoginService, private _router: Router, private _route: ActivatedRoute) {}
	ngOnInit() {
		if (!this._login.getLoggedIn()) {
			this._router.navigate(["/login"]);
		}

		this._router.events.subscribe((newEvent) => {
			this.showFooter = !window.location.href.includes("/login");
		});
	}
}
