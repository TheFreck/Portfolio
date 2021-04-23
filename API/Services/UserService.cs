using AutoMapper;
using MongoDB.Bson;
using MongoDB.Driver;
using Portfolio.API.Domain.Models;
using Portfolio.API.Domain.Repositories;
using Portfolio.API.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Services
{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<UserRepository> _users;
        private readonly IMapper _mapper;
        private bool _loggedIn;
        public UserService(IDatabaseSettings settings, IMapper mapper)
        {
            _mapper = mapper;
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _users = database.GetCollection<UserRepository>(settings.LoginCollectionName);
        }
        public async Task<List<UserRepository>> GetAsync()
        {
            if (_loggedIn)
            {
                var users = await _users.FindAsync(users => true);
                return users.ToList();
            }
            else return new List<UserRepository>
            { new UserRepository
                {
                    Name = "Not Logged In",
                    Password = "Not Logged In"
                }
            };
        }
        public async Task<IAsyncCursor<UserRepository>> GetUser(UserObject user)
        {
            var userName = user.GetName();
            var filter = Builders<UserRepository>.Filter.Eq("Name", user.GetName());
            UserRepository userRepo = new UserRepository
            {
                Name = user.GetName(),
                Password = user.GetPassword()
            };
            return await _users.FindAsync<UserRepository>(u => u.Name == userName);
        }
        // Create User
        public UserRepository CreateUser(UserObject user)
        {
            var createdUser = _mapper.Map<UserObject, UserRepository>(user);
            _users.InsertOne(createdUser);
            return createdUser;
        }
        public async Task<bool> SignIn(UserObject user)
        {
            try
            {
                var nameHash = user.GetName();
                var passwordHash = user.GetPassword();
                var password = user.DecryptPassword(nameHash,passwordHash);
                var name = user.DecryptName(nameHash,passwordHash);

                var nameMatch = await _users.FindAsync(u => u.Name == nameHash);
                using (IAsyncCursor<UserRepository> cursor = await _users.FindAsync(u => u.Name == nameHash))
                {
                    while (await cursor.MoveNextAsync())
                    {
                        IEnumerable<UserRepository> batch = cursor.Current;
                        foreach (UserRepository doc in batch)
                        {
                            if (doc.Name == user.GetName())
                            {
                                if (doc.Password == user.GetPassword())
                                {
                                    _loggedIn = true;
                                    return _loggedIn;
                                }
                            }
                        }
                    }
                    return false;
                };
            }
            catch (Exception e)
            {
                Console.WriteLine("sumpin went wrong: " + e.Message);
                return false;
            }
        }
    }
    public interface IUserService
    {
        Task<List<UserRepository>> GetAsync();
        Task<IAsyncCursor<UserRepository>> GetUser(UserObject user);
        UserRepository CreateUser(UserObject user);
        Task<bool> SignIn(UserObject user);
    }
}
