using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GitHubSearch.Extensions;
using GitHubSearch.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GitHubSearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarkController : ControllerBase
    {
        private string bookmarksKey = "bookmarks";

        // GET: api/Bookmarks
        [HttpGet]
        public IEnumerable<Bookmark> Get()
        {
            Dictionary<int, Bookmark> bookmarks = 
                HttpContext.Session.GetObject<Dictionary<int, Bookmark>>(bookmarksKey);
            if (bookmarks == null)
                return new List<Bookmark>();
            return bookmarks.Values.ToList();
        }

        // GET: api/Bookmark/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Bookmark
        [HttpPost]
        public void Post([FromBody] Bookmark value)
        {
            Dictionary<int, Bookmark> bookmarks = 
                HttpContext.Session.GetObject<Dictionary<int, Bookmark>>(bookmarksKey);
            if (bookmarks == null)
                bookmarks = new Dictionary<int, Bookmark>();
            bookmarks[value.Id] = value;
            HttpContext.Session.SetObject(bookmarksKey, bookmarks);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Dictionary<int, Bookmark> bookmarks =
                HttpContext.Session.GetObject<Dictionary<int, Bookmark>>(bookmarksKey);
            bookmarks.Remove(id);
            HttpContext.Session.SetObject(bookmarksKey, bookmarks);
        }
    }
}
