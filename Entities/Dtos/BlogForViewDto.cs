using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class BlogForViewDto
    {
        public int BlogId { get; set; }
        public string MainImage { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public string CategoryName { get; set; }
        public string AddedDate { get; set; }
        public int ViewCount { get; set; }
        public List<CommentDto> Comments { get; set; }
        public int CommentCount { get; set; }
        public string WriterName { get; set; }
        public string WriterSummary { get; set; }
        public string WriterProfilePictureUrl { get; set; }
        public string WriterId { get; set; }
    }
}
