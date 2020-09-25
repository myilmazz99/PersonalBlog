using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PersonalBlog.Controllers
{
    public class ErrorController : Controller
    {
        [Route("/Error/{statusCode}")]
        public IActionResult Index(int statusCode)
        {
            return statusCode switch{ 
                404 => View("PageNotFound"),
                _ => View("Error")
            };
        }
    }
}
