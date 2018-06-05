import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './shared';

const appRoutes: Routes = [
	{ path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
	{ path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	declarations: [
		AppComponent,
		SearchComponent,
		EditComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		FormsModule,
		HttpClientModule,
		OAuthModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
