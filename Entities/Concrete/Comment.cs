﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class Comment
    {
        public int CommentId { get; set; }
        public int BlogId { get; set; }
        public string CommentText { get; set; }
        public string Username { get; set; }
    }
}
