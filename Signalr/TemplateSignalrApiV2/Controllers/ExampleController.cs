using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using TemplateSignalrApiV2.Hubs;

namespace TemplateSignalrApiV2.Controllers
{
    [Route("api/Example")]
    public class ExampleController : Controller
    {
        IHubContext<ExampleHub> hub;

        public ExampleController(IHubContext<ExampleHub> exampleHub)
        {
            hub = exampleHub;
        }

        [HttpPost]
        public void Post(string msg)
        {
            hub.Clients.All.InvokeAsync("examplesend", msg);
        }
    }
}