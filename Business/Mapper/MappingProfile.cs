using AutoMapper;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Src, Dest
            CreateMap<Comment, CommentDto>();
            CreateMap<CommentDto, Comment>();

            CreateMap<Blog, BlogForViewDto>()
                .ForMember(d => d.AddedDate, s => s.MapFrom(i => i.AddedDate.ToLongDateString()))
                .ForMember(d => d.CategoryName, s => s.MapFrom(i => i.Category.CategoryName))
                .ForMember(d => d.CommentCount, s => s.MapFrom(i => i.Comments.Count));

            CreateMap<Blog, AddOrUpdateBlogDto>();
            CreateMap<AddOrUpdateBlogDto, Blog>();

            CreateMap<Blog, BlogListDto>()
                .ForMember(d => d.AddedDate, s => s.MapFrom(i => i.AddedDate.ToLongDateString()))
                .ForMember(d => d.CategoryName, s => s.MapFrom(i => i.Category.CategoryName));
        }
    }
}
