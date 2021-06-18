using System;
using Microsoft.AspNetCore.Http;

namespace BackEnd.Model
{
    public class CarDto
    {
        public int CarId { get; set; }
        public string CarName { get; set; }
        public string Description { get; set; }
        public DateTime DateRelease { get; set; }
        public int Price { get; set; }
        public string CarImage { get; set; }
        public int BranchId { get; set; }
        public BranchDto Branch { get; set; }

    }
}