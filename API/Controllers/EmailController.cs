using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Domain.Models;
using Portfolio.API.Domain.Services;
using Portfolio.API.Mapping;
using System.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using MimeKit.Text;
using System.IO;
using System.Net.Http;
using System.Net;
using System.Net.Mail;
using System.Text.RegularExpressions;

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
        public HttpResponseMessage SendEmail([FromBody] Email email)
        {
            var emailIsValid = Regex.IsMatch(email.From, @"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$");
            if (!emailIsValid)
            {
                return new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.BadRequest,
                    ReasonPhrase = "Valid Email is Required"
                };
            }
            ValidEmail validEmail = _mapper.Map<Email, ValidEmail>(email);
            if (!ModelState.IsValid)
            {
                return new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.BadRequest,
                    ReasonPhrase = "Please include some text in the body"
                };

            }
            var message = new MimeMessage();
            message.ResentFrom.Add(new MailboxAddress(validEmail.Name, validEmail.From));
            message.From.Add(new MailboxAddress(validEmail.Name, validEmail.From));
            message.ResentTo.Add(new MailboxAddress(ConfigurationManager.AppSettings.Get("EMAIL_RECEIVE_NAME"), ConfigurationManager.AppSettings.Get("EMAIL_RECEIVE_ADDRESS")));
            message.To.Add(new MailboxAddress(ConfigurationManager.AppSettings.Get("EMAIL_RECEIVE_NAME"), ConfigurationManager.AppSettings.Get("EMAIL_RECEIVE_ADDRESS")));
            message.ResentReplyTo.Add(new MailboxAddress(validEmail.Name, validEmail.From));
            message.ReplyTo.Add(new MailboxAddress(validEmail.Name, validEmail.From));
            message.ResentSender = new MailboxAddress(validEmail.Name, validEmail.From);
            message.Sender = new MailboxAddress(validEmail.Name, validEmail.From);
            message.Subject = email.Subject;

            var builder = new BodyBuilder();
            builder.HtmlBody = string.Format(@"" + email.Body);
            message.Body = builder.ToMessageBody();

            try
            {
                var result = Mail.SendEMail(message).Result;

                return new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.OK,
                    ReasonPhrase = result.Item2
                };

            }
            catch (Exception ex)
            {
                return new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.InternalServerError,
                    ReasonPhrase = ex.Message
                };
            }

        }
    }
}
