//using Portfolio.API.Domain.Models;
//using Portfolio.API.Domain.Repositories;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace Portfolio.API.Persistence.Repositories
//{
//    public class EmailRepository : BaseRepository, IEmailRepository
//    {
//        public EmailRepository(AppDbContext context) : base(context)
//        {}
//        public async Task<Email> SendEmail()
//        {
//            return await _context.Email.SendEmail();
//        }

//    }
//}
