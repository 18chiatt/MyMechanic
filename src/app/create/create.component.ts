import { Component, NgModule, NgZone, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Case, CaseService } from "../cases.service";
import { v4 as uuidv4 } from "uuid";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-create",
	templateUrl: "create.component.html",
	styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
	constructor(
		private _zone: NgZone,
		private _cases: CaseService,
		private _route: ActivatedRoute,
		private _router: Router
	) {}
	makeModelControl = new FormControl(null, Validators.required);
	phoneNumberControl = new FormControl(null, Validators.required);
	serviceRecommendationControl = new FormControl(null, Validators.required);
	quoteCostControl = new FormControl(null, Validators.required);
	id: string = uuidv4();

	group = new FormGroup({
		makeModel: this.makeModelControl,
		customerPhone: this.phoneNumberControl,
		service: this.serviceRecommendationControl,
		cost: this.quoteCostControl,
	});
	images: any[] = [];
	creatingNew: boolean = true;
	pulse: boolean = false;
	ngOnInit() {
		// load data if available
		if (this._route.snapshot.paramMap.get("editID")) {
			this.creatingNew = false;
			const id = this._route.snapshot.paramMap.get("editID");
			this._cases.getCases().subscribe((newV) => {
				const theOne = newV.find((curr) => curr.id === id);
				if (!theOne) {
					throw new Error();
				}
				this.images = theOne.images;
				this.makeModelControl.setValue(theOne.makeModel);
				this.phoneNumberControl.setValue(theOne.customerPhone);
				this.serviceRecommendationControl.setValue(theOne.service);
				this.quoteCostControl.setValue(theOne.cost);
				this.id = theOne.id;
			});
		}
	}

	addImage(x: Event) {
		const files = (x?.target as any).files;
		const reader = new FileReader();
		reader.onload = (result) => {
			this._zone.run(() => {
				this.images.unshift(result?.target?.result);
				this.doPulse();
			});
		};
		if (!files.length) {
			return;
		}
		reader.readAsDataURL(files[0]);
	}

	doPulse() {
		this.pulse = true;
		setTimeout(() => {
			this._zone.run(() => {
				this.pulse = false;
			});
		}, 100);
	}

	removeImage(toRemove: string) {
		this.images = this.images.filter((curr) => curr !== toRemove);
		this.doPulse();
	}

	submit() {
		const currCase: Case = this.group.getRawValue();
		currCase.images = this.images;
		currCase.id = this.id;
		if (!this.creatingNew) {
			this._cases.updateCase(currCase);
			this.goHome();
			return;
		}
		this._cases.addCase(currCase);
		this.goHome();
	}

	goHome() {
		this._router.navigate(["/home"]);
	}
}
