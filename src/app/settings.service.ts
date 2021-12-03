import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class SettingsService {
	private settings = {
		texts: true,
		customerTexts: false,
	};
	private subject = new BehaviorSubject(this.settings);
	constructor() {}

	public getSettings() {
		return this.subject;
	}

	public setSettings(settings: Settings) {
		this.settings = settings;
		this.subject.next(this.settings);
	}
}

export interface Settings {
	texts: boolean;
	customerTexts: boolean;
}
