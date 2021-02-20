using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Portfolio.API.Domain.Models
{
    public class MailArguments
    {
        public string From { get; set; }
        public string Name { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public string MailTo { get; set; }
        public string ReplyTo { get; set; }
        public string Sender { get; set; }
        public string SmtpHost { get; set; }
        public int Port { get; set; }
    }
}
