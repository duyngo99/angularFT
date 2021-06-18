using System.Collections.Generic;
using System.Threading.Tasks;
using BackEnd.Model;
using BackEnd.Model.Contact;

namespace BackEnd.Interfaces
{
    public interface IContactRepository
    {
        Task<IEnumerable<ContactDto>> GetContact();
        Task<ContactDto> GetContactById(int id);
        Task<ContactDto> DeleteContact(int id);
        Task<ContactDto> CreateContact(ContactDto model);
    }
}