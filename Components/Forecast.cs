using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace HouseProphecy.Components
{
    public class StringTable
    {
        public string[] ColumnNames { get; set; }

        public string[,] Values { get; set; }
    }
    public class Forecast
    {
        public string Result { get; set; }
        public async Task InvokeRequestResponseService(SearchData searchData)
        {
            using (var client = new HttpClient())
            {
                var scoreRequest = new
                {
                    Inputs = new Dictionary<string, StringTable>() {
                        {
                            "input1",
                            new StringTable()
                            {
                                ColumnNames = new string[] {"stateName", "zipCode", "price", "bedRooms", "bathRooms", "square", "cats.ok", "dogs.ok",
                                    "furnished", "no.smoking", "wheelchair.accessible", "apartment", "condo", "cottage.cabin", "duplex",
                                    "flat", "house", "in.law", "loft", "townhouse", "manufactured", "assisted.living", "land", "w.d.in.unit",
                                    "w.d.hookups", "laundry.in.bldg", "laundry.on.site", "no.laundry.on.site", "carport", "attached.garage",
                                    "detached.garage", "off.street.parking", "street.parking", "valet.parking", "no.parking"},
                                Values = new string[,] { {  searchData.State, searchData.ZipCode, "0", searchData.BedRooms, searchData.BathRooms,
                                        searchData.Square, searchData.CatsOk, searchData.DogsOk, searchData.Furnished, searchData.NoSmoking,
                                        searchData.WheelchairAccessible, searchData.Apartment, searchData.Condo, searchData.CottageCabin,
                                        searchData.Duplex, searchData.Flat, searchData.House, searchData.InLaw, searchData.Loft,
                                        searchData.Townhouse, searchData.Manufactured, searchData.AssistedLiving, searchData.Land,
                                        searchData.WDInUnit, searchData.WDHookups, searchData.LaundryInBldg, searchData.LaundryOnSite,
                                        searchData.NoLaundryOnSite, searchData.Carport, searchData.AttachedGarage, searchData.DetachedGarage,
                                        searchData.OffStreetParking, searchData.StreetParking, searchData.ValetParking, searchData.NoParking}, }
                            }
                        },
                    },
                    GlobalParameters = new Dictionary<string, string>()
                    {
                    }
                };
                const string apiKey = "jYWqksieN4PqeviJobODIbEB/3qAyyr33GY5dsEBNMpq/+fMqZR7dusU6csr067Vun9nBB+9r7vqbleSMuVBIg==";
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
                client.BaseAddress = new Uri("https://ussouthcentral.services.azureml.net/workspaces/96b09fabd8cc4ebf96a2b7328937fec4/services/c46506ec650d43adba072b69893c052c/execute?api-version=2.0&details=true");
                var response = await client.PostAsJsonAsync("", scoreRequest);
                if (response.IsSuccessStatusCode)
                {
                    Result = await response.Content.ReadAsStringAsync();
                }
                else
                {
                    Result = $"The request failed with status code: {response.StatusCode}\n{response.Headers.ToString()}\n{await response.Content.ReadAsStringAsync()}";
                }
            }
        }
    }
}