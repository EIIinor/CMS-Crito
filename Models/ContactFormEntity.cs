using System.ComponentModel.DataAnnotations;

namespace Crito.Models;

public class ContactFormEntity
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Namn är obligatorisk.")]
    public string Name { get; set; } = null!;


    [EmailAddress]
    [Required(ErrorMessage = "E-postadress är obligatorisk.")]
    [RegularExpression(@"^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$", ErrorMessage = "Ogiltig e-postadress.")]
    public string Email { get; set; } = null!;


    [Required(ErrorMessage = "Meddelande är obligatorisk.")]
    public string Message { get; set; } = null!;

}
