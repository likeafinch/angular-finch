using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace AngularFinch.Infrastructure.Services
{
    public interface IApplicationDataService
    {
        Task<object> GetApplicationData(HttpContext context);
    }
}