using Portfolio.API.Domain.Models;
using Portfolio.API.Domain.Services.Communication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Domain.Services
{
    interface IEmailService
    {
        Mail SendEmail();
    }
}
