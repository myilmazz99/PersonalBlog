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

        public override async Task UpdateAsync(Blog entity)
        {
            _context.Blogs.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Blog>> GetAllForView(int page)
        {
            var blogs = await _context.Blogs
                .Where(i => i.IsPublished)
                .OrderByDescending(i => i.AddedDate)
                .Skip(page * 3)
                .Take(3)
                .Include(i => i.Comments)
                .Include(i => i.Category).ToListAsync();

            return blogs;
        }

        public async Task<Blog> GetByIdForView(int blogId)
        {
            var blog = await _context.Blogs
                            .Where(i => i.IsPublished && i.BlogId == blogId)
                            .Include(i => i.Comments)
                            .Include(i => i.Category)
                            .FirstOrDefaultAsync();

            return blog;
        }

        public async Task AddComment(Comment comment)
        {
            var blog = await _context.Blogs.Include(i => i.Comments).FirstOrDefaultAsync(i => i.BlogId == comment.BlogId);
            blog.Comments.Add(comment);
            await UpdateAsync(blog);
        }

        public async Task RemoveComment(Comment comment)
        {
            var blog = await _context.Blogs.Include(i => i.Comments).FirstOrDefaultAsync(i => i.BlogId == comment.BlogId);
            var comments = blog.Comments.Where(i => i.CommentId != comment.CommentId).ToList();
            blog.Comments = comments;
            await _context.SaveChangesAsync();
        }

        public async Task IncrementView(int blogId)
        {
            var blog = _context.Blogs.Find(blogId);
            blog.ViewCount += 1;
            await _context.SaveChangesAsync();
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

        public async Task<AddOrUpdateBlogDto> GetByIdWithImages(int blogId)
        {
            var blog = await _context.Blogs.Include(i => i.BlogImages).Include(i => i.Category).Where(i => i.BlogId == blogId).Select(i => new AddOrUpdateBlogDto
            {
                BlogId = i.BlogId,
                BlogImages = i.BlogImages,
                CategoryName = i.Category.CategoryName,
                Content = i.Content,
                Header = i.Header,
                MainImage = i.MainImage,
                CategoryId = i.CategoryId,
                IsPublished = i.IsPublished
            }).FirstOrDefaultAsync();

            return blog;
        }

        public async Task AddImages(AddOrUpdateBlogDto blog)
        {
            var blogToUpdate = await _context.Blogs.Include(i => i.BlogImages).FirstOrDefaultAsync(i => i.BlogId == blog.BlogId);
            blogToUpdate.BlogImages = blog.BlogImages;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteImage(int blogImageId)
        {
            var imageToDelete = await _context.Images.FirstOrDefaultAsync(i => i.BlogImageId == blogImageId);
            _context.Images.Remove(imageToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<BlogDto> GetAll()
        {
            var blogs = await _context.Blogs.Include(i => i.Category).ToListAsync();
            return new BlogDto(blogs);
        }
    }
}
