using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Data;
using BackEnd.Entities;
using BackEnd.Interfaces.Repositories;
using BackEnd.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositories.BranchRepository
{
    public class BranchRepository : IBranchRepository
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IWebHostEnvironment _hostEnvironment;
        public BranchRepository(ApplicationDbContext dbContext, IWebHostEnvironment hostEnvironment)
        {
            _dbContext = dbContext;
            _hostEnvironment = hostEnvironment;

        }

        public async Task<IEnumerable<BranchDto>> GetBranch()
        {
            return await _dbContext.Branches.Select(branch => new BranchDto
            {
                BranchId = branch.BranchId,
                BranchName = branch.BranchName
            }).ToListAsync();
        }

        public async Task<BranchDto> GetBranchById(int id)
        {
            var cars = await _dbContext.Branches.FindAsync(id);
            if (cars == null)
            {
                throw new Exception("Not found");
            }
            var car = new BranchDto
            {
                BranchId = cars.BranchId,
                BranchName = cars.BranchName
            };

            return car;
        }
        public async Task<BranchDto> CreateBranch(BranchDto model)
        {
            var branch = new Branch
            {
                BranchName = model.BranchName
            };
            _dbContext.Branches.Add(branch);
            await _dbContext.SaveChangesAsync();

            var branches = new BranchDto
            {
                BranchName = branch.BranchName,
                BranchId = branch.BranchId,
            };
            return branches;
        }

        public async Task<BranchDto> UpdateBranch(int id, BranchDto model)
        {

            var branch = await _dbContext.Branches.FirstOrDefaultAsync(x => x.BranchId == id);
            if (branch == null)
            {
                throw new Exception("Not found");
            }

            branch.BranchName = model.BranchName;

            await _dbContext.SaveChangesAsync();
            var branches = new BranchDto
            {
                BranchName = branch.BranchName,
                BranchId = branch.BranchId,
            };
            return branches;
        }

        public async Task<BranchDto> DeleteBranch(int id)
        {
            var branch = await _dbContext.Branches.FirstOrDefaultAsync(x => x.BranchId == id);
            if (branch == null)
            {
                throw new Exception("Not found");
            }
            _dbContext.Branches.Remove(branch);
            await _dbContext.SaveChangesAsync();

            var branches = new BranchDto
            {
                BranchName = branch.BranchName,
                BranchId = branch.BranchId,
            };
            return branches;
        }
    }
}