using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AuthIdentityServer.Models;
using AuthIdentityServer.Models.AccountViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AuthIdentityServer.Controllers
{
    [Route("api/register")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public RegisterController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }
        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            var user = new ApplicationUser
            {
                LastName = model.User.LastName,
                FirstName = model.User.FirstName,
                UserName = model.User.FirstName,
                Email = model.Email,
                City = model.User.City,
                Country = model.User.Country,
                Street = model.User.Street,
                State = model.User.State,
                ZipCode = model.User.ZipCode,
                ProfileImage = model.User.ProfileImage

            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded) return Ok();
            return Redirect(model.ReturnUrl);
        }
    }
}