using MimeKit;
using Portfolio.API.Domain.Models;
using Portfolio.API.Domain.Services.Communication;
using Portfolio.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Domain.Services
{
    public interface IEmailService
    {
        Task SendEmail(MimeMessage message);
    }
}
