using System.Threading.Tasks;
using Core.Entities.Concrete;
using Microsoft.AspNetCore.Identity;

namespace PersonalBlog.Seeds
{
    public static class SeedIdentity
    {
        public static async Task Seed(UserManager<ApplicationUser> userManager)
        {
            if (await userManager.FindByNameAsync("admin") == null)
            {
                var admin = new ApplicationUser
                {
                    UserName = "admin",
                    Email = "admin@bilelim.com",
                    EmailConfirmed = true,
                    FullName = "Bilelim Admin",
                    RoleName = "admin",
                    ProfileImageUrl = "/img/uploads/profile-icon.jpg"
                };

                await userManager.CreateAsync(admin, "Bilelimadmin1");
            }
        }
    }
}