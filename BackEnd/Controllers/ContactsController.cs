using System.Threading.Tasks;
using BackEnd.Constant;
using BackEnd.Interfaces;
using BackEnd.Model.Contact;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly IContactRepository _contactRepository;
        public ContactsController(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        [HttpGet]
        public async Task<ActionResult<ContactDto>> GetContacts()
        {
            var contact = await _contactRepository.GetContact();
            return Ok(contact);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ContactDto>> GetCarsById([FromRoute] int id)
        {
            var branch = await _contactRepository.GetContactById(id);
            return Ok(branch);
        }

        [HttpPost]
        public async Task<ActionResult<ContactDto>> CreateBranch([FromBody] ContactDto model)
        {
            var branch = await _contactRepository.CreateContact(model);
            return Created(Endpoint.Contact, branch);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ContactDto>> DeleteBranch([FromRoute] int id)
        {
            var branch = await _contactRepository.DeleteContact(id);
            return Ok(branch);
        }
    }
}