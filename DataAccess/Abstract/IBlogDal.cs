using Core.DataAccess.Abstract;
using Core.Utilities.Result;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Abstract
{
    public interface IBlogDal : IEntityRepository<Blog>
    {
        Task<int> GetBlogCount();
        Task<BlogDto> GetAll();
        Task<List<Blog>> GetAllForView(int page);
        Task<Blog> GetByIdForView(int blogId);
        Task<AddOrUpdateBlogDto> GetByIdWithImages(int blogId);
        Task AddComment(Comment comment);
        Task RemoveComment(Comment comment);
        Task IncrementView(int blogId);
        Task AddImages(AddOrUpdateBlogDto blog);
        Task DeleteImage(int blogImageId);
        Task<int> GetLatestBlogId();
        Task<List<Blog>> GetLatestThree();
    }
}
