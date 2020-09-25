using Core.Utilities.Result;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface ICategoryService
    {
        Task<DataResult<Category>> GetById(int categoryId);
        Task<DataResult<List<Category>>> GetAll();
        Task<Result> AddOrUpdate(Category category);
        Task<Result> Delete(int categoryId);
    }
}
