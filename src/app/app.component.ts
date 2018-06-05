import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	constructor(private oauthService: OAuthService) {
		this.configureWithNewConfigApi();
	}

	private configureWithNewConfigApi() {
		this.oauthService.configure(authConfig);
		this.oauthService.tokenValidationHandler = new JwksValidationHandler();
		this.oauthService.loadDiscoveryDocumentAndTryLogin();
	}
}
