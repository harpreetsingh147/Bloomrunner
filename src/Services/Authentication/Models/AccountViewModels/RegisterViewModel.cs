using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace AuthIdentityServer.Models.AccountViewModels
{
    public class RegisterViewModel
    {
        public RegisterViewModel()
        {
            User = new ApplicationUser();
        }
        [Display(Name = "Email")]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        public string ReturnUrl { get; set; }

        public ApplicationUser User { get; set; }
    }
}
