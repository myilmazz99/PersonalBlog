using Entities.Dtos;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace PersonalBlog.Models
{
    public class BlogListViewModel
    {
        public List<BlogListDto> BlogListDto { get; set; }
        public List<SelectListItem> CategoryList { get; set; }
    }
}