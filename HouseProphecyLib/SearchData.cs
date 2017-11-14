using System.Collections.Generic;

namespace HouseProphecy.Components
{
    /// <summary>
    /// Aggregation of data on the parameters on which the rent price of the premises depends on the forecast
    /// </summary>
    public class SearchData
    {
        public string ZipCode { get; set; } = string.Empty;
        public string BedRooms { get; set; } = string.Empty;
        public string BathRooms { get; set; } = string.Empty;
        public string Square { get; set; } = string.Empty;
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