using Business.Abstract;
using Business.Constants;
using Core.Utilities.Result;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CategoryManager : ICategoryService
    {
        private ICategoryDal categoryDal;

        public CategoryManager(ICategoryDal categoryDal)
        {
            this.categoryDal = categoryDal;
        }

        public async Task<Result> AddOrUpdate(Category category)
        {
            try
            {
                if (category.CategoryId != 0)
                {
                    await categoryDal.UpdateAsync(category);
                    return new SuccessResult(Messages.UpdateCategorySuccess);
                }
                else
                {
                    await categoryDal.AddAsync(category);
                    return new SuccessResult(Messages.AddCategorySuccess);
                }

                
            }
            catch (Exception ex)
            {
                return new ErrorResult(ex.Message);
            }
        }

        public async Task<Result> Delete(int categoryId)
        {
            try
            {
                await categoryDal.DeleteAsync(categoryId);
                return new SuccessResult(Messages.DeleteCategorySuccess);
            }
            catch (Exception ex)
            {
                return new ErrorResult(ex.Message);
            }
            
        }

        public async Task<DataResult<List<Category>>> GetAll()
        {
            try
            {
                var categories = await categoryDal.GetAll();
                return new SuccessDataResult<List<Category>>(categories);
            }
            catch (Exception ex)
            {
                return new ErrorDataResult<List<Category>>(ex.Message);
            }
            
        }

        public async Task<DataResult<Category>> GetById(int categoryId)
        {
            try
            {
                var category = await categoryDal.Get(i => i.CategoryId == categoryId);
                if (category == null) throw new Exception(Messages.CategoryNotFound);
                return new SuccessDataResult<Category>(category);
            }
            catch (Exception ex)
            {
                return new ErrorDataResult<Category>(ex.Message);
            }
            
        }
    }
}
