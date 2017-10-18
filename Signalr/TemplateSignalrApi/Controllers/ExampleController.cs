using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TemplateSignalrApi.Hubs;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using System.Text.RegularExpressions;

namespace TemplateSignalrApi.Controllers
{
    [Route("api/[controller]")]
    public class ExampleController : HubController<ExampleHub>
    {
        public ExampleController(IConnectionManager signalRConnectionManager) : base(signalRConnectionManager)
        {
        }

        [HttpPost]
        public void Post(string msg)
        {
            Clients.All.examplemsg(msg);
        }
    }
}