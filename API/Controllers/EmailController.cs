using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Domain.Models;
using Portfolio.API.Domain.Services;
using Portfolio.API.Mapping;
using System.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
//using System.Net.Mail;
using System.Net.Mime;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using MimeKit.Text;

namespace Portfolio.API.Controllers
{
    [Route("/api/[controller]")]
    public class EmailController : Controller
    {
        private IMapper _mapper;
        public EmailController(IMapper mapper)
        {
            _mapper = mapper;
        }
        [HttpPost]
        public string SendEmail([FromBody] Email email)
        {
            var message = new MimeMessage();
            message.ResentFrom.Add(new MailboxAddress(email.Name, email.From));
            message.From.Add(new MailboxAddress(email.Name, email.From));
            message.ResentTo.Add(new MailboxAddress(ConfigurationManager.AppSettings.Get("EMAIL_RECEIVE_NAME"), ConfigurationManager.AppSettings.Get("EMAIL_RECEIVE_ADDRESS")));
            message.To.Add(new MailboxAddress(ConfigurationManager.AppSettings.Get("EMAIL_RECEIVE_NAME"), ConfigurationManager.AppSettings.Get("EMAIL_RECEIVE_ADDRESS")));
            message.ResentReplyTo.Add(new MailboxAddress(email.Name, email.From));
            message.ReplyTo.Add(new MailboxAddress(email.Name, email.From));
            message.ResentSender = new MailboxAddress(email.Name, email.From);
            message.Sender = new MailboxAddress(email.Name, email.From);


            message.Subject = email.Subject;
            var builder = new BodyBuilder();
            builder.HtmlBody = string.Format(@"" + email.Body);

            message.Body = builder.ToMessageBody();
            Console.WriteLine(builder.ToMessageBody());
            
            return Mail.SendEMail(message).Result.Item2;
        }
    }
}
