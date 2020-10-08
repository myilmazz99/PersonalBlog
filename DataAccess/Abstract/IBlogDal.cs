using Entities.Concrete;
using Entities.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataAccess.Abstract
{
    public interface IBlogDal : IEntityRepository<Blog>
    {
        Task<int> GetBlogCount();
        Task DeleteImage(int blogImageId);
        Task<int> GetLatestBlogId();
    }
}
