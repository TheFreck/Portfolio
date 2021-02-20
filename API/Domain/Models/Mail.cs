using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
//using System.Net.Mail;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using MailKit.Security;

namespace Portfolio.API.Domain.Models
{
    public static class Mail
    {
        public static async Task<Tuple<bool, string>> SendEMail(MimeMessage message)
        {
            try
            {
                var isSent = false;
                using (var client = new SmtpClient())
                {
                    client.MessageSent += (sender, args) => {
                        Console.WriteLine("sender then args");
                        Console.WriteLine(sender);
                        Console.WriteLine(args.Response);
                        Console.WriteLine(args.Message);
                    };

                    client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                    await client.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                    await client.AuthenticateAsync(ConfigurationManager.AppSettings.Get("EMAIL_SEND_ADDRESS"), ConfigurationManager.AppSettings.Get("EMAIL_PASSWORD"));
                    await client.SendAsync(message);
                    isSent = true;
                    await client.DisconnectAsync(true);
                }

                var sentWell = isSent == true;
                
                return Tuple.Create(sentWell, "Email Sent Successfully.");
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return Tuple.Create(false, msg);
            }
        }
    }
}
