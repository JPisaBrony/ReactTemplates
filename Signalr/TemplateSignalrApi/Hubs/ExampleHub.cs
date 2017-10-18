using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Hubs;
using System.Net.Http;
using System.Text;

namespace TemplateSignalrApi.Hubs
{
    [HubName("examplehub")]
    public class ExampleHub : Hub
    {
        public void ExampleMethod(string msg)
        {
            Clients.All.examplemsg(msg);
        }
    }
}
