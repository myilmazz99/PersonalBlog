using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities.Result;
using Entities.Dtos;
using Microsoft.AspNetCore.Identity;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class AccountManager : IAccountService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AccountManager(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<DataResult<ApplicationUser>> GetUserByClaimsPrincipal(ClaimsPrincipal claimsPrincipal)
        {
            var user = await _userManager.GetUserAsync(claimsPrincipal);
            if (user == null) return new ErrorDataResult<ApplicationUser>("Kullanıcı bulunamadı.");

            return new SuccessDataResult<ApplicationUser>(user);
        }

        public async Task<DataResult<ApplicationUser>> GetUserById(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return new ErrorDataResult<ApplicationUser>("Kullanıcı bulunamadı.");

            return new SuccessDataResult<ApplicationUser>(user);
        }

        public DataResult<string> GetUserId(ClaimsPrincipal claimsPrincipal)
        {
            return new SuccessDataResult<string>("", _userManager.GetUserId(claimsPrincipal));
        }

        public async Task<Result> Login(LoginDto dto)
        {
            var user = await _userManager.FindByNameAsync(dto.Username);
            if (user == null) return new ErrorResult("Kullanıcı bulunamadı.");

            var signInResult = await _signInManager.PasswordSignInAsync(user, dto.Password, true, true);
            if (signInResult.Succeeded)
            {
                return new SuccessResult("Kullanıcı girişi başarılı.");
            }
            else if (signInResult.IsLockedOut)
            {
                return new ErrorResult("Ard arda çok fazla hatalı giriş sebebiyle giriş yapmanız engellendi. 30 saniye içinde tekrar deneyebilirsiniz.");
            }

            return new ErrorResult("Kullanıcı adı ve şifreniz uyuşmuyor.");
        }

        public async Task<Result> Logout()
        {
            await _signInManager.SignOutAsync();
            return new ErrorResult("Kullanıcı çıkışı başarılı.");
        }
    }
}
