﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Resources
{
    public class SaveEmailResource
    {
        [Required]
        [MaxLength(30)]
        public string ReturnAddress;
        [Required]
        [MaxLength(30)]
        public string EmailBody;
    }
}
