using System.Threading.Tasks;
using Business.Abstract;
using Entities.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace PersonalBlog.Controllers
{
    [AutoValidateAntiforgeryToken]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginDto model)
        {
            var loginResult = await _accountService.Login(model);

            if (loginResult.Success)
            {
                return RedirectToAction("BlogList", "Blog");
            }

            ModelState.AddModelError("", loginResult.Message);
            return View(model);
        }

        public async Task<IActionResult> Logout()
        {
            await _accountService.Logout();
            return Redirect("/");
        }
    }
}