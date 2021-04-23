using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Domain.Models;
using Portfolio.API.Domain.Repositories;
using Portfolio.API.Resources;
using Portfolio.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Controllers
{
    [Route("/api/login")]
    public class LoginController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;
        public LoginController(IMapper mapper, IUserService userService)
        {
            Console.WriteLine("login constructor");
            _mapper = mapper;
            _userService = userService;
        }
        [HttpGet]
        public async Task<List<UserRepository>> Get()
        {
            return await _userService.GetAsync();
        }
        [HttpPost("signin")]
        public async Task<bool> Login([FromBody]UserResource user)
        {
            return await _userService.SignIn(_mapper.Map<UserResource, UserObject>(user));
        }
        [HttpPost]
        public ActionResult<UserResource> Create([FromBody]UserResource user)
        {
            try
            {
                var userObject = _mapper.Map<UserResource, UserObject>(user);
                var userRepo = _userService.CreateUser(userObject);
                var createdUser = _mapper.Map<UserRepository, UserResource>(userRepo);
                createdUser.Message = "User created successfully";
                return createdUser;
            }
            catch (Exception e)
            {
                user.Message = "Something went wrong while creating the user: " + e.Message;
                return user;
            }
        }
        // RESET PASSWORD
        [HttpPut]
        public ActionResult<string> Put()
        {
            return "put it baby";
        }
        [HttpDelete]
        public ActionResult<string> Delete()
        {
            return "deleted it baby";
        }
    }
}
