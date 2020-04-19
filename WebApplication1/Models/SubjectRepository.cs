using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Data.SQLite;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Results;
using Dapper;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using WebApplication1.Models;

namespace WebApplication1.Models
{
    [JsonObject]
    public class SubjectRepository
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;


        [HttpGet]
        public IEnumerable<Subject> GetSubjects()
        {
            List<Subject> subjects = new List<Subject>();
            using (IDbConnection db = new SQLiteConnection(connectionString))
            {
                subjects = db.Query<Subject>("SELECT * FROM Subjects").AsList();
            }
            return subjects;
        }

        public Subject Get(int id)
        {
            Subject subject = null;
            using (IDbConnection db = new SQLiteConnection(connectionString))
            {
                subject = db.Query<Subject>("SELECT * FROM Subjects WHERE id = @id", new {id}).FirstOrDefault();
            }
            return subject;
        }

        public Subject Create(Subject subject)
        {
            using (IDbConnection db = new SQLiteConnection(connectionString))
            {
                var sqlQuery =
                    "INSERT INTO Subjects (Name, Age) VALUES(@Name, @Age); SELECT CAST(SCOPE_IDENTITY() as int)";
                int subjectId = db.Query<int>(sqlQuery, subject).FirstOrDefault();
                subject.Id = subjectId;
            }
            return subject;
        }

        public int Update(Subject subject)
        {
            using (IDbConnection db = new SQLiteConnection(connectionString))
            {
                var sqlQuery = "UPDATE Subjects SET Name = @Name, Age = @Age WHERE Id = @Id";
                var updatedRowsCount = db.Execute(sqlQuery, subject);
                return updatedRowsCount;
            }
        }

        public int Delete(int id)
        {
            using (IDbConnection db = new SQLiteConnection(connectionString))
            {
                var sqlQuery = "DELETE FROM Subjects WHERE Id = @id";
                var updatedRowsCount = db.Execute(sqlQuery, new {id});
                return updatedRowsCount;
            }
        }
    }
}