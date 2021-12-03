import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LoginService {
	private isLoggedIn: boolean = false;
	constructor() {
		this.isLoggedIn = localStorage.getItem("isLoggedIn") ? true : false;
	}

	public getLoggedIn() {
		return this.isLoggedIn;
	}

	public login() {
		localStorage.setItem("isLoggedIn", "True");
	}

	public logout() {
		localStorage.removeItem("isLoggedIn");
	}
}
