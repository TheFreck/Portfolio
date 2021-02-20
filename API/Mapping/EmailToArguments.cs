using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Portfolio.API.Domain.Models;

namespace Portfolio.API.Mapping
{
    public class EmailToArguments : Profile
    {
        public EmailToArguments()
        {
            CreateMap<Email, MailArguments>();
        }
    }
}
