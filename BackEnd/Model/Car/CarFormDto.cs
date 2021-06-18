using System;
using Microsoft.AspNetCore.Http;

namespace BackEnd.Model.Car
{
    public class CarFormDto
    {
        public string CarName { get; set; }
        // public string ImageFile { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public DateTime DateRelease { get; set; }
        public int BranchId { get; set; }

    }
}