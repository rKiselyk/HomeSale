using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "New York", "Atlanta" };
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "New York";
        }
    }
}
