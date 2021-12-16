import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { windowWhen } from "rxjs/operators";
import { Case, CaseService } from "../cases.service";
import { LoginService } from "../login.service";
import { SnackService } from "../snack.service";

@Component({
	selector: "app-home",
	templateUrl: "home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	constructor(
		private _case: CaseService,
		private _router: Router,
		private _snack: SnackService,
		private _login: LoginService
	) {}
	public cases: Case[] = [];
	ngOnInit() {
		this._case.getCases().subscribe((newCases) => {
			this.cases = newCases;
		});

		// if (!this._login.getLoggedIn()) {
		// 	this._router.navigate(["/login"]);
		// }
	}

	editTo(currCase: Case) {
		this._router.navigate(["/create/" + currCase.id]);
	}

	customerView(currCase: Case) {
		this._router.navigate(["/view/", currCase.id]);
	}

	copyLink(currCase: Case) {
		return window.location.href.split("/home")[0] + "/view/" + currCase.id;
	}

	announce() {
		this._snack.displaySnack("Copied Successfully");
	}

	openDialog(image: string) {}
}
