import { Component, NgZone, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { delay, take } from "rxjs/operators";
import { Case, CaseService } from "../cases.service";
import { ProfileService } from "../profile.service";

@Component({
	selector: "app-view",
	templateUrl: "view.component.html",
	styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
	constructor(
		private _route: ActivatedRoute,
		private _case: CaseService,
		private _zone: NgZone,
		private _profile: ProfileService
	) {}
	myCase?: Case | null = null;
	image: string = this._profile.getImage();

	ngOnInit() {
		const id = this._route.snapshot.paramMap.get("id");
		this._case
			.getCases()
			.pipe(take(1))
			.pipe(delay(500))
			.subscribe((newCases) => {
				this._zone.run(() => {
					this.myCase = newCases.find((curr) => curr.id == id) || null;
					console.log(this.myCase);
				});
			});
	}
}
