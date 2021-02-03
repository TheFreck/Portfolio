using Portfolio.API.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Domain.Services.Communication
{
    // send the email from here
    public class SaveEmailResponse : BaseResponse
    {
        public Email Email;
        private SaveEmailResponse(bool success, string message, Email email) : base(success, message)
        {
            Email = email;
        }

        /// <summary>
        /// Creates a success response.
        /// </summary>
        /// <param name="category">Saved category.</param>
        /// <returns>Response.</returns>
        public SaveEmailResponse(Email email) : this(true, string.Empty, email)
        { }
        /// <summary>
        /// Creates am error response.
        /// </summary>
        /// <param name="message">Error message.</param>
        /// <returns>Response.</returns>
        public SaveEmailResponse(string message) : this(false, message, null)
        { }
    }
}
