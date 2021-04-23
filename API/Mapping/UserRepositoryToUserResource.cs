using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Portfolio.API.Domain.Models;
using Portfolio.API.Domain.Repositories;
using Portfolio.API.Resources;

namespace Portfolio.API.Mapping
{
    public class UserRepositoryToUserResource : Profile
    {
        public UserRepositoryToUserResource()
        {
            CreateMap<UserRepository, UserResource>();
        }
    }
}
