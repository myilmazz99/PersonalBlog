using Entities.Concrete;
using Entities.Dtos;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalBlog.Models
{
    public class AddOrUpdateBlogViewModel
    {
        public AddOrUpdateBlogViewModel()
        {
            BlogImages = new List<BlogImage>();
        }
        public AddOrUpdateBlogViewModel(AddOrUpdateBlogDto _addOrUpdateBlogDto)
        {
            BlogId = _addOrUpdateBlogDto.BlogId;
            Header = _addOrUpdateBlogDto.Header;
            Content = _addOrUpdateBlogDto.Content;
            MainImage = _addOrUpdateBlogDto.MainImage;
            Category = _addOrUpdateBlogDto.Category;
            CategoryId = _addOrUpdateBlogDto.CategoryId;
            BlogImages = _addOrUpdateBlogDto.BlogImages;
            IsPublished = _addOrUpdateBlogDto.IsPublished;
            AddOrUpdateBlogDto = _addOrUpdateBlogDto;
        }

        public int BlogId { get; set; }
        [Required(ErrorMessage = "Başlık boş bırakılamaz.")]
        [StringLength(200, MinimumLength = 5, ErrorMessage = "Başlık minimum 5, maximum 30 karakterden oluşmalıdır.")]
        public string Header { get; set; }
        public string Content { get; set; }
        public string MainImage { get; set; }
        public Category Category { get; set; }
        [Range(1, 99999, ErrorMessage = "Kategori belirlemek zorunludur.")]
        public int CategoryId { get; set; }
        public bool IsPublished { get; set; }
        public List<BlogImage> BlogImages { get; set; }
        public List<SelectListItem> CategoryList { get; set; }
        public AddOrUpdateBlogDto AddOrUpdateBlogDto { get; set; }
    }
}
