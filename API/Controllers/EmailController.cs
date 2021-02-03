using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Controllers
{
    [Route("/api/[controler]")]
    public class EmailController : Controller
    {
        public Task<Email> Index()
        {
            return View();
        }
    }
}
