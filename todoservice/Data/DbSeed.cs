using todoservice.Models;

namespace todoservice.Data
{
    public class DbSeed
    {
        public static void Initialize(TodoContext context)
        {
            if (context.Columns.Any())
            {
                return;
            }

            var columns = new List<Column>();
            columns.Add(new Column { Title = "To-Do" });
            columns.Add(new Column { Title = "In Progress" });
            columns.Add(new Column { Title = "Done" });
            context.Columns.AddRange(columns);
            context.SaveChanges();

            if (context.TodoItems.Any())
            {
                return;
            }

            var todos=new List<Todo>();
            todos.Add(new Todo { Content = "Betöltött task", ColumnId=1});
            context.TodoItems.AddRange(todos);
            context.SaveChanges();
        }

    }
}
