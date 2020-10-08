using DataAccess.Abstract;
using DataAccess.Concrete.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfEntityRepository<TEntity> : IEntityRepository<TEntity>
        where TEntity : class
    {
        protected readonly BlogContext _context;

        public EfEntityRepository(BlogContext context)
        {
            _context = context;
        }

        public async Task AddAsync(TEntity entity)
        {
            _context.Entry(entity).State = EntityState.Added;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.FindAsync<TEntity>(id);
            _context.Entry(entity).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
        }

        public async Task<TEntity> Get(Expression<Func<TEntity, bool>> predicate,
                                       Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null)
        {
            var table = _context.Set<TEntity>().AsNoTracking().AsQueryable();

            if (include != null) table = include(table);

            return await table.FirstOrDefaultAsync(predicate);
        }

        public async Task<List<TEntity>> GetAll(int skip = 0,
                                                int take = int.MaxValue,
                                                Expression<Func<TEntity, bool>> filter = null,
                                                Expression<Func<TEntity, object>> orderby = null,
                                                Expression<Func<TEntity, object>> orderbyDescending = null,
                                                Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null)
        {
            var table = _context.Set<TEntity>().AsNoTracking().AsQueryable();

            if (include != null)
                table = include(table);

            if (filter != null)
                table = table.Where(filter);

            if (orderby != null || orderbyDescending != null)
                table = orderby != null ? table.OrderBy(orderby) : table.OrderByDescending(orderbyDescending);

            return await table.Skip(skip).Take(take).ToListAsync();
        }

        public virtual async Task UpdateAsync(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            await _context.SaveChangesAsync();
        }
    }
}
