using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Data;
using BackEnd.Entities;
using BackEnd.Interfaces.Repositories;
using BackEnd.Model;
using BackEnd.Model.Car;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositories.CarRepository
{
    public class CarRepository : ICarRepository
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IWebHostEnvironment _hostEnvironment;
        public CarRepository(ApplicationDbContext dbContext, IWebHostEnvironment hostEnvironment)
        {
            _dbContext = dbContext;
            _hostEnvironment = hostEnvironment;

        }

        public async Task<IEnumerable<CarDto>> GetCars()
        {
            return await _dbContext.Cars.Select(car => new CarDto
            {
                CarId = car.CarId,
                CarName = car.CarName,
                Description = car.Description,
                DateRelease = car.DateRelease,
                BranchId = car.BranchId,
                CarImage = car.CarImage,
                Price = car.Price
            }).ToListAsync();
        }

        public async Task<CarDto> GetCarById(int id)
        {
            var cars = await _dbContext.Cars.FindAsync(id);
            if (cars == null)
            {
                throw new Exception("Not found");
            }
            var car = new CarDto
            {
                CarId = cars.CarId,
                CarImage = cars.CarImage,
                CarName = cars.CarName,
                Description = cars.Description,
                DateRelease = cars.DateRelease,
                BranchId = cars.BranchId,
                Price = cars.Price
            };
            return car;
        }
        public async Task<CarDto> CreateCar(CarFormDto model)
        {
            // if (model.ImageFile != null)
            // {
            //     model.Image = await SaveImage(model.ImageFile);
            // }
            var car = new Car
            {
                CarName = model.CarName,
                Description = model.Description,
                Price = model.Price,
                BranchId = model.BranchId,
                DateRelease = model.DateRelease,
                CarImage = model.Image,

            };
            _dbContext.Cars.Add(car);
            await _dbContext.SaveChangesAsync();

            var cars = new CarDto
            {
                CarId = car.CarId,
                CarImage = car.CarImage,
                CarName = car.CarName,
                Description = car.Description,
                DateRelease = car.DateRelease,
                BranchId = car.BranchId,
                Price = car.Price,
                
            };
            return cars;
        }

        public async Task<CarDto> UpdateCar(int id,  CarFormDto model)
        {
            // if (model.ImageFile != null)
            // {
            //     model.Image = await SaveImage(model.ImageFile);
            // }
            var car = await _dbContext.Cars.FirstOrDefaultAsync(x => x.CarId == id);
            if (car == null)
            {
                throw new Exception("Not found");
            }
            car.CarName = model.CarName;
            car.Description = model.Description;
            car.Price = model.Price;
            car.BranchId = model.BranchId;
            car.DateRelease = model.DateRelease;
            car.CarImage = model.Image;

            await _dbContext.SaveChangesAsync();
            var cars = new CarDto
            {
                CarId = car.CarId,
                CarImage = car.CarImage,
                CarName = car.CarName,
                Description = car.Description,
                DateRelease = car.DateRelease,
                BranchId = car.BranchId,
                Price = car.Price
            };
            return cars;
        }

        public async Task<CarDto> DeleteCar(int id)
        {
            var car = await _dbContext.Cars.FirstOrDefaultAsync(x => x.CarId == id);
            if (car == null)
            {
                throw new Exception("Not found");
            }
            _dbContext.Cars.Remove(car);
            await _dbContext.SaveChangesAsync();

            var cars = new CarDto
            {
                CarId = car.CarId,
                CarImage = car.CarImage,
                CarName = car.CarName,
                Description = car.Description,
                DateRelease = car.DateRelease,
                BranchId = car.BranchId,
                Price = car.Price
            };
            return cars;
        }

        public async Task<List<CarDto>> GetCarsByBranch(int id){
            var cars = await _dbContext.Cars.Where(x=> x.BranchId == id).ToListAsync();
            List<CarDto> productListVm = new();
            foreach (var product in cars)
            {
                CarDto productVm = new()
                {
                    BranchId = product.BranchId,
                    Description = product.Description,
                    CarId = product.CarId,
                    DateRelease = product.DateRelease,
                    CarName = product.CarImage,
                    Price = product.Price,
                    CarImage = product.CarImage
                };
                productListVm.Add(productVm);
            }
            return productListVm;
        }

        public async Task<List<CarDto>> GetCarsByBranchRelation(int id){
            var cars = await _dbContext.Cars.FirstOrDefaultAsync(x=> x.CarId == id);
            var cars1 = await _dbContext.Cars.Where(x=> x.CarId != id && x.BranchId == cars.BranchId).ToListAsync();
            List<CarDto> productListVm = new();
            foreach (var product in cars1)
            {
                CarDto productVm = new()
                {
                    BranchId = product.BranchId,
                    Description = product.Description,
                    CarId = product.CarId,
                    DateRelease = product.DateRelease,
                    CarName = product.CarImage,
                    Price = product.Price,
                    CarImage = product.CarImage
                };
                productListVm.Add(productVm);
            }
            return productListVm;
        }

        public async Task<List<CarDto>> GetCarsByName(string name){
            var cars = await _dbContext.Cars.Where(x => x.CarName.Contains(name)).ToListAsync();
            List<CarDto> productListVm = new();
            foreach (var product in cars)
            {
                CarDto productVm = new()
                {
                    BranchId = product.BranchId,
                    Description = product.Description,
                    CarId = product.CarId,
                    DateRelease = product.DateRelease,
                    CarName = product.CarImage,
                    Price = product.Price,
                    CarImage = product.CarImage
                };
                productListVm.Add(productVm);
            }
            return productListVm;
        }
        // private async Task<string> SaveImage(IFormFile imageFile)
        // {
        //     string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
        //     imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
        //     var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "wwwroot/images", imageName);
        //     using (var fileStream = new FileStream(imagePath, FileMode.Create))
        //     {
        //         await imageFile.CopyToAsync(fileStream);
        //     }
        //     return imageName;
        // }

    }
}