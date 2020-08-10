import { OidcConfigService, LogLevel } from 'angular-auth-oidc-client';

export function configureAuth(oidcConfigService: OidcConfigService) {
    return () =>
      oidcConfigService.withConfig({
        clientId: 'angular',
        stsServer: 'https://localhost:32768',
        responseType: 'code',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        scope: 'openid profile Orders Categories Ocelot Products',
        logLevel: LogLevel.Error,
      });
  }
  