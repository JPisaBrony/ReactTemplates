using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace TemplateSignalrApiV2.Hubs
{
    public class ExampleHub : Hub
    {
        public void ExampleSendAll(string msg)
        {
            Clients.All.InvokeAsync("examplesend", msg);
        }

        public void ExampleSendCaller(string msg)
        {
            Clients.Client(Context.ConnectionId).InvokeAsync("examplesend", msg);
        }
    }
}
