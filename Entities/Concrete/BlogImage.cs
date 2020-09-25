using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class BlogImage
    {
        public int BlogImageId { get; set; }
        public int BlogId { get; set; }
        public string ImageUrl { get; set; }
    }
}
