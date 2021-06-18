using System.Collections.Generic;
using System.Threading.Tasks;
using BackEnd.Model;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Interfaces.Repositories
{
    public interface IBranchRepository
    {
        Task<IEnumerable<BranchDto>> GetBranch();
        Task<BranchDto> GetBranchById(int id);
        Task<BranchDto> DeleteBranch(int id);
        Task<BranchDto> UpdateBranch(int id, BranchDto model);
        Task<BranchDto> CreateBranch(BranchDto model);
    }
}