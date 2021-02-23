using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Portfolio.API.Domain.Models
{
    public class ValidEmail
    {
        [Required(ErrorMessage = "From Address is Required")]
        public string From { get; set; }
        public string Name { get; set; }
        public string Subject { get; set; }
        [Required(ErrorMessage = "Please make sure to include a body in your email")]
        public string Body { get; set; }
    }
}
