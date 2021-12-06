using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace AngularFinch.Web.SignalR
{
    public class ShapeHub : Hub
    {
        public async Task MoveShape(int x, int y)
        {
            await Clients.Others.SendAsync("shapeMoved", x, y);
        }
    }
}