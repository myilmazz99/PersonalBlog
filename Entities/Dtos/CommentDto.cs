using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class CommentDto
    {
        public int CommentId { get; set; }
        public string CommentText { get; set; }
        public string Username { get; set; }
        public int BlogId { get; set; }
    }
}
