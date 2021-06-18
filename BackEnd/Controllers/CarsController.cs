using System.Threading.Tasks;
using BackEnd.Constant;
using BackEnd.Interfaces.Repositories;
using BackEnd.Model;
using BackEnd.Model.Car;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : ControllerBase
    {
        private readonly ICarRepository _carRepository;
        public CarsController(ICarRepository carRepository)
        {
            _carRepository = carRepository;
        }

        [HttpGet]
        public async Task<ActionResult<CarDto>> GetCars()
        {
            var car = await _carRepository.GetCars();
            return Ok(car);
        }

        [HttpGet("branch/{id}")]
        public async Task<ActionResult<CarDto>> GetCarsByBranch([FromRoute] int id)
        {
            var car = await _carRepository.GetCarsByBranch(id);
            return Ok(car);
        }

        [HttpGet("name")]
        public async Task<ActionResult<CarDto>> GetCarsByName([FromQuery] string name)
        {
            var car = await _carRepository.GetCarsByName(name);
            return Ok(car);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CarDto>> GetCarsById([FromRoute] int id)
        {
            var car = await _carRepository.GetCarById(id);
            return Ok(car);
        }

        [HttpGet("relation/{id}")]
        public async Task<ActionResult<CarDto>> GetCarsByRelationId([FromRoute] int id)
        {
            var car = await _carRepository.GetCarsByBranchRelation(id);
            return Ok(car);
        }

        [HttpPost]
        public async Task<ActionResult<CarDto>> CreateCar([FromBody] CarFormDto model)
        {
            var car = await _carRepository.CreateCar(model);
            return Created(Endpoint.Car, car);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<CarDto>> UpdateCar([FromRoute] int id, [FromBody] CarFormDto model)
        {
            var car = await _carRepository.UpdateCar(id, model);
            return Ok(car);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CarDto>> DeleteCar([FromRoute] int id)
        {
            var car = await _carRepository.DeleteCar(id);
            return Ok(car);
        }

    }
}