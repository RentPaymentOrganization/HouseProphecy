using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using HouseProphecy.Components;
using System.Globalization;
using RentPayment.DataProviders;
using System.Data;
using WebForecast.Components;
using System.Web.Script.Serialization;

namespace HouseProphecy
{
    public partial class HouseProphecy : Page
    {
        public SearchData searchData = new SearchData();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (IsAjaxRequest(Request))
                {
                    //var json = Request.Form[0];
                    ForecastJSON json = JSObjectOperation.Instance.DeserializeJSObject<ForecastJSON>(Request.Form[0]);

                    Forecast forecast = new Forecast();
                    FillSearchData(json);
                    forecast.InvokeRequestResponseService(searchData).Wait();

                    string str = forecast.Result;
                    str = str.Substring(str.LastIndexOf(",") + 1);
                    str = str.Substring(0, str.IndexOf("]"));
                    if (str != "null")
                    {
                        str = str.Remove(0, 1);
                        str = str.Remove(str.Length - 1);
                        NumberFormatInfo formatInfo = (NumberFormatInfo)CultureInfo.GetCultureInfo("en-US").NumberFormat.Clone();
                        str = Math.Round(double.Parse(str, formatInfo), 2).ToString();
                    }
                    Response.Write(str);
                    Response.End();
                }
            }
        }

        private void FillSearchData(ForecastJSON json)
        {
            searchData.ZipCode = json.ZipCode;
            searchData.BedRooms = json.BedRooms;
            searchData.BathRooms = json.BathRooms;
            searchData.Square = json.SquareTo;
            searchData.CatsOk = json.CatsOk;
            searchData.DogsOk = json.DogsOk;
            searchData.Furnished = json.Furnished;
            searchData.NoSmoking = json.NoSmokinkg;
            searchData.WheelchairAccessible = json.WheelchairAccessible;
            searchData.HousingType = HousingType(json);
            searchData.WD = json.Laundry;
            searchData.Laundry = json.LaundrySeparation;
            searchData.Parking = Parking(json);
        }

        private List<string> Parking(ForecastJSON json)
        {
            List<string> parking = new List<string>();
            if (json.Apartment != null)
            {
                parking.Add(json.Carport.ToString());
            }
            if (json.Condo != null)
            {
                parking.Add(json.AttachedGarage.ToString());
            }
            if (json.CottageCabin != null)
            {
                parking.Add(json.DetachedGarage.ToString());
            }
            if (json.Duplex != null)
            {
                parking.Add(json.OffStreetParking.ToString());
            }
            if (json.Flat != null)
            {
                parking.Add(json.StreetParking.ToString());
            }
            if (json.House != null)
            {
                parking.Add(json.ValetParking.ToString());
            }
            if (json.InLaw != null)
            {
                parking.Add(json.NoParking.ToString());
            }
            return parking;
        }

        private List<string> HousingType(ForecastJSON json)
        {
            List<string> housingType = new List<string>();
            if (json.Apartment != null)
            {
                housingType.Add(json.Apartment.ToString());
            }
            if (json.Condo != null)
            {
                housingType.Add(json.Condo.ToString());
            }
            if (json.CottageCabin != null)
            {
                housingType.Add(json.CottageCabin.ToString());
            }
            if (json.Duplex != null)
            {
                housingType.Add(json.Duplex.ToString());
            }
            if (json.Flat != null)
            {
                housingType.Add(json.Flat.ToString());
            }
            if (json.House != null)
            {
                housingType.Add(json.House.ToString());
            }
            if (json.InLaw != null)
            {
                housingType.Add(json.InLaw.ToString());
            }
            if (json.Loft != null)
            {
                housingType.Add(json.Loft.ToString());
            }
            if (json.Townhouse != null)
            {
                housingType.Add(json.Townhouse.ToString());
            }
            if (json.Manufactured != null)
            {
                housingType.Add(json.Manufactured.ToString());
            }
            if (json.AssistedLiving != null)
            {
                housingType.Add(json.AssistedLiving.ToString());
            }
            if (json.Land != null)
            {
                housingType.Add(json.Land.ToString());
            }
            return housingType;
        }

        private string ChoiseRadioButton(RadioButton rbNull, RadioButton rb0, RadioButton rb1)
        {
            string message = "";
            if (rbNull.Checked)
            {
                message = " ";
            }
            else if (rb0.Checked)
            {
                message = "0";
            }
            else if (rb1.Checked)
            {
                message = "1";
            }
            return message;
        }

        public bool IsAjaxRequest(HttpRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException("request");
            }
            var context = HttpContext.Current;
            var isCallbackRequest = false; // callback requests are ajax requests
            if (context != null && context.CurrentHandler != null && context.CurrentHandler is System.Web.UI.Page)
            {
                isCallbackRequest = ((System.Web.UI.Page)context.CurrentHandler).IsCallback;
            }
            return isCallbackRequest || (request["X-Requested-With"] == "XMLHttpRequest") || (request.Headers["X-Requested-With"] == "XMLHttpRequest");
        }
    }
}