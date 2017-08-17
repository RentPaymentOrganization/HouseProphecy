using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseProphecy.Components
{
    public class SearchData
    {
        public string ZipCode { get; set; }
        public string BedRooms { get; set; }
        public string BathRooms { get; set; }
        public string Square { get; set; }
        public List<string> CatsOk { get; set; } = new List<string>();
        public List<string> DogsOk { get; set; } = new List<string>();
        public List<string> Furnished { get; set; } = new List<string>();
        public List<string> NoSmoking { get; set; } = new List<string>();
        public List<string> WheelchairAccessible { get; set; } = new List<string>();
        public List<string> HousingType { get; set; } = new List<string>();
        public List<string> Laundry { get; set; } = new List<string>();
        public List<string> LaundrySeparation { get; set; } = new List<string>();
        public List<string> Parking { get; set; } = new List<string>();
    }
}