using System.Web.Http;
using Newtonsoft.Json;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class SubjectsController : ApiController
    {
        SubjectRepository repo = new SubjectRepository();

        // GET api/values
        public IHttpActionResult Get()
        {
            var subjects = repo.GetSubjects();
            return new ResponseClass(JsonConvert.SerializeObject(subjects), Request);
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            var subject = repo.Get(id);
            return new ResponseClass(JsonConvert.SerializeObject(subject), Request);
        }

        // POST api/values
        public IHttpActionResult Post([FromBody] Subject subject)
        {
            var new_subject = repo.Create(subject);
            return new ResponseClass(JsonConvert.SerializeObject(new_subject), Request);
        }

        // PUT api/values/5
        public IHttpActionResult Put([FromBody] Subject subject)
        {
            var updatedRowsCount = repo.Update(subject);
            return new ResponseClass(JsonConvert.SerializeObject(updatedRowsCount), Request);
        }

        // DELETE api/values/5
        public IHttpActionResult Delete(int id)
        {
            var updatedRowsCount = repo.Delete(id);
            return new ResponseClass(JsonConvert.SerializeObject(updatedRowsCount), Request);
        }
    }
}