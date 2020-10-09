namespace Entities.Dtos
{
    public class BlogListDto
    {
        public int BlogId { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public string MainImage { get; set; }
        public string AddedDate { get; set; }
        public string CategoryName { get; set; }
        public bool IsPublished { get; set; }
    }
}
