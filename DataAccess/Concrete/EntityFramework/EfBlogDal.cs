using Core.DataAccess.Concrete;
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
    public class EfBlogDal : EfEntityRepository<Blog, BlogContext>, IBlogDal
    {
        public override async Task UpdateAsync(Blog entity)
        {
            using var context = new BlogContext();
            context.Blogs.Update(entity);
            await context.SaveChangesAsync();
        }

        public async Task<List<Blog>> GetAllForView(int page)
        {
            using var context = new BlogContext();
            var blogs = context.Blogs
                .Where(i => i.IsPublished)
                .OrderByDescending(i => i.AddedDate)
                .Skip(page * 3)
                .Take(3)
                .Include(i => i.Comments)
                .Include(i => i.Category);

            return await blogs.ToListAsync();
        }

        public async Task<Blog> GetByIdForView(int blogId)
        {
            using var context = new BlogContext();
            var blog = await context.Blogs
                            .Where(i => i.IsPublished && i.BlogId == blogId)
                            .Include(i => i.Comments)
                            .Include(i => i.Category)
                            .FirstOrDefaultAsync();

            return blog;
        }

        public async Task<List<Blog>> GetLatestThree()
        {
            using var context = new BlogContext();
            return await context.Blogs
                        .Where(i => i.IsPublished)
                        .OrderByDescending(i => i.AddedDate)
                        .Take(3)
                        .Include(i => i.Comments)
                        .Include(i => i.Category).ToListAsync();
        }

        public async Task AddComment(Comment comment)
        {
            using var context = new BlogContext();
            var blog = await context.Blogs.Include(i => i.Comments).FirstOrDefaultAsync(i => i.BlogId == comment.BlogId);
            blog.Comments.Add(comment);
            await UpdateAsync(blog);
        }

        public async Task RemoveComment(Comment comment)
        {
            using var context = new BlogContext();
            var blog = await context.Blogs.Include(i => i.Comments).FirstOrDefaultAsync(i => i.BlogId == comment.BlogId);
            var comments = blog.Comments.Where(i => i.CommentId != comment.CommentId).ToList();
            blog.Comments = comments;
            await context.SaveChangesAsync();
        }

        public async Task IncrementView(int blogId)
        {
            using var context = new BlogContext();
            var blog = context.Blogs.Find(blogId);
            blog.ViewCount += 1;
            await context.SaveChangesAsync();
        }

        //Required for 2 step blog adding procedure
        public async Task<int> GetLatestBlogId()
        {
            using var context = new BlogContext();
            return await context.Blogs.OrderByDescending(i => i.BlogId).Select(i => i.BlogId).FirstOrDefaultAsync();
        }

        public async Task<int> GetBlogCount()
        {
            using var context = new BlogContext();
            return await context.Blogs.Where(i => i.IsPublished).CountAsync();
        }

        public async Task<AddOrUpdateBlogDto> GetByIdWithImages(int blogId)
        {
            using (var context = new BlogContext())
            {
                var blog = await context.Blogs.Include(i => i.BlogImages).Include(i => i.Category).Where(i => i.BlogId == blogId).Select(i => new AddOrUpdateBlogDto
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
        }

        public async Task AddImages(AddOrUpdateBlogDto blog)
        {
            using (var context = new BlogContext())
            {
                var blogToUpdate = await context.Blogs.Include(i => i.BlogImages).FirstOrDefaultAsync(i => i.BlogId == blog.BlogId);
                blogToUpdate.BlogImages = blog.BlogImages;
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteImage(int blogImageId)
        {
            using (var context = new BlogContext())
            {
                var imageToDelete = await context.Images.FirstOrDefaultAsync(i => i.BlogImageId == blogImageId);
                context.Images.Remove(imageToDelete);
                await context.SaveChangesAsync();
            }
        }

        public async Task<BlogDto> GetAll()
        {
            using (var context = new BlogContext())
            {
                var blogs = await context.Blogs.Include(i => i.Category).ToListAsync();
                return new BlogDto(blogs);
            }
        }

    }
}
