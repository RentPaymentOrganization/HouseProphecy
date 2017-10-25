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
        public ModelData modelData = new ModelData();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (IsAjaxRequest(Request))
                {
                    string str = "";
                    ForecastJSON json = JSObjectOperation.Instance.DeserializeJSObject<ForecastJSON>(Request.Form[0]);
                    if (json.Action == "getPrice")
                    {
                        Forecast forecast = new Forecast();
                        double val = 0;
                        int count = 0;
                        FillSearchData(json);
                        foreach (var catsOk in searchData.CatsOk)
                        {
                            modelData.CatsOk = catsOk;
                            foreach (var dogsOk in searchData.DogsOk)
                            {
                                modelData.DogsOk = dogsOk;
                                foreach (var furnished in searchData.Furnished)
                                {
                                    modelData.Furnished = furnished;
                                    foreach (var noSmoking in searchData.NoSmoking)
                                    {
                                        modelData.NoSmoking = noSmoking;
                                        foreach (var wheelchairAccessible in searchData.WheelchairAccessible)
                                        {
                                            modelData.WheelchairAccessible = wheelchairAccessible;
                                            foreach (var housingType in searchData.HousingType)
                                            {
                                                modelData.HousingType = housingType;
                                                foreach (var laundry in searchData.Laundry)
                                                {
                                                    modelData.Laundry = laundry;
                                                    foreach (var laundrySeparation in searchData.LaundrySeparation)
                                                    {
                                                        modelData.LaundrySeparation = laundrySeparation;
                                                        foreach (var parking in searchData.Parking)
                                                        {
                                                            modelData.Parking = parking;
                                                            modelData.ZipCode = searchData.ZipCode;
                                                            modelData.BedRooms = searchData.BedRooms;
                                                            modelData.BathRooms = searchData.BathRooms;
                                                            modelData.Square = searchData.Square;
                                                            //DateTime begin = DateTime.Now;
                                                            forecast.InvokeRequestResponseService(modelData).Wait();
                                                            //DateTime end = DateTime.Now;
                                                            //TimeSpan rez = end - begin;
                                                            str = forecast.Result;
                                                            str = str.Substring(str.LastIndexOf(",") + 1);
                                                            str = str.Substring(0, str.IndexOf("]"));
                                                            if (str != "null")
                                                            {
                                                                str = str.Remove(0, 1);
                                                                str = str.Remove(str.Length - 1);
                                                                NumberFormatInfo formatInfo = (NumberFormatInfo)CultureInfo.GetCultureInfo("en-US").NumberFormat.Clone();
                                                                val += double.Parse(str, formatInfo);
                                                                count++;
                                                            }
                                                            else
                                                            {
                                                                goto exit;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        str = Math.Round(val / count, 2).ToString();
                        exit: if (str == "null")
                        {
                            str = "Enter ZIP code";
                        }
                    }
                    else if (json.Action == "getInfo")
                    {
                        str = DataTableToJSON(DataProvider.Instance.GetListInfo(json.State, json.County, json.City, json.Street, json.StreetNumber, json.ZipCode).Tables[0]);
                    }
                   
                    Response.Write(str);
                    Response.End();
                }
            }
        }
        private string DataTableToJSON(DataTable table)
        {
            List<Dictionary<string, object>> list = new List<Dictionary<string, object>>();

            foreach (DataRow row in table.Rows)
            {
                Dictionary<string, object> dict = new Dictionary<string, object>();

                foreach (DataColumn col in table.Columns)
                {
                    dict[col.ColumnName] = (Convert.ToString(row[col]));
                }
                list.Add(dict);
            }
            JavaScriptSerializer serializer = new JavaScriptSerializer();

            return serializer.Serialize(list);
        }

        private void FillSearchData(ForecastJSON json)
        {
            searchData.ZipCode = json.ZipCode;
            searchData.BedRooms = json.BedRooms;
            searchData.BathRooms = json.BathRooms;
            NumberFormatInfo formatInfo = (NumberFormatInfo)CultureInfo.GetCultureInfo("en-US").NumberFormat.Clone();
            if (json.SquareFrom == null)
            {
                json.SquareFrom = "100";
            }
            if (json.SquareTo == null)
            {
                json.SquareTo = "10000";
            }
            searchData.Square = ((double.Parse(json.SquareFrom, formatInfo) + double.Parse(json.SquareTo, formatInfo)) / 2).ToString();
            searchData.CatsOk = ChoiseRadioButton(json.CatsOk);
            searchData.DogsOk = ChoiseRadioButton(json.DogsOk);
            searchData.Furnished = ChoiseRadioButton(json.Furnished);
            searchData.NoSmoking = ChoiseRadioButton(json.NoSmokinkg);
            searchData.WheelchairAccessible = ChoiseRadioButton(json.WheelchairAccessible);
            searchData.HousingType = HousingType(json);
            searchData.Laundry = Laundry(json.Laundry);
            searchData.LaundrySeparation = LaundrySeparation(json.LaundrySeparation);
            searchData.Parking = Parking(json);
        }

        private List<string> LaundrySeparation(string str)
        {
            List<string> laundrySeparation = new List<string>();
            if (str == "NoMatter")
            {
                laundrySeparation.Add("laundry.in.bldg");
                laundrySeparation.Add("laundry.on.site");
                laundrySeparation.Add("no.laundry.on.site");
            }
            else if (str == "InBldg")
            {
                laundrySeparation.Add("laundry.in.bldg");
            }
            else if (str == "OnSite")
            {
                laundrySeparation.Add("laundry.on.site");
            }
            else
            {
                laundrySeparation.Add("no.laundry.on.site");
            }
            return laundrySeparation;
        }

        private List<string> Laundry(string str)
        {
            List<string> laundry = new List<string>();
            if (str == "NoMatter")
            {
                laundry.Add("w.d.in.unit");
                laundry.Add("w.d.hookups");
            }
            else if (str == "InUnit")
            {
                laundry.Add("w.d.in.unit");
            }
            else
            {
                laundry.Add("w.d.hookups");
            }
            return laundry;
        }

        private List<string> Parking(ForecastJSON json)
        {
            List<string> parking = new List<string>();
            if (json.Carport != null)
            {
                parking.Add("carport");
            }
            if (json.AttachedGarage != null)
            {
                parking.Add("attached.garage");
            }
            if (json.DetachedGarage != null)
            {
                parking.Add("detached.garage");
            }
            if (json.OffStreetParking != null)
            {
                parking.Add("off.street.parking");
            }
            if (json.StreetParking != null)
            {
                parking.Add("street.parking");
            }
            if (json.ValetParking != null)
            {
                parking.Add("valet.parking");
            }
            if (json.NoParking != null)
            {
                parking.Add("no.parking");
            }
            if (parking.Count == 0)
            {
                parking.Add("carport");
                parking.Add("attached.garage");
                parking.Add("detached.garage");
                parking.Add("off.street.parking");
                parking.Add("street.parking");
                parking.Add("valet.parking");
                parking.Add("no.parking");
            }
            return parking;
        }

        private List<string> HousingType(ForecastJSON json)
        {
            List<string> housingType = new List<string>();
            if (json.Apartment != null)
            {
                housingType.Add("apartment");
            }
            if (json.Condo != null)
            {
                housingType.Add("condo");
            }
            if (json.CottageCabin != null)
            {
                housingType.Add("cottage.cabin");
            }
            if (json.Duplex != null)
            {
                housingType.Add("duplex");
            }
            if (json.Flat != null)
            {
                housingType.Add("flat");
            }
            if (json.House != null)
            {
                housingType.Add("house");
            }
            if (json.InLaw != null)
            {
                housingType.Add("in.law");
            }
            if (json.Loft != null)
            {
                housingType.Add("loft");
            }
            if (json.Townhouse != null)
            {
                housingType.Add("townhouse");
            }
            if (json.Manufactured != null)
            {
                housingType.Add("manufactured");
            }
            if (json.AssistedLiving != null)
            {
                housingType.Add("assisted.living");
            }
            if (json.Land != null)
            {
                housingType.Add("land");
            }
            if (housingType.Count == 0)
            {
                housingType.Add("apartment");
                housingType.Add("condo");
                housingType.Add("cottage.cabin");
                housingType.Add("duplex");
                housingType.Add("flat");
                housingType.Add("house");
                housingType.Add("in.law");
                housingType.Add("loft");
                housingType.Add("townhouse");
                housingType.Add("manufactured");
                housingType.Add("assisted.living");
                housingType.Add("land");
            }
            return housingType;
        }

        private List<string> ChoiseRadioButton(string str)
        {
            List<string> list = new List<string>();
            if (str == "NoMatter")
            {
                list.Add("1");
                list.Add("0");
            }
            else if (str == "Yes")
            {
                list.Add("1");
            }
            else
            {
                list.Add("0");
            }
            return list;
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