using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace BackEnd.Entities
{
    public class Car
    {
        [Key]
        public int CarId { get; set; }
        public string CarName { get; set; }
        public string Description { get; set; }
        public DateTime DateRelease { get; set; }
        public string CarImage { get; set; }
        public int Price { get; set; }
        public int BranchId { get; set; }
        public Branch Branch { get; set; }

    }
}