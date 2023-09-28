using System.ComponentModel.DataAnnotations;

namespace Crito.Models;

public class SubscriberEntity
{
    [Key]
    [EmailAddress]
    [Required(ErrorMessage = "E-postadress är obligatorisk.")]
    [RegularExpression(@"^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$", ErrorMessage = "Ogiltig e-postadress.")]
    public string Email { get; set; } = null!;
}
