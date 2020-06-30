using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using ProductsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace ProductsApi.Controllers
{
    public class AccountController : ApiController
    {
        [Route("register")]
        public async Task<IHttpActionResult> PostUser(UserViewModel account)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                UserStore<IdentityUser> store = new UserStore<IdentityUser>(new DataContext());
                UserManager<IdentityUser> manager = new UserManager<IdentityUser>(store);
                IdentityUser user = new IdentityUser();
                user.UserName = account.Name;
                IdentityResult result=await manager.CreateAsync(user, account.Password);
                if (result.Succeeded)
                {
                    return Created("", "Register Success :" + user.UserName);
                }
                else
                {
                    var errors = "";
                    foreach (var item in result.Errors.ToList())
                    {
                        errors += item + "  ";
                    }
                        
                    return BadRequest(errors);
                }
                    
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}
