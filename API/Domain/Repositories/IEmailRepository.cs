using Portfolio.API.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Domain.Repositories
{
    interface IEmailRepository
    {
        Task<Email> SendEmail(Email email);
    }
}
