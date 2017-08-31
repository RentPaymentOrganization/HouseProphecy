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
            public static string GetListInfo = "P_GetListInfo";
        }
    }
}