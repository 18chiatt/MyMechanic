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
		makeModel: "2009 Suzuki Arrow",
		customerPhone: "8019891347",
		service:
			"Due to the front-end collission your vehicle was involved in, much of your vehicles front will need to be replaced.\n\nAs you can see in the pictures, the hood is severely bent and presents a safety issue by blocking your lower visibility.  Replacing this will be at least $300 for the hood and another $50 for installation.\n\nWe will also need to replace your front right headlight, because the shattered enclosure means water damage will damage your cars electronics and disable the headlight.  This will be another $250, including installaiton. \n\nFinally, we will need to repair a lot of miscellaneous parts, including: the radiator, the radiator bracket, your horn, and 6 other small pieces.\n\n",
		id: "asdfasdfasdfsuzuki",
		cost: "1500.23",
		images: ["https://i.imgur.com/WxZdzkL.jpg", "https://i.imgur.com/GO3tn2T.jpg", "https://i.imgur.com/mV4QBeZ.jpg"],
	},

	{
		makeModel: "2014 Toyota Corolla",
		customerPhone: "8019891347",
		service:
			"As we discussed over the phone, your car is going to need some serious work before it is ready go back on the road.  As you can see in the pictures, your bumper is no longer attached to your car.  Putting a new bumper on would be easy, but your bumper is damaged to the point of no return.\n\nWe will also need to replace your hood and front right quarter pannel.  These items were bent in the impact and no longer align properly.\n\nFinally, we will need to replace your anti-lock brake system (ABS) due to a puncture in the compressor.",
		id: "zzzgggToyota",
		cost: "3500.23",
		images: ["https://i.imgur.com/7mJY1sq.jpg", "https://i.imgur.com/YsM0eTZ.jpg"],
	},

	{
		makeModel: "2002 Toyota Camry",
		customerPhone: "8019891347",
		service:
			"Your car has various bumps/scrapes on it which we will need to repair.\n\nFirstly, we will have to replace both your trunk and rear quarter panel.  These replacements will be $400 including labor. Not only will we have to purchase the parts, but we will also have to find parts which isn't particularly easy for a car of this age.\n\nWe will also be addressing the scrapes all over your car with premium paint touchup.  This treatment comes to $99.86",
		id: "toyotaCamry",
		cost: "642.50",
		images: ["https://i.imgur.com/okIBYw0.jpg", "https://i.imgur.com/fCOTBXA.jpg", "https://i.imgur.com/Hj1iN4p.jpg"],
	},

	{
		makeModel: "2006 Mazda 3",
		customerPhone: "8019891347",
		service:
			"The wheels are very bent in, so we will need to order new ones.  This would normally cost around $300, but we can get you some matching rims for just $70 \n\nThere is a recall out for your vehicle's front airbag, so we will be fixing tha for you today free of charge\n\nAdditionally, the headlights are fogged over, so they will need to be cleaned, this will cost another $35.\n\nFinal tools fees come to $10.22 for a total of $115.22",
		id: "123asdf",
		cost: "115.22",
		images: ["https://i.imgur.com/IXfdDAy.jpg", "https://i.imgur.com/mekqN34.jpg", "https://i.imgur.com/CiARcHu.jpg"],
	},

	{
		makeModel: "2012 Honda Fit",
		customerPhone: "8019891347",
		service:
			"We will by addressing the bumps and scrapes in your vehicle's body work.  While there isn't much damage, not all of it can be easily repaired.  We will need to purchase a new front bumper and rear quarter panel to get your car back into top shape.",
		id: "hondaFit",
		cost: "349.12",
		images: [
			"https://i.imgur.com/wayuNaw.jpg",
			"https://i.imgur.com/xMavTTe.jpg",
			"https://i.imgur.com/adrGnPW.jpg",
			"https://i.imgur.com/ny8ubDa.jpg",
		],
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
];
