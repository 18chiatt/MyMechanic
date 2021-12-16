import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: "root" })
export class SnackService {
	constructor(private _snack: MatSnackBar) {}

	public displaySnack(prompt: string, duration: number = 2000) {
		this._snack.open(prompt, "Dismiss", { duration: duration, panelClass: "higher-snack-bar" });
	}
}
