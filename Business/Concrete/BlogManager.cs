using AutoMapper;
using Business.Abstract;
using Business.Constants;
using Core.Utilities.Result;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.Dtos;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class BlogManager : IBlogService
    {
        private readonly IBlogDal _blogDal;
        private readonly IMapper _mapper;
        private readonly ILogger<BlogManager> _logger;

        public BlogManager(IBlogDal blogDal, IMapper mapper, ILogger<BlogManager> logger)
        {
            _blogDal = blogDal;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<DataResult<List<BlogForViewDto>>> GetAllForView(int page)
        {
            _logger.LogInformation("Initializing request came from blogscontroller...");
            var blogs = await _blogDal.GetAllForView(page);
            return new SuccessDataResult<List<BlogForViewDto>>(_mapper.Map<List<BlogForViewDto>>(blogs));
        }

        public async Task<DataResult<BlogForViewDto>> GetByIdForView(int blogId)
        {
            var blog = await _blogDal.GetByIdForView(blogId);
            if (blog == null)
            {
                return new ErrorDataResult<BlogForViewDto>("Aradığınız makale bulunamadı.");
            }
            return new SuccessDataResult<BlogForViewDto>(_mapper.Map<BlogForViewDto>(blog));
        }

        public async Task<IResult> AddComment(CommentDto comment)
        {
            await _blogDal.AddComment(_mapper.Map<Comment>(comment));
            return new SuccessResult(Messages.CommentSuccess);
        }

        public async Task<IResult> RemoveComment(CommentDto comment)
        {
            await _blogDal.RemoveComment(_mapper.Map<Comment>(comment));
            return new SuccessResult("Yorumunuz silindi.");
        }

        public async Task<IResult> IncrementView(int blogId)
        {
            await _blogDal.IncrementView(blogId);
            return new SuccessResult(Messages.IncrementViewSuccess);
        }

        public async Task<DataResult<AddOrUpdateBlogDto>> GetByIdWithImages(int blogId)
        {
            var blog = await _blogDal.GetByIdWithImages(blogId);
            if (blog == null)
            {
                throw new Exception(Messages.BlogNotFound);
            }
            return new SuccessDataResult<AddOrUpdateBlogDto>(blog);
        }

        public async Task<IResult> AddImages(AddOrUpdateBlogDto blog)
        {
            await _blogDal.AddImages(blog);
            return new SuccessResult(Messages.AddImagesSuccess);
        }

        public async Task<IResult> DeleteImage(int blogImageId)
        {
            await _blogDal.DeleteImage(blogImageId);
            return new SuccessResult(Messages.DeleteImageSuccess);
        }

        public async Task<DataResult<int>> AddOrUpdate(AddOrUpdateBlogDto addOrUpdateBlogDto)
        {
            if (addOrUpdateBlogDto.BlogId != 0) //UPDATE
            {
                var blogToUpdate = await _blogDal.Get(i => i.BlogId == addOrUpdateBlogDto.BlogId);

                blogToUpdate.CategoryId = addOrUpdateBlogDto.CategoryId;
                blogToUpdate.Content = addOrUpdateBlogDto.Content;
                blogToUpdate.Header = addOrUpdateBlogDto.Header;
                blogToUpdate.IsPublished = addOrUpdateBlogDto.IsPublished;

                if (addOrUpdateBlogDto.MainImage != null)
                {
                    blogToUpdate.MainImage = addOrUpdateBlogDto.MainImage;
                }

                await _blogDal.UpdateAsync(blogToUpdate);

                return new SuccessDataResult<int>(Messages.UpdateBlogSuccess);
            }
            else //ADD
            {
                await _blogDal.AddAsync(new Blog
                {
                    AddedDate = DateTime.Now,
                    CategoryId = addOrUpdateBlogDto.CategoryId,
                    Content = addOrUpdateBlogDto.Content,
                    Header = addOrUpdateBlogDto.Header,
                    MainImage = addOrUpdateBlogDto.MainImage,
                    IsPublished = addOrUpdateBlogDto.IsPublished,
                    WriterId = addOrUpdateBlogDto.WriterId
                });

                int blogId = await _blogDal.GetLatestBlogId();

                return new SuccessDataResult<int>(Messages.AddBlogSuccess, blogId);
            }
        }

        public async Task<IResult> Delete(int blogId)
        {
            await _blogDal.DeleteAsync(blogId);
            return new SuccessResult(Messages.DeleteBlogSuccess);
        }

        public async Task<DataResult<BlogDto>> GetAll()
        {
            var blogs = await _blogDal.GetAll();
            return new SuccessDataResult<BlogDto>(blogs);
        }

        public async Task<int> GetBlogCount()
        {
            return await _blogDal.GetBlogCount();
        }
    }
}
