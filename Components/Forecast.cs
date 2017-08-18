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
                                ColumnNames = new string[] {"zipCode", "price", "bedRooms", "bathRooms", "square", "cats.ok", "dogs.ok",
                                    "furnished", "no.smoking", "wheelchair.accessible", "housing.type", "w.d", "laundry", "parking"},
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
                const string apiKey = "00IlKN6dag6YrcYXiiT2S3iHgcE5tffscqGg9YMUHv5yCLITDgEi4j1GEh/AkiPVRcGYnGuBP3TfPVt/GyqD7w==";
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
                client.BaseAddress = new Uri("https://ussouthcentral.services.azureml.net/workspaces/96b09fabd8cc4ebf96a2b7328937fec4/services/020398bb16e34137b5296421c7da3eb1/execute?api-version=2.0&details=true");
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