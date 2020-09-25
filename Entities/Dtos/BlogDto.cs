using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class BlogDto
    {
        public BlogDto(Blog blog)
        {
            BlogId = blog.BlogId;
            Header = blog.Header;
            Content = blog.Content;
            MainImage = blog.MainImage;
            AddedDate = blog.AddedDate.ToLongDateString();
            CategoryName = blog.Category.CategoryName;
            IsPublished = blog.IsPublished;
        }

        public BlogDto(List<Blog> blogs)
        {
            BlogDtos = new List<BlogDto>();

            foreach (var item in blogs)
            {
                var blog = new BlogDto(item);
                BlogDtos.Add(blog);
            }
        }

        public int BlogId { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public string MainImage { get; set; }
        public string AddedDate { get; set; }
        public string CategoryName { get; set; }
        public bool IsPublished { get; set; }
        public List<BlogDto> BlogDtos { get; set; }
    }
}
