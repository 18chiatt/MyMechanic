import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Case, CaseService } from "../cases.service";

@Component({
	selector: "app-home",
	templateUrl: "home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	constructor(private _case: CaseService, private _router: Router) {}
	public cases: Case[] = [];
	ngOnInit() {
		this._case.getCases().subscribe((newCases) => {
			this.cases = newCases;
		});
	}

	editTo(currCase: Case) {
		this._router.navigate(["/create/" + currCase.id]);
	}
}
