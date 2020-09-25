using Core.Utilities.Result;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IBlogService
    {
        Task<int> GetBlogCount();
        Task<DataResult<BlogForViewDto>> GetByIdForView(int blogId);
        Task<DataResult<List<BlogForViewDto>>> GetAllForView(int page);
        Task<DataResult<List<BlogForViewDto>>> GetLatestThree();
        Task<DataResult<AddOrUpdateBlogDto>> GetByIdWithImages(int blogId);
        Task<DataResult<BlogDto>> GetAll();
        Task<IResult> AddComment(CommentDto comment);
        Task<IResult> RemoveComment(CommentDto comment);
        Task<IResult> IncrementView(int blogId);
        Task<IResult> AddImages(AddOrUpdateBlogDto blog);
        Task<IResult> DeleteImage(int blogImageId);
        Task<DataResult<int>> AddOrUpdate(AddOrUpdateBlogDto addOrUpdateBlogDto);
        Task<IResult> Delete(int blogId);
    }
}
