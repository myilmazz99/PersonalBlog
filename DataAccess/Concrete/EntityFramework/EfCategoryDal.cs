using DataAccess.Abstract;
using DataAccess.Concrete.Contexts;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfCategoryDal : EfEntityRepository<Category>, ICategoryDal
    {
        public EfCategoryDal(BlogContext context) : base(context)
        {

        }
    }
}
