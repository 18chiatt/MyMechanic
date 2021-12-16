import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ProfileService {
	constructor() {}

	private name: string = "Michael Anderson";
	private image: string = "https://i.imgur.com/JfnU3a9.png";

	public getName() {
		return this.name;
	}

	public getImage() {
		return this.image;
	}

	public setImage(image: string) {
		this.image = image;
	}

	public setName(name: string) {
		this.name = name;
	}
}
