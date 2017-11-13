namespace HouseProphecy.Components
{
    /// <summary>
    /// The parameters on which the rent price of the premises depends in the forecast
    /// </summary>
    public class ModelData
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
        public string HousingType { get; set; }
        public string Laundry { get; set; }
        public string LaundrySeparation { get; set; }
        public string Parking { get; set; }
    }
}