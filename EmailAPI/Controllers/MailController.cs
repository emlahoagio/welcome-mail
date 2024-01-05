using EmailAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace EmailAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        private readonly MailService _mailService;

        public MailController()
        {
            _mailService = new MailService();
        }

        [HttpPost]
        public async Task<IActionResult> SendNewMemberAnnouncementEmail()
        {
            _mailService.SendEmail();
            return Ok();
        }
    }
}
