using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
//using System.Web.Mvc;
using WebApplication1.Models;
using System.Web.Script.Serialization;
using Newtonsoft.Json;

namespace WebApplication1.Controllers
{
    public class ResponseClass : IHttpActionResult
    {
        string _value;
        HttpRequestMessage _request;

        public ResponseClass(string value, HttpRequestMessage request)
        {
            _value = value;
            _request = request;
        }

        public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
        {
            var response = new HttpResponseMessage()
            {
                Content = new StringContent(_value),
                RequestMessage = _request
            };
            return Task.FromResult(response);
        }
    }

    public class ValuesController : ApiController
    {
        UserRepository repo = new UserRepository();

        // GET api/values
        public IHttpActionResult Get()
        {
            var users = repo.GetUsers();
            return new ResponseClass(JsonConvert.SerializeObject(users), Request);
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            var user = repo.Get(id);
            return new ResponseClass(JsonConvert.SerializeObject(user), Request);
        }

        // POST api/values
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}