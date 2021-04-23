using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Portfolio.API.Domain.Models;
using Portfolio.API.Domain.Repositories;

namespace Portfolio.API.Mapping
{
    public class UserObjectToUserRepository : Profile
    {
        public UserObjectToUserRepository()
        {
            CreateMap<UserObject, UserRepository>();
        }
    }
}
