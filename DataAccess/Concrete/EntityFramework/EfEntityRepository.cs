using DataAccess.Abstract;
using DataAccess.Concrete.Contexts;
using Microsoft.EntityFrameworkCore;
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

        public async Task<TEntity> Get(Expression<Func<TEntity, bool>> predicate)
        {
            return await _context.Set<TEntity>().FirstOrDefaultAsync(predicate);
        }

        public virtual async Task<List<TEntity>> GetAll(Expression<Func<TEntity, bool>> predicate = null)
        {
            return predicate == null ? await _context.Set<TEntity>().ToListAsync() :
                                       await _context.Set<TEntity>().Where(predicate).ToListAsync();
        }

        public virtual async Task UpdateAsync(TEntity entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
