﻿using System;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using ProductsApi.Models;

[assembly: OwinStartup(typeof(ProductsApi.Startup1))]

namespace ProductsApi
{
    public class Startup1
    {

        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
            app.UseCors(CorsOptions.AllowAll);

            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

            app.UseOAuthAuthorizationServer(new OAuthAuthorizationServerOptions()
            {
                TokenEndpointPath = new PathString("/login"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60.0),
                AllowInsecureHttp=true,
                Provider=new TokenCreate()
            });

            HttpConfiguration config = new HttpConfiguration();
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                "DefaultApi", "api/{controller}/{id}",
                new { Id = RouteParameter.Optional });
            app.UseWebApi(config);
            config.Routes.MapHttpRoute(
                "DefaultRoute", "api/{controller}/{id}",
                new { Id = RouteParameter.Optional });
            app.UseWebApi(config);
        }
    }

    internal class TokenCreate : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add(" Access - Control - Allow - Origin ", new[] { "*" });

            UserStore<IdentityUser> store = new UserStore<IdentityUser>(new DataContext());
            UserManager<IdentityUser> manager = new UserManager<IdentityUser>(store);
            IdentityUser user=await manager.FindAsync(context.UserName,context.Password);
            if(user==null)
            {
                context.SetError("Grant error", "User name and password error");
            }    
            else
            {
                ClaimsIdentity claims = new ClaimsIdentity(context.Options.AuthenticationType);
                claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
                claims.AddClaim(new Claim(ClaimTypes.Name, user.UserName));
                if (manager.IsInRole(user.Id,"Admin"))
                {
                    claims.AddClaim(new Claim(ClaimTypes.Role,"Admin"));
                }
                context.Validated(claims);
            }
        }
    }
}
