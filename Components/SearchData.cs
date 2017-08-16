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
        public string CatsOk { get; set; }
        public string DogsOk { get; set; }
        public string Furnished { get; set; }
        public string NoSmoking { get; set; }
        public string WheelchairAccessible { get; set; }
        public List<string> HousingType { get; set; } = new List<string>();
        public string WD { get; set; }
        public string Laundry { get; set; }
        public List<string> Parking { get; set; } = new List<string>();
    }
}