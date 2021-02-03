using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Domain.Services.Communication
{
    public abstract class BaseResponse
    {
        public bool Success;
        public string Message;

        public BaseResponse(bool success, string message)
        {
            Success = success;
            Message = message;
        }
    }
}
