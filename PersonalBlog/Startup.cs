using AutoMapper;
using Business.Abstract;
using Business.Concrete;
using Business.Mapper;
using Core.Entities.Concrete;
using Core.Utilities;
using DataAccess.Abstract;
using DataAccess.Concrete.Contexts;
using DataAccess.Concrete.EntityFramework;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System;
using PersonalBlog.Extensions;
using PersonalBlog.Seeds;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;

namespace PersonalBlog
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(typeof(MappingProfile));

            services.AddScoped<IBlogDal, EfBlogDal>();
            services.AddScoped<IBlogService, BlogManager>();
            services.AddScoped<ICategoryDal, EfCategoryDal>();
            services.AddScoped<ICategoryService, CategoryManager>();
            services.AddScoped<IAccountService, AccountManager>();

            services.AddTransient<UserManager<ApplicationUser>>();
            services.AddTransient<SignInManager<ApplicationUser>>();

            services.AddDbContext<ApplicationIdentityContext>(opt => opt.UseSqlServer(@"Server=arya.veridyen.com\MSSQLSERVER2016;Database=bilelim;User Id=myyilmaz_admin;Password=Bilelimadmin1;"));
            services.AddDbContext<BlogContext>(opt => opt.UseSqlServer(@"Server=arya.veridyen.com\MSSQLSERVER2016;Database=bilelim;User Id=myyilmaz_admin;Password=Bilelimadmin1;"));
            
            services.AddIdentity<ApplicationUser, IdentityRole>().AddErrorDescriber<IdentityErrorDescriberTurkish>().AddEntityFrameworkStores<ApplicationIdentityContext>().AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(opt =>
            {
                opt.User.RequireUniqueEmail = true;
                opt.SignIn.RequireConfirmedEmail = true;
                opt.Password.RequireNonAlphanumeric = false;
                opt.Lockout.MaxFailedAccessAttempts = 3;
                opt.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromSeconds(30);
            });

            services.ConfigureApplicationCookie(conf =>
            {
                conf.LoginPath = "/admin";
                conf.LogoutPath = "/";
                conf.SlidingExpiration = true;
                conf.AccessDeniedPath = "/notfound";
                conf.ExpireTimeSpan = TimeSpan.FromHours(24);
                conf.Cookie = new CookieBuilder { HttpOnly = true, Name = "Identity", SameSite = SameSiteMode.Strict };
            });

            services.AddControllersWithViews().AddRazorRuntimeCompilation();

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, UserManager<ApplicationUser> userManager, ILogger<Startup> logger)
        {
            var tety = env.IsDevelopment();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseStatusCodePagesWithRedirects("/Error/{0}");
            }

            app.ConfigureExceptionHandler(logger);

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });

            SeedIdentity.Seed(userManager).Wait();
        }
    }
}
