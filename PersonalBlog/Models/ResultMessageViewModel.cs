using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalBlog.Models
{
    public class ResultMessageViewModel
    {
        public string Message { get; set; }
        public CssColor CssColor { get; set; }
    }

    public enum CssColor
    {
        warning,
        danger,
        success
    }
}
