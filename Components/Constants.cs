using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseProphecy.Components
{
    public class Constants
    {
        public static class ConnectionNames
        {
            public static string ForecastAzureConnection = "ForecastAzureConnection";
            public static string RentPaymentConnectionExpress = "RentPaymentConnectionExpress";
        }

        public static class StoredProcedures
        {
            public static string GetStateNames = "P_GetListStateName";
            public static string GetCountyNames = "P_GetListCountyName";
            public static string GetCityNames = "P_GetListCityName";
            public static string GetStreetNames = "P_GetListStreetName";
            public static string GetStreetNumberNames = "P_GetListStreetNumberName";
            public static string GetZipCodeNames = "P_GetListZipCodeName";
            public static string GetBedRoomNames = "P_GetListBedRoomsName";
            public static string GetBathRoomNames = "P_GetListBathRoomsName";
        }
    }
}