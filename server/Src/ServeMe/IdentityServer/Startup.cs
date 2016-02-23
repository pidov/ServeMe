using IdentityServer.Config;
using IdentityServer3.Core.Configuration;
using Owin;
using System;
using System.Security.Cryptography.X509Certificates;

namespace IdentityServer
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Map("/identity", idsrvApp =>
            {
                var idServerServiceFactory = new IdentityServerServiceFactory()
                .UseInMemoryClients(Clients.Get())
                .UseInMemoryScopes(Scopes.Get())
                .UseInMemoryUsers(Users.Get());

                var options = new IdentityServerOptions
                {
                    Factory = idServerServiceFactory,
                    SiteName = "IdentityServer Security Token Service",
                    IssuerUri = "https://serveme/identity",
                    PublicOrigin = "https://localhost:44300",
                    SigningCertificate = LoadCertificate()
                };

                idsrvApp.UseIdentityServer(options);
            });
        }

        private X509Certificate2 LoadCertificate()
        {
            return new X509Certificate2(
                string.Format(@"{0}\certificates\idsrv3test.pfx",
                AppDomain.CurrentDomain.BaseDirectory), "idsrv3test");
        }
    }
}