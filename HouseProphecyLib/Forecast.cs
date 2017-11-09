using HouseProphecyLib;
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
        public async Task InvokeRequestResponseService(ModelData searchData)
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
                                ColumnNames = new string[] {Constants.ForecastFields.ZipCode, Constants.ForecastFields.Price, Constants.ForecastFields.BedRooms,
                                                            Constants.ForecastFields.BathRooms, Constants.ForecastFields.Square, Constants.ForecastFields.CatsOk,
                                                            Constants.ForecastFields.DogsOk, Constants.ForecastFields.Furnished, Constants.ForecastFields.NoSmokinkg,
                                                            Constants.ForecastFields.WheelchairAccessible, Constants.ForecastFields.HousingType, Constants.ForecastFields.WD,
                                                            Constants.ForecastFields.Laundry, Constants.ForecastFields.Parking},
                                Values = new string[,] { { searchData.ZipCode, "0", searchData.BedRooms, searchData.BathRooms,
                                        searchData.Square, searchData.CatsOk, searchData.DogsOk, searchData.Furnished, searchData.NoSmoking,
                                        searchData.WheelchairAccessible, searchData.HousingType, searchData.Laundry, searchData.LaundrySeparation, searchData.Parking}, }
                            }
                        },
                    },
                    GlobalParameters = new Dictionary<string, string>()
                    {
                    }
                };                
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", HPResources.AzureSearchApiKey);
                client.BaseAddress = new Uri(HPResources.Uri);
                //Assembly System.Net.Http.Formatting for PostAsJsonAsync
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