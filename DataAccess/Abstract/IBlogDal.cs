using Entities.Concrete;
using Entities.Dtos;
using System.Collections.Generic;
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
    }
}
