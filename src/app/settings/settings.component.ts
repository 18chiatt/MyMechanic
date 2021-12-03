import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Settings, SettingsService } from "../settings.service";
import { take } from "rxjs/operators";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-settings",
	templateUrl: "settings.component.html",
	styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
	constructor(private _settings: SettingsService, private _login: LoginService, private _router: Router) {}

	customerTextsControl = new FormControl(null);
	textsControl = new FormControl(null);
	group = new FormGroup({ texts: this.textsControl, customerTexts: this.customerTextsControl });

	ngOnInit() {
		this._settings
			.getSettings()
			.pipe(take(1))
			.subscribe((newSettings) => {
				this.customerTextsControl.setValue(newSettings.customerTexts);
				this.textsControl.setValue(newSettings.texts);
			});

		this.customerTextsControl.valueChanges.subscribe((newVal) => {
			this._settings.setSettings(this.group.getRawValue());
		});

		this.textsControl.valueChanges.subscribe((newVal) => {
			this._settings.setSettings(this.group.getRawValue());
		});
	}

	logout() {
		this._login.logout();
		setTimeout(() => {
			this._router.navigate(["/login"]);
		}, 200);
	}
}
