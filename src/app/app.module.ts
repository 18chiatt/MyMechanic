import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateComponent } from "./create/create.component";
import { MatInputModule } from "@angular/material/input";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { SettingsComponent } from "./settings/settings.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { LoginComponent } from "./login/login.component";

@NgModule({
	declarations: [AppComponent, HomeComponent, CreateComponent, SettingsComponent, LoginComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		CommonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		FormsModule,
		MatInputModule,
		IvyCarouselModule,
		MatSlideToggleModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
