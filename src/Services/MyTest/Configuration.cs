using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthIdentityServer
{
    public static class Configuration
    {
        public static IEnumerable<ApiResource> GetResources() => new List<ApiResource> {
            new ApiResource("Products"),
            new ApiResource("Categories"),
            new ApiResource("Orders"),
            new ApiResource("Ocelot")
        };

        public static IEnumerable<IdentityResource> GetIdentityResources() => new List<IdentityResource> {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile()
        };

        public static IEnumerable<Client> GetClients() => new List<Client> {
            new Client {
                ClientId="client_id_mvc",
                ClientSecrets={new Secret ("client_secret_mvc".ToSha256()) },
                AllowedGrantTypes=GrantTypes.Code,
                AllowedScopes={
                     "Orders",
                     "Categories",
                     IdentityServerConstants.StandardScopes.OpenId,
                     IdentityServerConstants.StandardScopes.Profile
                 },
                RedirectUris={ "https://localhost:5001/signin-oidc" },
                PostLogoutRedirectUris={ "https://localhost:5001/Home" },
                AllowOfflineAccess = true,
                RequireConsent = false,
            },
              new Client {
                    ClientId = "angular",
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,
                    RequireClientSecret = false,

                    RedirectUris = { "http://localhost:4200" },
                    PostLogoutRedirectUris = { "http://localhost:4200" },

                    AllowedScopes = {
                        IdentityServerConstants.StandardScopes.OpenId,
                        "Orders",
                        "Categories",
                        "Ocelot",
                        "Products"
                    },

                    AllowAccessTokensViaBrowser = true,
                    RequireConsent = false,
                },
        };

    }
}
