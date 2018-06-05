import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
	// Url of the Identity Provider
	issuer: 'https://dev-823416.oktapreview.com/oauth2/default',

	// URL of the SPA to redirect the user to after login
	redirectUri: window.location.origin,

	// The SPA's id. The SPA is registerd with this id at the auth-server
	clientId: '0oafbd1v49olko5cY0h7',

	// set the scope for the permissions the client should request
	scope: 'openid profile email',

	sessionChecksEnabled: true
}

//test credentials
//un: testuser@testme.com
//pw: Test1234