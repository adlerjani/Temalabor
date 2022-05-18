using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace todoservice.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<Todo> TodoItems { get; set; } = null!;
        public DbSet<Column> Columns { get; set; } = null!;
    }
}
