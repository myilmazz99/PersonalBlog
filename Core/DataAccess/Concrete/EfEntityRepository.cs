using Core.DataAccess.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.DataAccess.Concrete
{
    public class EfEntityRepository<TEntity, TContext> : IEntityRepository<TEntity>
        where TEntity : class
        where TContext : DbContext, new()
    {
        public async Task AddAsync(TEntity entity)
        {
            using (TContext context = new TContext())
            {
                context.Entry(entity).State = EntityState.Added;
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteAsync(int id)
        {
            using (TContext context = new TContext())
            {
                var entity = await context.FindAsync<TEntity>(id);
                context.Entry(entity).State = EntityState.Deleted;
                await context.SaveChangesAsync();
            }
        }

        public async Task<TEntity> Get(Expression<Func<TEntity, bool>> predicate)
        {
            using (TContext context = new TContext())
            {
                return await context.Set<TEntity>().FirstOrDefaultAsync(predicate);
            }
        }

        public virtual async Task<List<TEntity>> GetAll(Expression<Func<TEntity, bool>> predicate = null)
        {
            using (TContext context = new TContext())
            {
                return predicate == null ? await context.Set<TEntity>().ToListAsync() :
                                           await context.Set<TEntity>().Where(predicate).ToListAsync();
            }
        }

        public virtual async Task UpdateAsync(TEntity entity)
        {
            using (TContext context = new TContext())
            {
                context.Entry(entity).State = EntityState.Modified;
                await context.SaveChangesAsync();
            }
        }
    }
}
