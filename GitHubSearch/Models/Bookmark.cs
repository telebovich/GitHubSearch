using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GitHubSearch.Models
{
    public class Bookmark
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string OwnerAvatarUrl { get; set; }
        public bool IsBookmark { get; set; }
        public string HtmlUrl { get; set; }
    }
}
