using Microsoft.AspNetCore.Identity;

namespace Core.Entities.Concrete
{
    public class ApplicationUser : IdentityUser
    {
        public string ProfileImageUrl { get; set; }
        public string FullName { get; set; }
        public string RoleName { get; set; }
        public string Summary { get; set; }
    }
}
