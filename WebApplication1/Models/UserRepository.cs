using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Data.SQLite;
using System.Linq;
using Dapper;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using WebApplication1.Models;

namespace WebApplication1.Models
{
    [JsonObject]
    public class UserRepository
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;


        public IEnumerable<User> GetUsers()
        {
            List<User> users = new List<User>();
            using (IDbConnection db = new SQLiteConnection(connectionString))
            {
                users = db.Query<User>("SELECT * FROM Users").AsList();
                Console.WriteLine(users);
            }

            return users;
        }

        public User Get(int id)
        {
            User user = null;
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                user = db.Query<User>("SELECT * FROM Users WHERE Id = @id", new {id}).FirstOrDefault();
            }

            return user;
        }

        public User Create(User user)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery =
                    "INSERT INTO Users (Name, Age) VALUES(@Name, @Age); SELECT CAST(SCOPE_IDENTITY() as int)";
                int userId = db.Query<int>(sqlQuery, user).FirstOrDefault();
                user.Id = userId;
            }

            return user;
        }

        public void Update(User user)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "UPDATE Users SET Name = @Name, Age = @Age WHERE Id = @Id";
                db.Execute(sqlQuery, user);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                var sqlQuery = "DELETE FROM Users WHERE Id = @id";
                db.Execute(sqlQuery, new {id});
            }
        }
    }
}