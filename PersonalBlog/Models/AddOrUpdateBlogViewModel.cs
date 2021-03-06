﻿using Entities.Dtos;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace PersonalBlog.Models
{
    public class AddOrUpdateBlogViewModel
    {
        public List<SelectListItem> CategoryList { get; set; }
        public AddOrUpdateBlogDto AddOrUpdateBlogDto { get; set; }
    }
}
