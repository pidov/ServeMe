﻿using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;

namespace AspNetIdentity.WebApi.Infrastructure
{
    public class ApplicationUserManager : UserManager<ApplicationUser>
    {
        public ApplicationUserManager(IUserStore<ApplicationUser> store)
            : base(store)
        {
        }

        public static ApplicationUserManager Create(IdentityFactoryOptions<ApplicationUserManager> options, IOwinContext context)
        {
            var appDbContext = context.Get<ApplicationDbContext>();
            var appUserManager = new ApplicationUserManager(new UserStore<ApplicationUser>(appDbContext));

            // Configure validation logic for usernames 
            appUserManager.UserValidator = new UserValidator<ApplicationUser>(appUserManager)
            {
                RequireUniqueEmail = true
            };

            // Configure validation logic for passwords 
            appUserManager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 6,
                RequireNonLetterOrDigit = true,
                RequireDigit = false,
                RequireLowercase = true,
                RequireUppercase = true,
            };

            #region Email Confirmation 
            //appUserManager.EmailService = new EmailService();

            //var dataProtectionProvider = options.DataProtectionProvider;
            //if (dataProtectionProvider != null)
            //{
            //    appUserManager.UserTokenProvider = new DataProtectorTokenProvider<ApplicationUser>(dataProtectionProvider.Create("ASP.NET Identity"))
            //    {
            //        //Code for email confirmation and reset password life time 
            //        TokenLifespan = TimeSpan.FromHours(6)
            //    };
            //}
            #endregion Email Confirmation 

            return appUserManager;
        }
    }
}