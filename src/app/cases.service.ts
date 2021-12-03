import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class CaseService {
	currCases = cases;
	private casesObservable = new BehaviorSubject<any>(this.currCases);
	constructor() {}

	public getCases(): Observable<Case[]> {
		return this.casesObservable;
	}

	public addCase(currCase: Case) {
		this.currCases.unshift(currCase);
		this.casesObservable.next(this.currCases);
	}

	public updateCase(currCase: Case) {
		console.log(currCase, this.currCases);
		this.currCases = [currCase, ...this.currCases.filter((curr) => curr.id !== currCase.id)];
		this.casesObservable.next(this.currCases);
	}
}

export interface Case {
	makeModel: string;
	customerPhone: string;
	service: string;
	images: string[];
	id: string;
	cost: string;
}

const cases: Case[] = [
	{
		makeModel: "2008 Ford Focus",
		customerPhone: "801-989-1347",
		service:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui. Mi sit amet mauris commodo quis imperdiet massa. Porttitor massa id neque aliquam vestibulum morbi blandit.",
		id: "1234",
		images: [
			"https://i.imgur.com/bPO4U0A.png",
			"https://images.unsplash.com/photo-1593142927747-8c1b758967a6",
			"https://i.ytimg.com/vi/IqoetbEUqoQ/maxresdefault.jpg",
		],
		cost: "225.22",
	},
	{
		makeModel: "2019 Ford Mustang",
		customerPhone: "801-989-1357",
		service:
			"The Supercharger is failing prematurely, likely due to poor oil circulation through the head gasket.  We will need to replace the blinker fluid and upgrade the dipstick to be short throw",
		id: "123123",
		images: [
			"https://www.dpccars.com/blog/wp-content/uploads/2018/08/Ford-EksoVest-700x325.jpg",
			"https://www.mustang6g.com/forums/attachments/4be615b0-f5af-4e02-be19-f79b8ab4d10a-jpeg.347045/",
			"https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2020/07/22175734/16_rr_integral_link.jpg.jpg",
		],
		cost: "865.23",
	},
];
