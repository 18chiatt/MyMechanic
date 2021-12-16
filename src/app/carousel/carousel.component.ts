import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./dialog/dialog.component";

@Component({
	selector: "app-carousel-mechanic",
	templateUrl: "carousel.component.html",
})
export class CarouselComponent implements OnInit {
	constructor(private _dialog: MatDialog) {}
	@Input() images: string[] = [];

	ngOnInit() {}

	openDialog(image: string) {
		this._dialog.open(DialogComponent, { data: { image }, panelClass: "no-padding-dialog" });
	}
}
