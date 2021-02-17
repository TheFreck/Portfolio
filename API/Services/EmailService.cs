//using Portfolio.API.Domain.Models;
//using Portfolio.API.Domain.Repositories;
//using Portfolio.API.Domain.Services;
//using Portfolio.API.Domain.Services.Communication;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace Portfolio.API.Services
//{
//    public class EmailService : IEmailService
//    {
//        private readonly IEmailRepository _emailRepository;
//        private readonly IUnitOfWork _unitOfWork;
//        public EmailService(IEmailRepository emailRepository, IUnitOfWork unitOfWork)
//        {
//            _emailRepository = emailRepository;
//            _unitOfWork = unitOfWork;
//        }
//        public async Task<Email> SendEmail()
//        {
//            return await _emailRepository.SendEmail();
//        }
//        public async Task<SaveEmailResponse> SaveAsync(Email email)
//        {
//            try
//            {
//                await _emailRepository.SendEmail(email);
//                await _unitOfWork.CompleteAsync();

//                return new SaveEmailResponse(email);
//            }
//            catch (Exception ex)
//            {
//                throw ex;
//            }
//        }
//    }
//}
