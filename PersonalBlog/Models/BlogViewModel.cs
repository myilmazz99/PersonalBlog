using Entities.Concrete;
using Entities.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalBlog.Models
{
    public class BlogViewModel
    {
        public BlogViewModel()
        {

        }

        public BlogViewModel(BlogDto dto)
        {
            BlogId = dto.BlogId;
            Header = dto.Header;
            Content = dto.Content;
            MainImage = dto.MainImage;
            AddedDate = dto.AddedDate;
            CategoryName = dto.CategoryName;
            IsPublished = dto.IsPublished;
        }

        public BlogViewModel(List<BlogDto> dto)
        {
            BlogViewModels = new List<BlogViewModel>();

            foreach (var item in dto)
            {
                var blogDto = new BlogViewModel(item);
                BlogViewModels.Add(blogDto);
            }
        }

        public int BlogId { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public string MainImage { get; set; }
        public string AddedDate { get; set; }
        public int CommentCount { get; set; }
        public int ViewCount { get; set; }
        public bool IsPublished { get; set; }
        public string CategoryName { get; set; }
        public List<BlogViewModel> BlogViewModels { get; set; }
        public List<SelectListItem> CategoryList { get; set; }
    }
}