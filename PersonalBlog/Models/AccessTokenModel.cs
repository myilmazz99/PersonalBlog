﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalBlog.Models
{
    public class AccessTokenModel
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
    }
}
