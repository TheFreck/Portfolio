using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Domain.Repositories
{
    public class UserRepository
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ObjectId { get; set; }
        public string Id { get; set; }
        [BsonElement("Name")]
        [JsonProperty("Name")]
        public string Name { get; set; }
        public string Password { get; set; }
    }
    public interface IUserRepository
    {
        string ObjectId { get; set; }
        string Id { get; set; }
        string Name { get; set; }
        string Password { get; set; }
    }
}
