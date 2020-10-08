using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Query;

namespace DataAccess.Abstract
{
    public interface IEntityRepository<TEntity> where TEntity : class
    {
        Task AddAsync(TEntity entity);
        Task UpdateAsync(TEntity entity);
        Task DeleteAsync(int id);
        Task<TEntity> Get(Expression<Func<TEntity, bool>> predicate,
                          Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null);
        Task<List<TEntity>> GetAll(int skip = 0,
                             int take = int.MaxValue,
                              Expression<Func<TEntity, bool>> filter = null,
                              Expression<Func<TEntity, object>> orderby = null,
                              Expression<Func<TEntity, object>> orderbyDescending = null,
                              Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null);
    }
}
