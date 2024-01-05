using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

namespace EmailAPI.Services
{
    public class MailService
    {
        public void SendEmail()
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("FromName", "quandtm0610@gmail.com"));
            message.To.Add(new MailboxAddress("", "emlahoagio0610@gmail.com"));
            message.Subject = "New Member Announcement";
            string messageBody = @"Hi all,

We are delighted to announce that these KMSers have officially become members of KMS Healthcare family. Join us in welcoming them!

To our beloved colleagues, warmly welcome you to KMS Healthcare! We are excited to have you on the team and hope you have a long and successful journey here with us!";
            message.Body = new TextPart("plain") { Text = messageBody };

            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                client.Authenticate("quandtm0610@gmail.com", "mnsk blcv nzvn orhf");
                client.Send(message);
                client.Disconnect(true);
            }
        }
    }
}
