using DataAccess.Abstract;
using DataAccess.Concrete.Contexts;
using Entities.Concrete;
using Entities.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfBlogDal : EfEntityRepository<Blog>, IBlogDal
    {
        public EfBlogDal(BlogContext context) : base(context)
        {
        }

        //Required for 2 step blog adding procedure
        public async Task<int> GetLatestBlogId()
        {
            return await _context.Blogs.OrderByDescending(i => i.BlogId).Select(i => i.BlogId).FirstOrDefaultAsync();
        }

        public async Task<int> GetBlogCount()
        {
            int count = await _context.Blogs.Where(i => i.IsPublished).CountAsync();
            return count;
        }

        public async Task DeleteImage(int blogImageId)
        {
            var imageToDelete = await _context.Images.FirstOrDefaultAsync(i => i.BlogImageId == blogImageId);
            _context.Images.Remove(imageToDelete);
            await _context.SaveChangesAsync();
        }
    }
}
