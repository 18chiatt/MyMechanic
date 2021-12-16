import { Component, Inject, Input, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackService } from "../../snack.service";

@Component({
	selector: "app-image-dialog",
	templateUrl: "dialog.component.html",
})
export class DialogComponent implements OnInit {
	constructor(@Inject(MAT_DIALOG_DATA) public _ref: MatDialogRef<DialogComponent>, private _snack: SnackService) {}
	image: any = (this._ref as any).image;
	ngOnInit() {
		setTimeout(() => {
			if (localStorage.getItem("zoom-prompt")) {
				return;
			}
			localStorage.setItem("zoom-prompt", "True");
			this._snack.displaySnack("Double Tap to Zoom");
		}, 300);
	}
}
