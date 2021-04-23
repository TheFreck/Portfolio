using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Resources
{
    public class UserResource
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Message { get; set; }
        public UserResource(string name, string password, string message)
        {
            Name = name;
            Password = password;
            Message = message;
        }
        public UserResource(string name, string password)
        {
            Name = name;
            Password = password;
        }
        public UserResource() { }
    }
}
