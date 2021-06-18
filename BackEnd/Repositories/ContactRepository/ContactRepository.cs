using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Data;
using BackEnd.Entities;
using BackEnd.Interfaces;
using BackEnd.Model.Contact;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositories.ContactRepository
{
    public class ContactRepository : IContactRepository
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IWebHostEnvironment _hostEnvironment;
        public ContactRepository(ApplicationDbContext dbContext, IWebHostEnvironment hostEnvironment)
        {
            _dbContext = dbContext;
            _hostEnvironment = hostEnvironment;

        }

        public async Task<IEnumerable<ContactDto>> GetContact()
        {
            return await _dbContext.Contacts.Select(contact => new ContactDto
            {
                ContactId = contact.ContactId,
                Name = contact.Name,
                PhoneNumber = contact.PhoneNumber,
                Email = contact.Email,
                Description = contact.Description
            }).ToListAsync();
        }

        public async Task<ContactDto> GetContactById(int id)
        {
            var contacts = await _dbContext.Contacts.FindAsync(id);
            if (contacts == null)
            {
                throw new Exception("Not found");
            }
            var contact = new ContactDto
            {
                ContactId = contacts.ContactId,
                Name = contacts.Name,
                PhoneNumber = contacts.PhoneNumber,
                Email = contacts.Email,
                Description = contacts.Description
            };

            return contact;
        }
        public async Task<ContactDto> CreateContact(ContactDto model)
        {
            var contact = new Contact
            {
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                Name = model.Name,
                Description = model.Description,
            };
            _dbContext.Contacts.Add(contact);
            await _dbContext.SaveChangesAsync();

            var contacts = new ContactDto
            {
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                Description = model.Description,
                Name = model.Name,
                ContactId = model.ContactId
            };
            return contacts;
        }

        public async Task<ContactDto> DeleteContact(int id)
        {
            var contact = await _dbContext.Contacts.FirstOrDefaultAsync(x => x.ContactId == id);
            if (contact == null)
            {
                throw new Exception("Not found");
            }
            _dbContext.Contacts.Remove(contact);
            await _dbContext.SaveChangesAsync();

            var contacts = new ContactDto
            {
                ContactId = contact.ContactId,
                PhoneNumber = contact.PhoneNumber,
                Email = contact.Email,
                Description = contact.Description,
                Name = contact.Name,
            };
            return contacts;
        }
    }
}