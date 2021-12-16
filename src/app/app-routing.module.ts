import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
	{
		path: "home",
		component: HomeComponent,
	},

	{
		path: "create",
		component: CreateComponent,
	},

	{
		path: "create/:editID",
		component: CreateComponent,
	},
	{
		path: "settings",
		component: SettingsComponent,
	},

	{
		path: "login",
		component: LoginComponent,
	},

	{
		path: "view/:id",
		component: ViewComponent,
	},

	{
		path: "**",
		redirectTo: "home",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
