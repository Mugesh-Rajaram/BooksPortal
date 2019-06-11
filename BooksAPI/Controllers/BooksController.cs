using Microsoft.AspNetCore.Mvc;

namespace BooksAPI.Controllers
{
    [Route("api/books")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        public IActionResult GetBooks()
        {

            return Ok();
        }
    }
}