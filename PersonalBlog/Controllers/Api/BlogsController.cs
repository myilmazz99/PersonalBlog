using System.Threading.Tasks;
using Business.Abstract;
using Entities.Concrete;
using Entities.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace PersonalBlog.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private readonly IBlogService _blogService;
        private readonly IAccountService _accountService;
        private readonly ILogger<BlogsController> _logger;

        public BlogsController(IBlogService blogService, IAccountService accountService, ILogger<BlogsController> logger)
        {
            _blogService = blogService;
            _accountService = accountService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(int page)
        {
            _logger.LogInformation("Initializing GetAll method on controller...");
            var result = await _blogService.GetAllForView(page);
            if (!result.Success)
            {
                return BadRequest();
            }

            foreach (var item in result.Data)
            {
                var user = await _accountService.GetUserById(item.WriterId);
                item.WriterName = user.Data.FullName;
                item.WriterSummary = user.Data.Summary;
                item.WriterProfilePictureUrl = user.Data.ProfileImageUrl;
            }

            return Ok(result.Data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _blogService.GetByIdForView(id);
            if (result.Success)
            {
                var user = await _accountService.GetUserById(result.Data.WriterId);
                result.Data.WriterName = user.Data.FullName;
                result.Data.WriterSummary = user.Data.Summary;
                result.Data.WriterProfilePictureUrl = user.Data.ProfileImageUrl;

                return Ok(result.Data);
            }

            return BadRequest(result);
        }

        [HttpGet("count")]
        public async Task<IActionResult> GetCount()
        {
            return Ok(await _blogService.GetBlogCount());
        }

        [HttpPost("addcomment")]
        public async Task<IActionResult> AddComment(CommentDto comment)
        {
            var result = await _blogService.AddComment(comment);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest("Yorumunuz Eklenemedi.");
        }

        [HttpPost("removecomment")]
        [Authorize]
        public async Task<IActionResult> RemoveComment(CommentDto comment)
        {
            var result = await _blogService.RemoveComment(comment);
            if (result.Success)
            {
                return Ok(new { message = result.Message });
            }
            return BadRequest();
        }

        [HttpPut("incrementview")]
        public async Task<IActionResult> IncrementView(int blogId)
        {
            var result = await _blogService.IncrementView(blogId);
            if (result.Success)
            {
                return Ok();
            }

            return BadRequest();
        }
    }
}