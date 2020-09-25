using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalBlog.Models
{
    public class AddOrUpdateCategoryViewModel
    {
        public int CategoryId { get; set; }
        [Required(ErrorMessage = "Kategori Adı boş bırakılamaz.")]
        [StringLength(40, MinimumLength = 3, ErrorMessage = "Kategori Adı minimum 3, maximum 40 karakter olmalıdır.")]
        public string CategoryName { get; set; }
    }
}
