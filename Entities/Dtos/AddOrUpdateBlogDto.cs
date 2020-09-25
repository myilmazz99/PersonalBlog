using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class AddOrUpdateBlogDto
    {
        public AddOrUpdateBlogDto()
        {
            BlogImages = new List<BlogImage>();
        }

        public int BlogId { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public string MainImage { get; set; }
        public string CategoryName { get; set; }
        public int CategoryId { get; set; }
        public bool IsPublished { get; set; }
        public string UserId { get; set; }
        public List<BlogImage> BlogImages { get; set; }
    }
}
