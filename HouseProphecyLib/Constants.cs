namespace HouseProphecy.Components
{
    public class Constants
    {

        public static class StoredProcedures
        {
            public static string GetListInfo = "P_GetListInfo";
        }

        public static class Action
        {
            public static string GetPrice = "getPrice";
            public static string GetInfo = "getInfo";
        }
        
        public static class ForecastFields
        {
            public static string ZipCode = "zipCode";
            public static string Price = "price";
            public static string BedRooms = "bedRooms";
            public static string BathRooms = "bathRooms";

            public static string Square = "square";
            public static string SquareFrom = "100";
            public static string SquareTo = "10000";

            public static string CatsOk = "cats.ok";
            public static string DogsOk = "dogs.ok";
            public static string Furnished = "furnished";
            public static string NoSmokinkg = "no.smoking";
            public static string WheelchairAccessible = "wheelchair.accessible";

            public static string HousingType = "housing.type";
            public static string Apartment = "apartment";
            public static string Condo = "condo";
            public static string CottageCabin = "cottage.cabin";
            public static string Duplex = "duplex";
            public static string Flat = "flat";
            public static string House = "house";
            public static string InLaw = "in.law";
            public static string Loft = "loft";
            public static string Townhouse = "townhouse";
            public static string Manufactured = "manufactured";
            public static string AssistedLiving = "assisted.living";
            public static string Land = "land";

            public static string WD = "w.d";
            public static string WDInUnit = "w.d.in.unit";
            public static string InUnit = "InUnit";
            public static string WDHookups = "w.d.hookups";

            public static string Laundry = "laundry";
            public static string LaundryInBldg = "laundry.in.bldg";
            public static string InBldg = "InBldg";
            public static string LaundryOnSite = "laundry.on.site";
            public static string OnSite = "OnSite";
            public static string NoLaundryOnSite = "no.laundry.on.site";

            public static string Parking = "parking";
            public static string Carport = "carport";
            public static string AttachedGarage = "attached.garage";
            public static string DetachedGarage = "detached.garage";
            public static string OffStreetParking = "off.street.parking";
            public static string StreetParking = "street.parking";
            public static string ValetParking = "valet.parking";
            public static string NoParking = "no.parking";

            public static string NoMatter = "NoMatter";
            public static string Nothing = "null";
            public static string Yes = "Yes";
            public static string ErrorZipCode = "Enter ZIP code";
        }
    }
}