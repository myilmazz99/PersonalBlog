using Entities.Concrete;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Concrete.Contexts
{
    public class BlogContext : DbContext
    {
        public BlogContext(DbContextOptions<BlogContext> opt) : base(opt)
        {
        }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<BlogImage> Images { get; set; }
    }
}
