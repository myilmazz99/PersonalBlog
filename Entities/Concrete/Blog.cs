using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class Blog
    {
        public int BlogId { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public string MainImage { get; set; }
        public DateTime AddedDate { get; set; }
        public int ViewCount { get; set; }
        public bool IsPublished { get; set; }

        // Relations
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public List<BlogImage> BlogImages { get; set; }
        public List<Comment> Comments { get; set; }
        public string UserId { get; set; }

    }
}
