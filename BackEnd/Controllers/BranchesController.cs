using System.Threading.Tasks;
using BackEnd.Constant;
using BackEnd.Interfaces.Repositories;
using BackEnd.Model;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BranchesController : ControllerBase
    {
        private readonly IBranchRepository _branchRepository;
        public BranchesController(IBranchRepository branchRepository)
        {
            _branchRepository = branchRepository;
        }

        [HttpGet]
        public async Task<ActionResult<BranchDto>> GetBranches()
        {
            var branch = await _branchRepository.GetBranch();
            return Ok(branch);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CarDto>> GetCarsById([FromRoute] int id)
        {
            var branch = await _branchRepository.GetBranchById(id);
            return Ok(branch);
        }

        [HttpPost]
        public async Task<ActionResult<CarDto>> CreateBranch([FromBody] BranchDto model)
        {
            var branch = await _branchRepository.CreateBranch(model);
            return Created(Endpoint.Branch, branch);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<CarDto>> UpdateBranch([FromRoute] int id, [FromBody] BranchDto model)
        {
            var branch = await _branchRepository.UpdateBranch(id, model);
            return Ok(branch);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CarDto>> DeleteBranch([FromRoute] int id)
        {
            var branch = await _branchRepository.DeleteBranch(id);
            return Ok(branch);
        }
    }
}