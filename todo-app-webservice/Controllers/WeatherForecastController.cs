using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace todo_app_webservice.Controllers
{
    [EnableCors]
    [ApiController]
    [Route("/hello")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [EnableCors]
        [HttpGet]
        [Route("/world")]
        public string Hellod() { return "hello world"; }
        
    }
}