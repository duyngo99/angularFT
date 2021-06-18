using System.Collections.Generic;
using System.Threading.Tasks;
using BackEnd.Model;
using BackEnd.Model.Car;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Interfaces.Repositories
{
    public interface ICarRepository
    {
        Task<IEnumerable<CarDto>> GetCars();
        Task<CarDto> GetCarById(int id);
        Task<CarDto> DeleteCar(int id);
        Task<CarDto> UpdateCar(int id, CarFormDto model);
        Task<CarDto> CreateCar(CarFormDto model);
        Task<List<CarDto>> GetCarsByName(string name);
        Task<List<CarDto>> GetCarsByBranch(int id);
        Task<List<CarDto>> GetCarsByBranchRelation(int id);
    }
}