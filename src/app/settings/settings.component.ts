import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Settings, SettingsService } from "../settings.service";
import { take } from "rxjs/operators";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { ProfileService } from "../profile.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
	selector: "app-settings",
	templateUrl: "settings.component.html",
	styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
	constructor(
		private _settings: SettingsService,
		private _login: LoginService,
		private _router: Router,
		private profile: ProfileService,
		private _snackBar: MatSnackBar
	) {}
	profilePic: string | null = null;
	profileName: string | null = null;
	customerTextsControl = new FormControl(null);
	textsControl = new FormControl(null);
	group = new FormGroup({ texts: this.textsControl, customerTexts: this.customerTextsControl });
	usernameControl: FormControl = new FormControl(this.profile.getName());

	ngOnInit() {
		this.profilePic = this.profile.getImage();
		this.profileName = this.profile.getName();
		this._settings
			.getSettings()
			.pipe(take(1))
			.subscribe((newSettings) => {
				this.customerTextsControl.setValue(newSettings.customerTexts);
				this.textsControl.setValue(newSettings.texts);
			});

		this.customerTextsControl.valueChanges.subscribe((newVal) => {
			this.declareChangesSaved();
			this._settings.setSettings(this.group.getRawValue());
		});

		this.textsControl.valueChanges.subscribe((newVal) => {
			this.declareChangesSaved();
			this._settings.setSettings(this.group.getRawValue());
		});
	}

	declareChangesSaved() {
		setTimeout(() => {
			this._snackBar.open("Saved Changes", "Dismiss", { duration: 2009, panelClass: "higher-snack-bar" });
		}, 300);
	}

	logout() {
		this._login.logout();
		setTimeout(() => {
			this._router.navigate(["/login"]);
		}, 200);
	}

	addImage(x: Event) {
		const files = (x?.target as any).files;
		const reader = new FileReader();
		reader.onload = (result: any) => {
			this.profile.setImage(result.target.result as string);
			this.profilePic = this.profile.getImage();
			this.declareChangesSaved();
		};
		if (!files.length) {
			return;
		}
		reader.readAsDataURL(files[0]);
	}

	saveUsername() {
		const newName = this.usernameControl.value;
		this.profile.setName(newName);
		this.profileName = this.profile.getName();
		this.declareChangesSaved();
	}
}
