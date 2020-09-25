using Core.Entities.Concrete;
using Core.Utilities.Result;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IAccountService
    {
        Task<Result> Login(LoginDto dto);
        Task<Result> Logout();
        Task<DataResult<ApplicationUser>> GetUserById(string userId);
        Task<DataResult<ApplicationUser>> GetUserByClaimsPrincipal(ClaimsPrincipal claimsPrincipal);
        DataResult<string> GetUserId(ClaimsPrincipal claimsPrincipal);
    }
}
