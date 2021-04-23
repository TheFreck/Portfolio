using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Domain.Models
{
    public class LoginResponse
    {
        public bool LoginAccepted { get; set; }
        public Guid LoginToken { get; set; }
    }
}
