using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]  //Api Controller olması için attribute yazdık
    [Route("Api/[controller]")]  //temel route yolu verildi (generic olarak [] )
    public class BaseApiController : ControllerBase
    {
        
    }
}
