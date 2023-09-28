using Crito.Models;
using Crito.Services;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Website.Controllers;

namespace Crito.Controllers
{
    public class ContactsController : SurfaceController
    {
        private readonly ContactFormService _contactFormService;


        public ContactsController(ContactFormService contactFormService, IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services, AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider) : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _contactFormService = contactFormService;
        }


        [HttpPost]
        public async Task<IActionResult> Index(ContactForm contactForm)
        {
            if (!ModelState.IsValid)
                return CurrentUmbracoPage();

            // Skapa en instans av MailService för att skicka e-postmeddelanden
            using var mail = new MailService("no-reply@crito.com", "smtp.crito.com", 465, "contact-form@crito.com", "BytMig123!");

            // Skicka ett e-postmeddelande till avsändaren för att bekräfta mottagandet
            await mail.SendAsync(contactForm.Email, "Your contact request was received.", "Hi, your request was received and we will be in contact with you as soon as possible.");

            // Skicka ett e-postmeddelande till mottagaren (dig själv) med kontaktinformationen
            await mail.SendAsync("umbraco@crito.com", $"{contactForm.Name} sent a contact request.", contactForm.Message);

            // Använd ContactFormService för att spara kontaktformuläret till databasen
            await _contactFormService.AddContactFormAsync(contactForm);

            return LocalRedirect(contactForm.RedirectUrl ?? "/");
        }
    }
}
