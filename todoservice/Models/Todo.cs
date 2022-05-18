using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace todoservice.Models
{
    public class Todo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TodoId { get; set; }
        public int ColumnId { get; set; }

        [StringLength(255)]
        public string Content { get; set; }

        public int OrderId { get; set; }

        [JsonIgnore]
        public Column Column { get; set; }
    }
}
